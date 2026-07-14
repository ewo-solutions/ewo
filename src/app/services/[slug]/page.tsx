import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import CountUp from "@/components/CountUp";
import Divider from "@/components/Divider";
import Footer from "@/components/Footer";
import PillButton from "@/components/PillButton";
import { darkPanelSlugs, servicePages } from "@/data/servicePages";

export function generateStaticParams() {
  return servicePages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = servicePages.find((s) => s.slug === slug);
  return { title: service?.eyebrow ?? "Services" };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicePages.find((s) => s.slug === slug);
  if (!service) redirect("/services");

  const dark = darkPanelSlugs.includes(service.slug);
  const others = servicePages.filter((s) => s.slug !== service.slug);

  return (
    <main>
      {/* BREADCRUMB HERO */}
      <header className="mx-auto max-w-[1426px] px-9 pt-[90px] pb-[60px]">
        <p className="mb-[22px] text-[15px] font-bold uppercase tracking-[.1em] text-lilac">
          <Link href="/services" className="text-lilac transition-colors hover:text-violet">
            Services
          </Link>{" "}
          <span className="text-lime">→</span> {service.eyebrow}
        </p>
        <div className="flex flex-wrap items-end justify-between gap-10">
          <h1 className="max-w-[900px] text-balance text-[clamp(52px,7.5vw,120px)] font-light leading-[1.02] tracking-[-2px]">
            {service.titleLight}
            <br />
            <span className="font-bold">
              {service.titleBold}
              <span className="text-lime">.</span>
            </span>
          </h1>
          <div className="max-w-[400px] pb-3 text-right">
            <p className="text-[clamp(19px,1.7vw,26px)] font-bold leading-[1.3] text-lilac">
              {service.tagline}
            </p>
            <p className="mt-4 text-sm font-semibold text-lilac">
              <span className="mr-3 inline-block h-px w-[120px] bg-lilac align-middle" />
              {service.num} / 08
            </p>
          </div>
        </div>
      </header>
      <Divider className="mx-auto max-w-[1426px] px-9" />

      {/* INTRO */}
      <section className="mx-auto max-w-[1426px] px-9 py-[90px]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,480px),1fr))] items-start gap-16">
          <div>
            <h2 className="mb-9 text-[clamp(32px,3.4vw,52px)] font-normal leading-[1.12] tracking-[.05em]">
              {service.introHeading}
            </h2>
            <PillButton href="/contact" rest="dark" hover="lime">
              Start a project
            </PillButton>
          </div>
          <div className="text-[16.5px] leading-[1.75] text-ink/80">
            <p className="mb-5">{service.introP1}</p>
            <p>{service.introP2}</p>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="mx-auto max-w-[1848px] px-9">
        <div
          className={`rounded-panel px-[6%] py-14 text-white md:py-[90px] ${
            dark ? "bg-ink" : "bg-lilac"
          }`}
        >
          <p
            className={`mb-4 text-[15px] font-bold uppercase tracking-[.1em] ${
              dark ? "text-lime" : "text-white"
            }`}
          >
            What&rsquo;s included
          </p>
          <h2 className="mb-14 text-[clamp(32px,3.6vw,54px)] font-normal leading-[1.1]">
            {service.deliverablesHeading}
          </h2>
          <div
            className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-5"
            data-stagger
          >
            {service.deliverables.map(({ name, desc }, i) => (
              <div
                key={name}
                className={`rounded-frame px-[30px] py-8 text-ink transition-transform duration-250 hover:-translate-y-1 ${
                  dark ? "bg-white" : "bg-white/92"
                }`}
              >
                <span
                  className={`text-base font-semibold ${dark ? "text-lilac" : "text-lime"}`}
                >
                  {String(i + 1).padStart(2, "0")}.
                </span>
                <h3 className="mt-3.5 mb-2.5 text-[21px] font-semibold tracking-[-.3px]">
                  {name}
                </h3>
                <p className="text-[15px] leading-[1.6] text-ink/70">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE STRIP */}
      <section className="mx-auto max-w-[1426px] px-9 py-[100px]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,480px),1fr))] items-center gap-16">
          <div>
            <p className="mb-3.5 text-[15px] font-bold uppercase tracking-[.1em] text-lilac">
              {service.stripEyebrow}
            </p>
            <h2 className="mb-[22px] text-[clamp(30px,3vw,46px)] font-normal leading-[1.15]">
              {service.stripHeading}
            </h2>
            <p className="text-[16.5px] leading-[1.75] text-ink/80">{service.stripBody}</p>
          </div>
          <div className="flex flex-wrap content-center gap-3.5">
            {service.chips.map((chip) => (
              <span
                key={chip}
                className="whitespace-nowrap rounded-full border-[1.5px] border-ink px-[30px] py-3.5 text-[clamp(16px,1.5vw,21px)] font-medium transition-colors duration-250 hover:border-lime hover:bg-lime"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <section className="mx-auto max-w-[1426px] px-9 pb-[100px]">
        <Divider className="mb-[70px]" />
        <div
          className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-12 text-center"
          data-stagger
        >
          {service.stats.map(({ value, label }) => (
            <div key={label}>
              <div className="text-[clamp(56px,6vw,92px)] font-bold leading-none text-lilac">
                <CountUp value={value} />
              </div>
              <div className="mt-3 text-base font-semibold">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPLORE MORE SERVICES */}
      <section className="mx-auto max-w-[1848px] px-9">
        <div className="rounded-panel bg-ink px-[8%] py-14 text-white md:py-[90px]">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <h2 className="text-[clamp(32px,3.6vw,54px)] font-normal leading-[1.05]">
              Explore more services<span className="text-lime">.</span>
            </h2>
            <PillButton href="/contact" rest="lime" hover="dark">
              Book a consultation
            </PillButton>
          </div>
          <div className="flex flex-wrap gap-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/services/${o.slug}`}
                className="rounded-full border-[1.5px] border-white/35 px-[26px] py-3 text-[15.5px] font-medium text-white transition-colors duration-250 hover:border-lime hover:bg-lime hover:text-ink"
              >
                {o.eyebrow} ↗
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
