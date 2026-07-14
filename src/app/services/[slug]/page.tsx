import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Divider from "@/components/Divider";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import PillButton from "@/components/PillButton";
import SectionEyebrow from "@/components/SectionEyebrow";
import { serviceDetails } from "@/data/serviceDetails";

export function generateStaticParams() {
  return serviceDetails.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceDetails.find((s) => s.slug === slug);
  return { title: service?.name ?? "Services" };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = serviceDetails.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <main>
      <header className="mx-auto max-w-[1426px] px-9 pt-[100px] pb-[70px]">
        <SectionEyebrow>Services</SectionEyebrow>
        <h1 className="max-w-[1000px] text-[clamp(44px,6.5vw,110px)] font-light leading-[1.05] tracking-[-2px]">
          {service.name}
          <span className="font-bold text-lime">.</span>
        </h1>
      </header>
      <Divider className="mx-auto max-w-[1426px] px-9" />

      <section className="mx-auto max-w-[1426px] px-9 py-[90px]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,480px),1fr))] items-start gap-[72px]">
          <div>
            <p className="mb-10 text-[clamp(18px,1.5vw,22px)] leading-[1.65] text-ink/85">
              {service.intro}
            </p>
            <div className="flex flex-wrap gap-4">
              <PillButton href="/contact" rest="dark" hover="lime">
                Start a project
              </PillButton>
              <PillButton href="/work" rest="lime" hover="dark">
                View our work
              </PillButton>
            </div>
          </div>
          <ul className="flex flex-col">
            {service.points.map((point) => (
              <li
                key={point}
                className="flex items-center gap-4 border-t border-lilac/50 py-5 text-[17px] first:border-t-0"
              >
                <span className="size-2.5 shrink-0 rounded-full bg-lime" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Newsletter eyebrowColor="green" />

      <Footer />
    </main>
  );
}
