/** 1px rule with an 8px dot at each end (or only the start, per About hero). */
export default function Divider({
  color = "lilac",
  endDot = true,
  className = "",
}: {
  color?: "lilac" | "lime";
  endDot?: boolean;
  className?: string;
}) {
  const c = color === "lime" ? "bg-lime" : "bg-lilac";
  return (
    <div className={`flex items-center ${className}`}>
      <span className={`size-2 rounded-full ${c}`} />
      <span className={`h-px flex-1 ${c}`} />
      {endDot && <span className={`size-2 rounded-full ${c}`} />}
    </div>
  );
}
