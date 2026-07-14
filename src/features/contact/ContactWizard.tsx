"use client";

import { useState } from "react";

const serviceLabels = ["Website", "Content", "Advertising", "Branding", "Social Media"];
const budgetLabels = ["Under R25k", "R25k – R75k", "R75k – R200k", "R200k+"];

const chipCls = (on: boolean) =>
  `cursor-pointer rounded-full border-[1.5px] border-ink px-11 py-5 text-[clamp(18px,1.6vw,24px)] transition-all duration-250 hover:-translate-y-[3px] hover:shadow-[0_14px_30px_rgba(27,26,51,.25)] ${
    on ? "bg-ink text-lime" : "bg-transparent text-ink"
  }`;

const headingCls =
  "mb-[70px] max-w-[900px] text-[clamp(44px,5.5vw,84px)] font-normal leading-[1.08] tracking-[-1px]";

/** 4-step contact flow. Client state only — wire the final submit to an
    email/CRM provider in production. */
export default function ContactWizard() {
  const [step, setStep] = useState(1);
  const [services, setServices] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const next = () => {
    if (step === 4) {
      if (name && email) setDone(true);
    } else {
      setStep((s) => s + 1);
    }
  };

  return (
    <main className="mx-auto flex w-full max-w-[1200px] flex-1 flex-col items-center px-9 pt-[110px] pb-20 text-center">
      {done ? (
        <div className="max-w-[820px] rounded-panel bg-lilac px-[10%] py-[90px] text-white">
          <h1 className="mb-5 text-[clamp(40px,5vw,72px)] font-normal tracking-[-1px]">
            Thank you{name ? `, ${name.split(" ")[0]}` : ""}.
          </h1>
          <p className="text-[19px] leading-[1.6]">
            Your enquiry is on its way. We&rsquo;ll get back to you within one working
            day to book your free 45-minute consultation.
          </p>
        </div>
      ) : (
        <>
          {step === 1 && (
            <>
              <h1 className={headingCls}>
                Which <strong>service</strong> are you interested in?
              </h1>
              <div className="flex flex-wrap justify-center gap-5">
                {serviceLabels.map((label) => {
                  const on = services.includes(label);
                  return (
                    <button
                      key={label}
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
            </>
          )}
          {step === 2 && (
            <>
              <h1 className={headingCls}>
                What&rsquo;s your <strong>budget</strong> range?
              </h1>
              <div className="flex flex-wrap justify-center gap-5">
                {budgetLabels.map((label) => (
                  <button
                    key={label}
                    onClick={() => setBudget(label)}
                    className={chipCls(budget === label)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </>
          )}
          {step === 3 && (
            <>
              <h1 className={`${headingCls} mb-[60px]`}>
                Tell us about <strong>your project</strong>.
              </h1>
              <textarea
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Goals, timeline, links — whatever helps us understand."
                className="box-border w-full max-w-[720px] resize-y rounded-3xl border-[1.5px] border-ink px-7 py-6 text-lg outline-none focus:border-violet"
              />
            </>
          )}
          {step === 4 && (
            <>
              <h1 className={`${headingCls} mb-[60px]`}>
                Where can we <strong>reach you</strong>?
              </h1>
              <div className="flex w-full max-w-[520px] flex-col gap-5">
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="rounded-full border-[1.5px] border-ink px-7 py-5 text-lg outline-none focus:border-violet"
                />
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="rounded-full border-[1.5px] border-ink px-7 py-5 text-lg outline-none focus:border-violet"
                />
              </div>
            </>
          )}

          {/* PROGRESS RAIL */}
          <div className="mt-auto w-full max-w-[1000px] pt-[90px]">
            <p className="mb-6 text-[clamp(18px,1.8vw,26px)] font-medium text-lime">
              Step 0{step} of 04
            </p>
            <div className="relative flex h-2.5 items-center">
              <div className="absolute inset-x-0 h-[1.5px] bg-lilac" />
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ${
                    i === step ? "size-4 bg-lime" : i < step ? "size-2.5 bg-lime" : "size-2.5 bg-lilac"
                  }`}
                  style={{ left: `${((i - 1) / 3) * 100}%` }}
                />
              ))}
            </div>
            <div className="mt-9 flex justify-between">
              <button
                onClick={() => setStep((s) => Math.max(1, s - 1))}
                className={`cursor-pointer rounded-full border-[1.5px] border-ink/35 bg-transparent px-8 py-3.5 text-base font-medium text-ink transition-colors hover:border-ink ${
                  step === 1 ? "invisible" : "visible"
                }`}
              >
                ← Back
              </button>
              <button
                onClick={next}
                className="pill-a inline-flex cursor-pointer items-center gap-3.5 rounded-full bg-ink py-2 pl-7 pr-2 text-base font-medium text-lime transition-all duration-250 hover:-translate-y-[3px] hover:shadow-[0_14px_30px_rgba(27,26,51,.25)]"
              >
                {step === 4 ? "Send enquiry" : "Next"}
                <span className="pill-circle inline-flex size-[38px] items-center justify-center rounded-full bg-lime text-ink transition-all duration-250">
                  ↗
                </span>
              </button>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
