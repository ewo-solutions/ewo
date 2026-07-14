"use client";

import { useEffect, useState } from "react";

const EXIT_MS = 1350;
const REMOVE_MS = 2050;

/** Brand intro overlay on hard page loads: "ewo." staggers in, then the
    curtain lifts. Client-side navigations don't remount the layout, so it
    plays only on first load/refresh. Hidden entirely under
    prefers-reduced-motion (see globals.css). */
export default function Preloader() {
  const [phase, setPhase] = useState<"in" | "exit" | "gone">("in");

  useEffect(() => {
    // Under reduced motion the overlay is already display:none via CSS;
    // unmount it immediately instead of playing the timeline.
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const exit = setTimeout(() => setPhase("exit"), reduce ? 0 : EXIT_MS);
    const remove = setTimeout(() => setPhase("gone"), reduce ? 0 : REMOVE_MS);
    return () => {
      clearTimeout(exit);
      clearTimeout(remove);
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div
      aria-hidden
      className={`preloader fixed inset-0 z-[100] flex items-center justify-center bg-ink transition-transform duration-700 ease-[cubic-bezier(.76,0,.24,1)] ${
        phase === "exit" ? "-translate-y-full" : ""
      }`}
    >
      <span className="flex overflow-hidden text-[clamp(56px,9vw,120px)] font-bold leading-none tracking-[-2px] text-white">
        <span className="animate-preloader-letter [animation-delay:.1s]">e</span>
        <span className="animate-preloader-letter text-lime [animation-delay:.22s]">
          w
        </span>
        <span className="animate-preloader-letter [animation-delay:.34s]">o</span>
        <span className="animate-preloader-dot text-lime [animation-delay:.55s]">
          .
        </span>
      </span>
    </div>
  );
}
