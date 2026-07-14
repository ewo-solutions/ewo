"use client";

import { Children, useEffect, useRef, useState } from "react";

/** Horizontal snap carousel: drag/swipe-scrollable, dot indicators, and
    optional auto-advance (pauses on hover/touch, skipped entirely under
    prefers-reduced-motion). Cards peek at the container edge so it reads
    as scrollable on mobile. */
export default function Carousel({
  children,
  autoMs = 0,
  itemClassName = "",
  ariaLabel,
}: {
  children: React.ReactNode;
  /** Auto-advance interval; 0 disables. */
  autoMs?: number;
  itemClassName?: string;
  ariaLabel?: string;
}) {
  const items = Children.toArray(children);
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const paused = useRef(false);

  const goTo = (i: number) => {
    const el = track.current;
    if (!el) return;
    const child = el.children[((i % items.length) + items.length) % items.length] as
      | HTMLElement
      | undefined;
    child?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  };

  // Track which card is closest to the left edge for the dots.
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const onScroll = () => {
      let best = 0;
      let bestDist = Infinity;
      Array.from(el.children).forEach((c, i) => {
        const d = Math.abs(
          (c as HTMLElement).offsetLeft - el.scrollLeft,
        );
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      });
      setIndex(best);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!autoMs) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => {
      if (paused.current || !track.current) return;
      const el = track.current;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8;
      if (atEnd) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        const next = Array.from(el.children).findIndex(
          (c) => (c as HTMLElement).offsetLeft > el.scrollLeft + 8,
        );
        (el.children[next === -1 ? 0 : next] as HTMLElement)?.scrollIntoView({
          behavior: "smooth",
          inline: "start",
          block: "nearest",
        });
      }
    }, autoMs);
    return () => clearInterval(t);
  }, [autoMs]);

  return (
    <div
      aria-label={ariaLabel}
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      onTouchStart={() => (paused.current = true)}
      onTouchEnd={() => setTimeout(() => (paused.current = false), 4000)}
    >
      <div
        ref={track}
        className="scrollbar-none relative -mx-1 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-1 pb-2"
      >
        {items.map((child, i) => (
          <div key={i} className={`shrink-0 snap-start ${itemClassName}`}>
            {child}
          </div>
        ))}
      </div>
      <div className="mt-7 flex justify-center gap-2.5">
        {items.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to item ${i + 1}`}
            onClick={() => goTo(i)}
            className={`cursor-pointer rounded-full transition-all duration-300 ${
              i === index ? "size-3.5 bg-lime" : "size-2.5 bg-lilac hover:bg-violet"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
