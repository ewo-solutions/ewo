/** Inner-page hero: giant two-line display heading left, tagline right. */
export default function PageHero({
  title,
  tagline,
  taglineRest,
  kicker,
}: {
  title: React.ReactNode;
  tagline: string;
  taglineRest: string;
  kicker: string;
}) {
  return (
    <header className="mx-auto flex max-w-[1426px] flex-wrap items-start justify-between gap-10 px-9 pt-[100px] pb-[70px]">
      <h1 className="text-[clamp(70px,10vw,170px)] font-light leading-[1.02] tracking-[-2px]">
        {title}
      </h1>
      <div className="max-w-[400px] pt-6 text-right">
        <p className="text-[clamp(20px,1.8vw,28px)] leading-[1.25]">
          <strong>{tagline}</strong>
          <br />
          {taglineRest}
        </p>
        <p className="mt-[18px] text-sm font-semibold text-lime">
          <span className="mr-3 inline-block h-px w-[120px] bg-lilac align-middle" />
          {kicker}
        </p>
      </div>
    </header>
  );
}
