import Link from "next/link";

type Rest = "white" | "dark" | "lime" | "outline-lime";

const restStyles: Record<Rest, { pill: string; circle: string }> = {
  white: { pill: "bg-white text-ink", circle: "bg-lilac text-white" },
  dark: { pill: "bg-ink text-lime", circle: "bg-lime text-ink" },
  lime: { pill: "bg-lime text-ink", circle: "bg-ink text-lime" },
  "outline-lime": {
    pill: "bg-transparent border-[1.5px] border-lime text-lime",
    circle: "bg-lime text-ink",
  },
};

export default function PillButton({
  href,
  rest,
  hover,
  size = "md",
  children,
}: {
  href: string;
  rest: Rest;
  /** Fixed hover target: "lime" inverts to lime-on-ink, "dark" to ink-on-lime */
  hover: "lime" | "dark";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}) {
  const s = restStyles[rest];
  const sizes = {
    sm: { pill: "gap-3 py-1.5 pl-[22px] pr-1.5 text-[14.5px]", circle: "size-8" },
    md: { pill: "gap-3.5 py-2 pl-[26px] pr-2 text-base", circle: "size-[38px]" },
    lg: { pill: "gap-3.5 py-2.5 pl-8 pr-2.5 text-lg", circle: "size-11" },
  }[size];
  return (
    <Link
      href={href}
      className={`${hover === "lime" ? "pill-a" : "pill-b"} ${s.pill} ${sizes.pill} inline-flex items-center rounded-full font-medium transition-all duration-250 hover:-translate-y-[3px] hover:shadow-[0_14px_30px_rgba(27,26,51,.25)]`}
    >
      {children}
      <span
        className={`pill-circle ${s.circle} ${sizes.circle} inline-flex items-center justify-center rounded-full transition-all duration-250`}
      >
        ↗
      </span>
    </Link>
  );
}
