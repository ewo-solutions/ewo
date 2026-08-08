"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/site";

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-4 z-50 mx-auto mt-6 w-[calc(100%-48px)] max-w-[1426px] rounded-nav bg-lilac/35 backdrop-blur-[14px]">
      <div className="flex flex-wrap items-center justify-between gap-3.5 px-9 py-5">
        <Link href="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
          <Image src="/ewo-logo.svg" alt="ewo." width={129} height={32} className="h-8 w-auto" />
        </Link>
        <div className="hidden flex-wrap items-center gap-x-11 gap-y-[18px] text-base font-medium min-[861px]:flex">
          {navLinks.map(({ label, href }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`relative transition-colors ${
                  active ? "text-ink" : "text-white hover:text-violet"
                }`}
              >
                {active && (
                  <span className="absolute top-1/2 left-1/2 -z-10 size-[30px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime" />
                )}
                {label}
              </Link>
            );
          })}
        </div>
        <button
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
          className="flex cursor-pointer flex-col justify-center gap-[5px] px-1.5 py-2.5 min-[861px]:hidden"
        >
          <span className="h-[2.5px] w-6 rounded-sm bg-ink" />
          <span className="h-[2.5px] w-6 rounded-sm bg-ink" />
          <span className="h-[2.5px] w-6 rounded-sm bg-ink" />
        </button>
      </div>
      {menuOpen && (
        <div className="absolute inset-x-0 top-[calc(100%+10px)] flex flex-col rounded-nav bg-white/95 px-6 py-3.5 shadow-[0_20px_50px_rgba(27,26,51,.18)] backdrop-blur-[14px] min-[861px]:hidden">
          {navLinks.map(({ label, href }, i) => {
            const isContact = href === "/contact";
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`px-2 py-3.5 text-[17px] ${
                  isContact ? "font-semibold text-violet" : "font-medium"
                } ${i < navLinks.length - 1 ? "border-b border-lilac/40" : ""}`}
              >
                {label}
                {isContact && " →︎"}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
