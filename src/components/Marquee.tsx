/** Endless scrolling text strip (pure CSS). Decorative — hidden from
    assistive tech, frozen under prefers-reduced-motion. */
export default function Marquee({ items }: { items: readonly string[] }) {
  return (
    <div aria-hidden className="marquee select-none overflow-hidden py-[90px]">
      <div className="marquee-track flex w-max motion-reduce:animate-none">
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0 items-center">
            {items.map((item) => (
              <span
                key={item}
                className="flex items-center whitespace-nowrap text-[clamp(44px,5.5vw,84px)] font-light tracking-[-1px] text-ink"
              >
                {item}
                <span className="mx-8 inline-block size-4 rounded-full bg-lime" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
