"use client";

import { useEffect } from "react";

/** Tags top-level page sections for rise-and-fade reveal as they scroll
    into view. Runs per navigation (mounted from template.tsx). Applies
    classes via JS so content stays fully visible without JavaScript, and
    does nothing under prefers-reduced-motion. */
export default function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const els = Array.from(
      document.querySelectorAll<HTMLElement>("main > *, body footer"),
    );
    // Children of [data-stagger] containers cascade in with a per-item delay.
    const staggered: HTMLElement[] = [];
    for (const group of document.querySelectorAll<HTMLElement>("[data-stagger]")) {
      Array.from(group.children).forEach((child, i) => {
        const el = child as HTMLElement;
        el.style.transitionDelay = `${Math.min(i * 90, 540)}ms`;
        staggered.push(el);
      });
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    for (const el of [...els, ...staggered]) {
      el.classList.add("scroll-reveal");
      io.observe(el);
    }

    return () => {
      io.disconnect();
      for (const el of [...els, ...staggered]) {
        el.classList.remove("scroll-reveal", "is-visible");
        el.style.transitionDelay = "";
      }
    };
  }, []);

  return null;
}
