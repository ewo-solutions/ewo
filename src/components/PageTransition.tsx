"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const COVER_MS = 480;
const REVEAL_MS = 700;
const FAILSAFE_MS = 2500;

/** Curtain transition between pages: intercepts internal link clicks, sweeps
    a lime+ink double curtain over the screen, navigates behind it, then lifts
    the curtain off the new page. Skipped entirely under
    prefers-reduced-motion (links fall through to normal navigation). */
export default function PageTransition() {
  const router = useRouter();
  const pathname = usePathname();
  const [state, setState] = useState<"idle" | "covering" | "revealing">("idle");
  const target = useRef<string | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as HTMLElement).closest("a");
      if (!a || (a.target && a.target !== "_self")) return;
      const href = a.getAttribute("href");
      if (!href || !href.startsWith("/")) return;
      const url = new URL(href, location.href);
      if (url.pathname === location.pathname) return;
      e.preventDefault();
      target.current = url.pathname + url.search + url.hash;
      setState("covering");
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  // Navigate once the curtain has covered the screen; failsafe-reveal if the
  // route never resolves so the overlay can't strand the visitor.
  useEffect(() => {
    if (state !== "covering") return;
    const go = setTimeout(() => {
      if (target.current) router.push(target.current);
    }, COVER_MS);
    const failsafe = setTimeout(() => setState("revealing"), FAILSAFE_MS);
    return () => {
      clearTimeout(go);
      clearTimeout(failsafe);
    };
  }, [state, router]);

  // New route committed under the curtain — lift it.
  useEffect(() => {
    if (state !== "covering" || !target.current) return;
    if (pathname === target.current.split(/[?#]/)[0]) {
      target.current = null;
      const t = setTimeout(() => setState("revealing"), 60);
      return () => clearTimeout(t);
    }
  }, [pathname, state]);

  useEffect(() => {
    if (state !== "revealing") return;
    const t = setTimeout(() => setState("idle"), REVEAL_MS);
    return () => clearTimeout(t);
  }, [state]);

  if (state === "idle") return null;

  return (
    <div aria-hidden className={`page-curtain ${state}`}>
      <span className="curtain-lime" />
      <span className="curtain-ink" />
    </div>
  );
}
