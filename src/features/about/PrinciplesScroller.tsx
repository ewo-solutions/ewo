"use client";

import { useEffect, useRef, useState } from "react";
import { principles } from "@/data/team";

/** Desktop: "Principle" + big number stay pinned on the left while the
    principle copy scrolls on the right; the number swaps to track whichever
    block is in view. Mobile: a horizontal snap-scroll row of cards with a
    peeking next card to signal scrollability. */
export default function PrinciplesScroller() {
  const [active, setActive] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const i = itemRefs.current.indexOf(entry.target as HTMLDivElement);
            if (i !== -1) setActive(i);
          }
        }
      },
      { rootMargin: "-40% 0px -50% 0px" },
    );
    for (const el of itemRefs.current) {
      if (el) io.observe(el);
    }
    return () => io.disconnect();
  }, []);

  return (
    <section className="mx-auto max-w-[1200px] px-9 pb-[130px]">
      {/* Desktop: sticky number + scrolling copy */}
      <div className="hidden gap-16 md:grid md:grid-cols-[280px_1fr]">
        <div className="relative">
          <div className="sticky top-40">
            <p className="mb-2 text-[15px] font-bold uppercase tracking-[.1em] text-lilac">
              Principle
            </p>
            <span
              key={active}
              className="block animate-word-in text-[clamp(90px,9vw,150px)] font-bold leading-none text-lilac motion-reduce:animate-none"
            >
              {String(active + 1).padStart(2, "0")}
            </span>
          </div>
        </div>
        <div>
          {principles.map(({ label, name, desc }, i) => (
            <div
              key={label}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              className="border-t border-lilac/50 py-16 first:border-t-0"
            >
              <h3 className="mb-4 text-[clamp(24px,2.2vw,34px)] font-medium">{name}</h3>
              <p className="max-w-[560px] text-base leading-[1.7] text-ink/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: horizontal snap cards */}
      <div className="md:hidden">
        <div className="scrollbar-none -mx-9 flex snap-x snap-mandatory gap-4 overflow-x-auto px-9 pb-2">
          {principles.map(({ label, name, desc }, i) => (
            <div
              key={label}
              className="w-[82%] shrink-0 snap-start rounded-card bg-lilac/15 p-7"
            >
              <span className="mb-3 block text-4xl font-bold text-lilac">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-3 text-xl font-medium">{name}</h3>
              <p className="text-[15px] leading-[1.65] text-ink/80">{desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-[13px] font-semibold uppercase tracking-[.12em] text-lilac">
          Swipe to explore →
        </p>
      </div>
    </section>
  );
}
