"use client";

import { useState } from "react";
import PillButton from "@/components/PillButton";
import { services } from "@/data/services";

export default function ServiceAccordion() {
  const [open, setOpen] = useState(1);

  return (
    <section className="mx-auto max-w-[1848px] px-9">
      <div className="rounded-panel bg-lilac px-[6%] py-[90px]">
        <div className="flex min-h-[520px] items-stretch gap-2.5 overflow-x-auto">
          {services.map((s, i) => {
            const isOpen = i === open;
            return (
              <div
                key={s.name}
                onClick={() => setOpen(i)}
                className={`box-border flex cursor-pointer flex-col overflow-hidden rounded-folder bg-white shadow-[0_4px_24px_rgba(27,26,51,.12)] transition-[flex,min-width,padding] duration-[450ms] ease-[cubic-bezier(.4,0,.2,1)] ${
                  isOpen
                    ? "min-w-[min(440px,62vw)] flex-[6_1_0%] px-8 py-7"
                    : "min-w-0 flex-[0.4_1_0%] px-4 py-7"
                }`}
              >
                <span
                  className={`text-lg font-medium ${isOpen ? "text-lime" : "text-lilac"}`}
                >
                  {String(i + 1).padStart(2, "0")}.
                </span>
                {isOpen ? (
                  <div className="mt-9">
                    <h3 className="mb-5 text-[clamp(28px,2.6vw,40px)] font-medium leading-[1.1]">
                      {s.name}
                    </h3>
                    <p className="mb-8 max-w-[380px] text-base leading-[1.65] text-ink/75">
                      {s.desc}
                    </p>
                    <PillButton href="/work" rest="dark" hover="lime" size="sm">
                      View our work
                    </PillButton>
                  </div>
                ) : (
                  <span className="mt-auto whitespace-nowrap text-[clamp(18px,1.7vw,26px)] font-medium leading-[1.15] [writing-mode:vertical-rl] rotate-180">
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
