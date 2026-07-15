import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Divider from "@/components/Divider";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import PageHero from "@/components/PageHero";
import PillButton from "@/components/PillButton";
import SectionEyebrow from "@/components/SectionEyebrow";
import Wordmark from "@/components/Wordmark";
import ServiceAccordion from "@/features/services/ServiceAccordion";
import { servicesIntro } from "@/data/services";
import { tagline } from "@/data/site";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description:
    "Full-scale digital marketing services from EWO Solutions: website development, pay-per-click advertising, social media, content creation, graphic design, email marketing and more.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        title={
          <>
            <Wordmark />
            <br />
            services
          </>
        }
        tagline={tagline.strong}
        taglineRest={tagline.rest}
        kicker={tagline.since}
      />
      <Divider className="mx-auto max-w-[1426px] px-9" />

      <section className="mx-auto max-w-[1426px] px-9 pt-[100px] pb-[120px]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,480px),1fr))] items-start gap-[72px]">
          <div>
            <SectionEyebrow>{servicesIntro.eyebrow}</SectionEyebrow>
            <h2 className="mb-10 text-[clamp(34px,3.6vw,54px)] font-normal leading-[1.12]">
              {servicesIntro.heading}
            </h2>
            <PillButton href="/contact" rest="dark" hover="lime">
              Contact us
            </PillButton>
          </div>
          <div className="text-[16.5px] leading-[1.75] text-ink/80">
            {servicesIntro.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="mb-5 last:mb-0">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <ServiceAccordion />

      <div className="mt-20">
        <Newsletter eyebrowColor="green" />
      </div>

      <Footer />
    </main>
  );
}
