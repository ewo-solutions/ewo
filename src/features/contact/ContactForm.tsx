"use client";

import { useEffect, useRef, useState } from "react";

const serviceLabels = [
  "Website",
  "App Development",
  "Content",
  "Advertising",
  "Branding",
  "Social Media",
  "Other",
];

const industries = [
  "Agriculture",
  "Automotive",
  "Construction & Property",
  "Education",
  "Finance & Insurance",
  "Food & Beverage",
  "Health & Medical",
  "Hospitality & Tourism",
  "Legal & Professional Services",
  "Manufacturing",
  "Media & Entertainment",
  "Non-Profit",
  "Retail & E-commerce",
  "Technology & Software",
  "Transport & Logistics",
  "Other",
];

const fieldCls =
  "w-full rounded-full border-[1.5px] border-ink px-7 py-5 text-lg outline-none focus:border-violet";

const chipCls = (on: boolean) =>
  `cursor-pointer rounded-full border-[1.5px] border-ink px-7 py-3.5 text-base transition-all duration-250 hover:-translate-y-[2px] hover:shadow-[0_10px_24px_rgba(27,26,51,.2)] ${
    on ? "bg-ink text-lime" : "bg-transparent text-ink"
  }`;

/** Single-page contact form (no steps/wizard). Submits the same shape the
    API has always expected, including the honeypot and fill-time anti-spam
    fields — see /api/enquiry. */
export default function ContactForm() {
  const [services, setServices] = useState<string[]>([]);
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [hp, setHp] = useState(""); // honeypot
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const renderedAt = useRef<number | null>(null); // anti-spam: time the form first mounted
  useEffect(() => {
    renderedAt.current = Date.now();
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "contact",
          name,
          email,
          services,
          companyName,
          industry,
          message,
          company: hp,
          renderedAt: renderedAt.current,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Sending failed");
      }
      setDone(true);
    } catch (err) {
      setError(
        err instanceof Error && err.message !== "Failed to fetch"
          ? err.message
          : "Sending failed, please try again",
      );
    } finally {
      setSending(false);
    }
  };

  if (done) {
    return (
      <main className="mx-auto flex w-full max-w-[1200px] flex-1 flex-col items-center justify-center px-9 py-20 text-center">
        <div className="max-w-[820px] rounded-panel bg-lilac px-[10%] py-[90px] text-white">
          <h1 className="mb-5 text-[clamp(40px,5vw,72px)] font-normal tracking-[-1px]">
            Thank you{name ? `, ${name.split(" ")[0]}` : ""}.
          </h1>
          <p className="text-[19px] leading-[1.6]">
            Your enquiry is on its way. We&rsquo;ll get back to you within one working
            day to book your free 45-minute consultation.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-[720px] flex-1 px-9 pt-[110px] pb-20">
      <h1 className="mb-5 text-[clamp(40px,5.5vw,72px)] font-normal leading-[1.08] tracking-[-1px]">
        Let&rsquo;s start a <strong>conversation</strong>.
      </h1>
      <p className="mb-14 max-w-[520px] text-lg leading-[1.6] text-ink/70">
        Tell us a bit about your project and we&rsquo;ll get back to you within one
        working day to book a free 45-minute consultation.
      </p>

      <form onSubmit={submit} className="flex flex-col gap-10">
        <div>
          <p className="mb-4 text-base font-medium text-ink/70">
            Which service are you interested in?
          </p>
          <div className="flex flex-wrap gap-3">
            {serviceLabels.map((label) => {
              const on = services.includes(label);
              return (
                <button
                  key={label}
                  type="button"
                  onClick={() =>
                    setServices((prev) =>
                      on ? prev.filter((x) => x !== label) : [...prev, label],
                    )
                  }
                  className={chipCls(on)}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <input
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Company name"
            className={fieldCls}
          />
          <select
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className={`cursor-pointer appearance-none bg-[length:20px] bg-[right_28px_center] bg-no-repeat ${fieldCls} ${
              industry ? "text-ink" : "text-ink/45"
            }`}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%231B1A33' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
            }}
          >
            <option value="" disabled>
              Select your industry
            </option>
            {industries.map((i) => (
              <option key={i} value={i} className="text-ink">
                {i}
              </option>
            ))}
          </select>
        </div>

        <textarea
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your project — goals, timeline, links, whatever helps us understand."
          className="box-border w-full resize-y rounded-3xl border-[1.5px] border-ink px-7 py-6 text-lg outline-none focus:border-violet"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className={fieldCls}
          />
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className={fieldCls}
          />
        </div>

        <input
          type="text"
          value={hp}
          onChange={(e) => setHp(e.target.value)}
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden
          className="absolute -left-[9999px]"
        />

        <div>
          <button
            type="submit"
            disabled={sending}
            className="pill-a inline-flex cursor-pointer items-center gap-3.5 rounded-full bg-ink py-2 pl-7 pr-2 text-base font-medium text-lime transition-all duration-250 hover:-translate-y-[3px] hover:shadow-[0_14px_30px_rgba(27,26,51,.25)] disabled:cursor-wait disabled:opacity-70"
          >
            {sending ? "Sending…" : "Send enquiry"}
            <span className="pill-circle inline-flex size-[38px] items-center justify-center rounded-full bg-lime text-ink transition-all duration-250">
              ↗︎
            </span>
          </button>
          {error && (
            <p className="mt-4 text-[15px] font-medium text-violet" role="alert">
              {error} — or email us directly at{" "}
              <a href="mailto:info@ewosolutions.com" className="underline">
                info@ewosolutions.com
              </a>
            </p>
          )}
        </div>
      </form>
    </main>
  );
}
