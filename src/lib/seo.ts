import type { Metadata } from "next";

/** Production origin. Override with NEXT_PUBLIC_SITE_URL in the environment
    if the canonical domain changes. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ewosolutions.com"
).replace(/\/$/, "");

/** Branded 1200×630 social share card (public/og.png). */
export const ogImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "EWO Solutions — Digital Marketing Agency in Cape Town",
};

export const siteConfig = {
  name: "EWO Solutions",
  legalName: "EWO Solutions (PTY) Ltd",
  shortDescription:
    "Digital marketing agency in Somerset West, Cape Town — websites, PPC, social media, content and design that grow your brand online.",
  locality: "Somerset West",
  region: "Western Cape",
  country: "ZA",
  postalCode: "7130",
  streetAddress: "Paardevlei, 11 Gardner Williams Ave",
  phone: "+27 98 746 2236",
  email: "info@ewosolutions.com",
  founded: "2019",
  linkedin: "https://www.linkedin.com/company/101436552/",
};

/** Build a Metadata object for a page: canonical URL + Open Graph/Twitter,
    inheriting the site defaults from the root layout. */
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  /** Skip the "%s — EWO Solutions" template (use for the home page, whose
      title already contains the brand). */
  absoluteTitle?: boolean;
}): Metadata {
  const url = path === "/" ? "/" : path;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website", images: [ogImage] },
    twitter: { card: "summary_large_image", title, description, images: [ogImage.url] },
  };
}
