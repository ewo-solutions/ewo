"use client";

import { useState } from "react";
import PillButton from "@/components/PillButton";
import { serviceDetails } from "@/data/serviceDetails";

/** Folder accordion: horizontal expanding folders on desktop, a vertical
    stacked accordion on mobile (tap a service name to expand it). */
export default function ServiceAccordion() {
  const [open, setOpen] = useState(1);

  return (
    <section className="mx-auto max-w-[1848px] px-9">
      <div className="rounded-panel bg-lilac px-[6%] py-12 md:py-[90px]">
        <div className="flex flex-col items-stretch gap-2.5 md:min-h-[520px] md:flex-row md:overflow-x-auto">
          {serviceDetails.map((s, i) => {
            const isOpen = i === open;
            return (
              <div
                key={s.slug}
                onClick={() => setOpen(i)}
                className={`box-border flex cursor-pointer flex-col overflow-hidden rounded-folder bg-white shadow-[0_4px_24px_rgba(27,26,51,.12)] transition-[flex,min-width,padding] duration-[450ms] ease-[cubic-bezier(.4,0,.2,1)] ${
                  isOpen
                    ? "px-6 py-6 md:min-w-[min(440px,62vw)] md:flex-[6_1_0%] md:px-8 md:py-7"
                    : "px-6 py-4 md:min-w-0 md:flex-[0.4_1_0%] md:px-4 md:py-7"
                }`}
              >
                <div className="flex items-baseline gap-3 md:block">
                  <span
                    className={`text-lg font-medium ${isOpen ? "text-lime" : "text-lilac"}`}
                  >
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  {/* Mobile closed state: horizontal title row */}
                  {!isOpen && (
                    <span className="text-lg font-medium md:hidden">{s.name}</span>
                  )}
                </div>
                {isOpen ? (
                  <div className="mt-4 md:mt-9">
                    <h3 className="mb-4 text-[clamp(24px,2.6vw,40px)] font-medium leading-[1.1] md:mb-5">
                      {s.name}
                    </h3>
                    <p className="mb-6 max-w-[380px] text-base leading-[1.65] text-ink/75 md:mb-8">
                      {s.desc}
                    </p>
                    <PillButton href={`/services/${s.slug}`} rest="dark" hover="lime" size="sm">
                      Explore this service
                    </PillButton>
                  </div>
                ) : (
                  /* Desktop closed state: vertical folder spine */
                  <span className="mt-auto hidden whitespace-nowrap text-[clamp(18px,1.7vw,26px)] font-medium leading-[1.15] md:block md:rotate-180 md:[writing-mode:vertical-rl]">
                    {s.name}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
