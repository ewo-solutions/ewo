/** Circular rotating text badge (pure CSS animation, no client JS). */
export default function RotatingTextBadge({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none animate-spin-slow motion-reduce:animate-none ${className}`}
    >
      <svg viewBox="0 0 200 200" width="100%" height="100%">
        <defs>
          <path
            id="badge-circle"
            d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
          />
        </defs>
        <text
          className="fill-white font-sans"
          style={{ fontSize: "15.5px", letterSpacing: "4px" }}
        >
          <textPath href="#badge-circle">{text}</textPath>
        </text>
      </svg>
    </div>
  );
}
