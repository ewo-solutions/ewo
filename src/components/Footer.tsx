import Link from "next/link";
import Image from "next/image";
import { contact, footer, navLinks, socials } from "@/data/site";

const linkCls = "text-ink/70 transition-colors hover:text-violet";

export default function Footer({
  variant = "full",
}: {
  variant?: "full" | "slim";
}) {
  if (variant === "slim") {
    return (
      <footer className="mx-auto flex w-[calc(100%-72px)] max-w-[1426px] flex-wrap justify-between gap-3 border-t border-lilac/50 py-8 text-[14.5px] text-ink/65">
        <span>
          {contact.phones[0]} ·{" "}
          <a href={`mailto:${contact.email}`} className={linkCls}>
            {contact.email}
          </a>
        </span>
        <span>{contact.address}</span>
        <a href={socials[0].href} className={linkCls}>
          LinkedIn ↗
        </a>
      </footer>
    );
  }

  return (
    <footer className="mx-auto max-w-[1426px] px-9 pt-[110px] pb-14">
      <div className="mb-20 grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-16">
        <h2 className="text-[clamp(40px,4.5vw,68px)] font-normal leading-[1.1]">
          We are a
          <br />
          <span className="text-lilac">digital</span> agency
        </h2>
        <p className="max-w-[380px] self-end text-base leading-[1.7] text-ink/70">
          {footer.blurb}
        </p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-10 text-[15.5px] leading-8">
        <div>
          <strong className="mb-2 block">Chat to us</strong>
          <span className="text-ink/70">
            {contact.phones[0]}
            <br />
            {contact.phones[1]}
            <br />
          </span>
          <a href={`mailto:${contact.email}`} className={linkCls}>
            {contact.email}
          </a>
        </div>
        <div className="flex flex-col">
          <strong className="mb-2">Quick Links</strong>
          {navLinks.map(({ label, href }) => (
            <Link key={href} href={href} className={linkCls}>
              {label}
            </Link>
          ))}
        </div>
        <div>
          <strong className="mb-2 block">Somerset West</strong>
          <span className="text-ink/70">{contact.address}</span>
        </div>
        <div className="flex flex-col">
          <strong className="mb-2">Follow Us</strong>
          {socials.map(({ label, href }) => (
            <a key={label} href={href} className={linkCls}>
              {label}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-16 flex justify-between border-t border-lilac/50 pt-6 text-[13px] text-ink/50">
        <span>{footer.copyright}</span>
        <Image src="/ewo-logo.svg" alt="ewo." width={65} height={16} className="h-4 w-auto" />
      </div>
    </footer>
  );
}
