"use client";

import { useState } from "react";
import Image from "next/image";
import SectionEyebrow from "@/components/SectionEyebrow";

/** Newsletter panel shared by Home and Services. Signups are emailed to the
    agency inbox via /api/enquiry. */
export default function Newsletter({
  eyebrowColor = "lilac",
}: {
  eyebrowColor?: "lilac" | "green";
}) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "newsletter", email }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Signup failed");
      }
      setSubscribed(true);
    } catch (err) {
      setError(
        err instanceof Error && err.message !== "Failed to fetch"
          ? err.message
          : "Signup failed, please try again",
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="mx-auto max-w-[1848px] px-9">
      <div className="relative overflow-hidden rounded-mask">
        <Image
          src="/images/brand-photo.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/92 mix-blend-multiply" />
        <div className="relative px-[8%] py-[90px] text-center text-white">
          <SectionEyebrow color={eyebrowColor === "green" ? "green" : "lilac"}>
            Our newsletter
          </SectionEyebrow>
          <h2 className="mb-11 text-[clamp(34px,4vw,60px)] font-bold tracking-[.05em]">
            Get <em>insider tips</em> and more!
          </h2>
          {subscribed ? (
            <p className="text-[19px] text-lime">
              You&rsquo;re in — insider tips are on their way. ✦︎
            </p>
          ) : (
            <form className="mx-auto flex max-w-[640px] justify-center" onSubmit={subscribe}>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="min-w-0 flex-1 rounded-l-full border border-r-0 border-white/50 bg-lilac/25 px-7 py-[18px] text-[17px] text-white outline-none backdrop-blur-sm placeholder:text-white/60"
              />
              <button
                type="submit"
                disabled={sending}
                className="pill-b cursor-pointer rounded-r-full bg-lime px-9 py-[18px] text-[17px] font-medium text-ink disabled:cursor-wait disabled:opacity-70"
              >
                {sending ? "…" : "Subscribe."}
              </button>
            </form>
          )}
          {error && !subscribed && (
            <p className="mt-4 text-[15px] font-medium text-lime" role="alert">
              {error}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
