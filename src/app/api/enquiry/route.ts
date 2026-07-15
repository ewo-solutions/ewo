import { NextResponse } from "next/server";

/** Receives contact-wizard enquiries and newsletter signups and emails them
    via Resend (https://resend.com).

    Required env (set in Vercel → Project → Settings → Environment Variables):
    - RESEND_API_KEY   — Resend API key
    - ENQUIRY_TO       — recipient inbox (default info@ewosolutions.com)
    - ENQUIRY_FROM     — verified sender. Until the ewosolutions domain is
                         verified in Resend, use onboarding@resend.dev (sandbox:
                         delivers only to the Resend account owner's address). */

const MAX_LEN = 5000;

interface EnquiryBody {
  type?: "contact" | "newsletter";
  name?: string;
  email?: string;
  services?: string[];
  companyName?: string;
  industry?: string;
  message?: string;
  company?: string; // honeypot — real visitors never fill this
}

const clean = (v: unknown, max = 200) =>
  typeof v === "string" ? v.slice(0, max).trim() : "";

export async function POST(request: Request) {
  let body: EnquiryBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: pretend success so bots don't learn they were caught.
  if (clean(body.company)) return NextResponse.json({ ok: true });

  const type = body.type === "newsletter" ? "newsletter" : "contact";
  const email = clean(body.email);
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }

  const name = clean(body.name);
  if (type === "contact" && !name) {
    return NextResponse.json({ error: "Name required" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service is not configured yet" },
      { status: 503 },
    );
  }

  // Comma-separated list; defaults to both directors.
  const to = (
    process.env.ENQUIRY_TO || "emile@ewosolutions.com,lourens@ewosolutions.com"
  )
    .split(",")
    .map((addr) => addr.trim())
    .filter(Boolean);
  const from = process.env.ENQUIRY_FROM || "EWO Website <onboarding@resend.dev>";

  let subject: string;
  let text: string;
  if (type === "newsletter") {
    subject = `Newsletter signup: ${email}`;
    text = `New newsletter signup from the website:\n\n${email}\n`;
  } else {
    const services = Array.isArray(body.services)
      ? body.services.map((s) => clean(s)).filter(Boolean).slice(0, 10)
      : [];
    subject = `Website enquiry from ${name}`;
    text = [
      "New enquiry from the website contact form:",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${clean(body.companyName) || "—"}`,
      `Industry: ${clean(body.industry) || "—"}`,
      `Services: ${services.length ? services.join(", ") : "—"}`,
      "",
      "Project details:",
      clean(body.message, MAX_LEN) || "—",
    ].join("\n");
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from, to, reply_to: email, subject, text }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error("Resend error", res.status, detail);
    return NextResponse.json(
      { error: "Sending failed, please try again" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
