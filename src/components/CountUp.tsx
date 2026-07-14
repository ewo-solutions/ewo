"use client";

import { useEffect, useRef, useState } from "react";

const DURATION_MS = 1400;

/** Splits "+120%" → prefix "+", number 120, suffix "%"; "2.5×" keeps its
    decimal precision while counting. */
function parseValue(value: string) {
  const m = value.match(/^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);
  if (!m) return null;
  return {
    prefix: m[1],
    target: parseFloat(m[2]),
    decimals: (m[2].split(".")[1] ?? "").length,
    suffix: m[3],
  };
}

/** Animated stat counter: renders the final value on the server (SEO/no-JS
    safe), then counts up from zero the first time it scrolls into view.
    Values without a number, or reduced-motion visitors, get the static
    figure. */
export default function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const parsed = parseValue(value);
    const el = ref.current;
    if (!parsed || !el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / DURATION_MS, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setDisplay(
            parsed.prefix +
              (parsed.target * eased).toFixed(parsed.decimals) +
              parsed.suffix,
          );
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return <span ref={ref}>{display}</span>;
}
