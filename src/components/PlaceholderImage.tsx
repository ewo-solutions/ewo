/** Stand-in for photography that doesn't exist yet (team, case studies).
    Swap for next/image once real assets arrive. */
export default function PlaceholderImage({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center bg-ink-secondary/60 text-center text-sm text-white/40 ${className}`}
    >
      {label}
    </div>
  );
}
