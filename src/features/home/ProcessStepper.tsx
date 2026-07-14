"use client";

import { useState } from "react";
import Image from "next/image";
import SectionEyebrow from "@/components/SectionEyebrow";
import { processSteps } from "@/data/home";

export default function ProcessStepper() {
  const [step, setStep] = useState(0);
  const cur = processSteps[step];

  return (
    <section className="mx-auto max-w-[1426px] px-9 py-[130px]">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,480px),1fr))] items-start gap-[72px]">
        <div className="border-l-[5px] border-lilac pl-8 md:pl-14">
          <div className="mb-9 flex items-center gap-6">
            <span className="text-[clamp(80px,8vw,130px)] font-bold leading-none text-ink/15">
              {cur.label}
            </span>
            <SectionEyebrow color="lime">Our Process</SectionEyebrow>
          </div>
          <h3 className="mb-[18px] text-[clamp(26px,2.6vw,38px)] font-medium">
            {cur.name}
          </h3>
          <p className="mb-11 max-w-[560px] text-[17px] leading-[1.7] text-ink/75">
            {cur.desc}
          </p>
          <div className="flex gap-3">
            {processSteps.map((s, i) => (
              <button
                key={s.label}
                onClick={() => setStep(i)}
                aria-label={`Step ${s.label}: ${s.name}`}
                className={`size-11 cursor-pointer rounded-full border-[1.5px] border-ink text-[15px] font-semibold transition-colors ${
                  i === step ? "bg-ink text-lime" : "bg-transparent text-ink"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
        <Image
          src="/images/process-photo.jpg"
          alt="Our process"
          width={1400}
          height={1400}
          className="aspect-[2/3] w-full rounded-card object-cover"
          sizes="(max-width: 1024px) 100vw, 640px"
        />
      </div>
    </section>
  );
}
