import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Carousel from "@/components/Carousel";
import CountUp from "@/components/CountUp";
import Divider from "@/components/Divider";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PillButton from "@/components/PillButton";
import PlaceholderImage from "@/components/PlaceholderImage";
import SectionEyebrow from "@/components/SectionEyebrow";
import Wordmark from "@/components/Wordmark";
import PrinciplesScroller from "@/features/about/PrinciplesScroller";
import { tagline } from "@/data/site";
import {
  aboutOverview,
  aboutStats,
  team,
  teamPanel,
  whoWeAreCards,
} from "@/data/team";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "Meet EWO Solutions — a boutique digital agency in Cape Town working with high-value clients locally and globally since 2019. Our story, principles and team.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title={
          <>
            About
            <br />
            <Wordmark />
          </>
        }
        tagline={tagline.strong}
        taglineRest={tagline.rest}
        kicker={tagline.since}
      />
      <Divider color="lime" endDot={false} className="mx-auto max-w-[1426px] px-9" />

      <section className="mx-auto max-w-[1426px] px-9 py-[100px]">
        <h2 className="mb-12 max-w-[760px] text-[clamp(36px,4vw,60px)] font-normal leading-[1.15] tracking-[.05em]">
          {aboutOverview.heading}
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,480px),1fr))] items-start gap-16">
          <p className="text-[16.5px] leading-[1.75] text-ink/80">{aboutOverview.col1}</p>
          <div>
            <p className="mb-9 text-[16.5px] leading-[1.75] text-ink/80">
              {aboutOverview.col2}
            </p>
            <PillButton href="/services" rest="dark" hover="lime">
              Our services
            </PillButton>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1426px] px-9 pt-5 pb-[100px]">
        <SectionEyebrow>
          Get to know us <span className="text-lime">→︎</span>
        </SectionEyebrow>
        <Carousel autoMs={5000} ariaLabel="About EWO" itemClassName="w-[85%] sm:w-[480px]">
          {whoWeAreCards.map(({ heading, body }) => (
            <div key={heading} className="flex h-full flex-col rounded-card bg-lilac/15 p-8 md:p-10">
              <h3 className="mb-4 text-[clamp(26px,2.6vw,38px)] font-normal leading-[1.15]">
                {heading}
              </h3>
              <p className="text-base leading-[1.75] text-ink/80">{body}</p>
            </div>
          ))}
        </Carousel>
      </section>

      <section className="mx-auto max-w-[1426px] px-9 pb-[110px]">
        <Divider className="mb-[90px]" />
        <div
          className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-12 text-center"
          data-stagger
        >
          {aboutStats.map(({ value, label }) => (
            <div key={label}>
              <div className="text-[clamp(70px,7vw,110px)] font-bold leading-none text-lilac">
                <CountUp value={value} />
              </div>
              <div className="mt-3 text-base font-semibold">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <PrinciplesScroller />

      <section className="mx-auto max-w-[1848px] px-9">
        <div className="rounded-panel bg-ink px-[8%] py-[100px] text-white">
          <SectionEyebrow color="green">{teamPanel.eyebrow}</SectionEyebrow>
          <h2 className="mb-6 text-[clamp(36px,4vw,60px)] font-normal leading-[1.1]">
            {teamPanel.heading}
          </h2>
          <div className="mb-16 grid grid-cols-[repeat(auto-fit,minmax(min(100%,480px),1fr))] gap-16">
            <p className="text-[15.5px] leading-[1.7] text-white/70">{teamPanel.col1}</p>
            <p className="text-[15.5px] leading-[1.7] text-white/70">{teamPanel.col2}</p>
          </div>
          <div
            className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-6"
            data-stagger
          >
            {team.map(({ name, role, photo }) => (
              <div
                key={name}
                className="relative aspect-[1/1.05] overflow-hidden rounded-frame bg-ink-secondary"
              >
                {photo ? (
                  <Image
                    src={`/images/team/${photo}`}
                    alt={name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                ) : (
                  <PlaceholderImage label={name} className="absolute inset-0" />
                )}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-b from-transparent to-ink/90 px-6 pt-[60px] pb-5">
                  <strong className="flex items-center gap-2.5 text-lg">
                    <span className="size-2 rounded-full bg-lime" />
                    {name}
                  </strong>
                  <span className="mt-1 ml-[18px] block text-[13px] text-white/70">
                    {role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
