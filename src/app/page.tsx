import Image from "next/image";
import Link from "next/link";
import Carousel from "@/components/Carousel";
import CountUp from "@/components/CountUp";
import Divider from "@/components/Divider";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import Newsletter from "@/components/Newsletter";
import PillButton from "@/components/PillButton";
import RotatingTextBadge from "@/components/RotatingTextBadge";
import SectionEyebrow from "@/components/SectionEyebrow";
import HeroWord from "@/features/home/HeroWord";
import ProcessStepper from "@/features/home/ProcessStepper";
import {
  caseStudiesPanel,
  philosophy,
  reviews,
  stats,
  whatWeDo,
} from "@/data/home";
import { serviceDetails } from "@/data/serviceDetails";
import { tagline } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "EWO Solutions — Digital Marketing Agency in Cape Town",
  description:
    "EWO Solutions turns vision into reality — a digital marketing agency in Somerset West, Cape Town delivering web development, PPC, social media, content and design that grow your brand online.",
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <header className="mx-auto flex max-w-[1426px] flex-wrap items-start justify-between gap-10 px-9 pt-[100px] pb-[90px]">
        <h1 className="text-[clamp(80px,11vw,190px)] font-light leading-[1.02] tracking-[-2px]">
          We are
          <br />
          <HeroWord />
        </h1>
        <div className="max-w-[400px] pt-6 text-right">
          <p className="text-[clamp(20px,1.8vw,28px)] leading-[1.25] tracking-[.05em]">
            <strong className="text-lilac">{tagline.strong}</strong>
            <br />
            {tagline.rest}
          </p>
          <p className="mt-[18px] text-sm font-semibold text-lilac">
            <span className="mr-3 inline-block h-px w-[120px] bg-lilac align-middle" />
            {tagline.since}
          </p>
        </div>
      </header>

      <Marquee
        items={[
          "strategy",
          "design",
          "development",
          "content",
          "advertising",
          "social media",
        ]}
      />

      {/* PHILOSOPHY PANEL */}
      <section className="mx-auto max-w-[1848px] px-9">
        <div className="relative grid grid-cols-[repeat(auto-fit,minmax(min(100%,480px),1fr))] items-center gap-10 overflow-hidden rounded-panel bg-lilac px-[8%] py-14 md:gap-16 md:py-[120px]">
          <RotatingTextBadge
            text="ABOUT US · ABOUT US · ABOUT US · ABOUT US ·"
            className="absolute left-[6%] top-1/2 -mt-[210px] size-[420px] opacity-[.22]"
          />
          <div className="relative">
            <p className="mb-[18px] text-base font-bold uppercase tracking-[.1em] text-white">
              {philosophy.eyebrow}
            </p>
            <h2 className="text-[clamp(40px,4.5vw,70px)] font-normal leading-none tracking-[.05em] text-ink">
              {philosophy.heading}
            </h2>
          </div>
          <div className="relative">
            <p className="mb-9 text-[17px] leading-[1.65] text-ink/85">
              {philosophy.body}
            </p>
            <div className="flex flex-wrap gap-4">
              <PillButton href="/about" rest="white" hover="lime">
                More about us
              </PillButton>
              <Link
                href="/services"
                className="inline-flex items-center gap-2.5 border-b-[1.5px] border-ink pb-0.5 text-base font-medium text-ink transition-colors hover:border-white hover:text-white"
              >
                Our services ↗
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO + STATS */}
      <section className="mx-auto max-w-[1426px] px-9 pt-[130px] pb-[110px]">
        <p className="mb-5 text-[15px] font-bold uppercase tracking-[.1em] text-lilac">
          {whatWeDo.eyebrow}
        </p>
        <h2 className="mb-[26px] max-w-[900px] text-balance text-[clamp(38px,4.5vw,68px)] font-normal leading-[1.08] tracking-[.05em]">
          {whatWeDo.heading}
        </h2>
        <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(min(100%,480px),1fr))] items-start gap-[72px]">
          <div>
            <p className="mb-14 max-w-[420px] text-[16.5px] leading-[1.65] text-ink/75">
              {whatWeDo.body}
            </p>
            <div className="flex flex-col gap-11" data-stagger>
              {stats.map(({ value, label }) => (
                <div key={label} className="flex items-baseline gap-4 md:gap-7">
                  <span className="min-w-0 text-[clamp(60px,6vw,96px)] font-bold leading-none text-lilac md:min-w-[220px]">
                    <CountUp value={value} />
                  </span>
                  <span className="border-b-2 border-lime pb-1.5 text-base font-medium">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-[9/10] w-full overflow-hidden rounded-mask">
            <Image
              src="/images/brand-photo.jpg"
              alt="EWO team at work"
              width={2400}
              height={1600}
              quality={90}
              className="parallax-img size-full object-cover"
              sizes="(max-width: 1024px) 100vw, 800px"
            />
          </div>
        </div>
      </section>

      <Divider className="mx-auto max-w-[1426px] px-9" />

      {/* SERVICES CAROUSEL */}
      <section className="mx-auto max-w-[1426px] px-9 py-[110px]">
        <Carousel autoMs={4500} ariaLabel="Our services" itemClassName="w-[85%] sm:w-[420px]">
          {serviceDetails.map(({ name, desc, slug }) => (
            <div key={slug} className="flex h-full flex-col">
              <SectionEyebrow color="lime">Services</SectionEyebrow>
              <h3 className="mb-[18px] text-[clamp(30px,3vw,44px)] font-medium tracking-[-.5px]">
                {name}
              </h3>
              <p className="mb-[30px] flex-1 text-base leading-[1.65] text-ink/75">{desc}</p>
              <div>
                <PillButton href={`/services/${slug}`} rest="dark" hover="lime">
                  Learn more
                </PillButton>
              </div>
            </div>
          ))}
        </Carousel>
      </section>

      {/* CASE STUDIES */}
      <section className="mx-auto max-w-[1848px] px-9">
        <div className="rounded-panel bg-ink px-[8%] py-14 text-white md:py-[100px]">
          <div className="mb-10 grid grid-cols-[repeat(auto-fit,minmax(min(100%,480px),1fr))] items-end gap-6 md:mb-16 md:gap-16">
            <div>
              <SectionEyebrow color="lime">{caseStudiesPanel.eyebrow}</SectionEyebrow>
              <h2 className="text-[clamp(40px,4.5vw,70px)] font-normal leading-none tracking-[.05em]">
                {caseStudiesPanel.heading}
              </h2>
            </div>
            <div>
              <p className="mb-[30px] text-[clamp(18px,1.6vw,24px)] leading-[1.5] tracking-[.05em]">
                {caseStudiesPanel.body}
              </p>
              <PillButton href="/work" rest="outline-lime" hover="lime">
                Our work
              </PillButton>
            </div>
          </div>
          <div
            className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-6"
            data-stagger
          >
            {caseStudiesPanel.tiles.map((tile) => (
              <Link
                key={tile.name}
                href="/work"
                aria-label={tile.name}
                className="group flex aspect-[1.23/1] items-center justify-center rounded-card border-2 border-transparent bg-ink-secondary px-[14%] transition-all duration-300 hover:-translate-y-1 hover:border-lime"
              >
                <Image
                  src={`/images/clients/${tile.logo}`}
                  alt={tile.name}
                  width={440}
                  height={110}
                  className="max-h-[52px] w-full object-contain opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ProcessStepper />

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-[1426px] px-9 pb-[130px]">
        <Divider className="mb-[72px]" />
        <Carousel autoMs={5000} ariaLabel="Client testimonials" itemClassName="w-[88%] sm:w-[560px]">
          {reviews.map(({ quote, name, role }) => (
            <figure key={name} className="m-0 rounded-card bg-lilac/15 p-8 md:p-10">
              <blockquote className="mb-7 text-[17px] leading-[1.7] text-ink/85">
                {quote}
              </blockquote>
              <figcaption>
                <strong className="block text-[17px]">{name}</strong>
                <span className="text-[13.5px] font-bold uppercase tracking-[.1em] text-lime">
                  {role}
                </span>
              </figcaption>
            </figure>
          ))}
        </Carousel>
      </section>

      <Newsletter />

      <Footer />
    </main>
  );
}
