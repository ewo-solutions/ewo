const colors = {
  lilac: "text-lilac",
  lime: "text-lime [-webkit-text-stroke:.3px_rgba(27,26,51,.4)]",
  green: "text-green",
  white: "text-white",
} as const;

export default function SectionEyebrow({
  color = "lilac",
  children,
}: {
  color?: keyof typeof colors;
  children: React.ReactNode;
}) {
  return (
    <p
      className={`mb-3.5 text-[15px] font-bold uppercase tracking-[.1em] ${colors[color]}`}
    >
      {children}
    </p>
  );
}
