import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Divider from "@/components/Divider";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PillButton from "@/components/PillButton";
import Wordmark from "@/components/Wordmark";
import WorkFilter from "@/features/work/WorkFilter";

export const metadata: Metadata = pageMetadata({
  title: "Work",
  description:
    "See EWO Solutions' work — case studies across platform builds, e-commerce, campaigns and lead generation for brands in South Africa and beyond.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <main>
      <PageHero
        title={
          <>
            <Wordmark />
            <br />
            work
          </>
        }
        tagline="Real results, real stories"
        taglineRest="— see how we've transformed brands just like yours"
        kicker="Case studies"
      />
      <Divider className="mx-auto max-w-[1426px] px-9" />

      <WorkFilter />

      <section className="mx-auto max-w-[1848px] px-9">
        <div className="rounded-panel bg-ink px-[8%] py-[100px] text-center text-white">
          <h2 className="mb-9 text-[clamp(38px,4.5vw,68px)] font-normal leading-[1.05]">
            Your brand could be next<span className="text-lime">.</span>
          </h2>
          <PillButton href="/contact" rest="lime" hover="dark" size="lg">
            Start a project
          </PillButton>
        </div>
      </section>

      <Footer />
    </main>
  );
}
