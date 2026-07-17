import type { Metadata } from "next";
import localFont from "next/font/local";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import Nav from "@/components/Nav";
import PageTransition from "@/components/PageTransition";
import Preloader from "@/components/Preloader";
import { ogImage, siteConfig, siteUrl } from "@/lib/seo";
import "./globals.css";

// Blauer Nue — the licensed brand typeface (replaces the Space Grotesk stand-in).
const blauerNue = localFont({
  variable: "--font-blauer-nue",
  display: "swap",
  src: [
    { path: "./fonts/BlauerNue-Light.woff2", weight: "300", style: "normal" },
    { path: "./fonts/BlauerNue-LightItalic.woff2", weight: "300", style: "italic" },
    { path: "./fonts/BlauerNue-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/BlauerNue-RegularItalic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/BlauerNue-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/BlauerNue-MediumItalic.woff2", weight: "500", style: "italic" },
    { path: "./fonts/BlauerNue-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/BlauerNue-SemiBoldItalic.woff2", weight: "600", style: "italic" },
    { path: "./fonts/BlauerNue-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/BlauerNue-BoldItalic.woff2", weight: "700", style: "italic" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "EWO Solutions — Digital Marketing Agency in Cape Town",
    template: "%s — EWO Solutions",
  },
  description: siteConfig.shortDescription,
  applicationName: siteConfig.name,
  keywords: [
    "digital marketing agency",
    "Cape Town",
    "Somerset West",
    "web development",
    "PPC advertising",
    "social media marketing",
    "content creation",
    "graphic design",
    "SEO",
    "EWO Solutions",
  ],
  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.legalName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: siteUrl,
    siteName: siteConfig.name,
    title: "EWO Solutions — Digital Marketing Agency in Cape Town",
    description: siteConfig.shortDescription,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "EWO Solutions — Digital Marketing Agency in Cape Town",
    description: siteConfig.shortDescription,
    images: [ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  // Google Search Console ownership verification. Set the token from GSC's
  // "HTML tag" method in NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION (Vercel env var);
  // when unset the meta tag is simply omitted.
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
  category: "Marketing",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteUrl,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    foundingDate: siteConfig.founded,
    description: siteConfig.shortDescription,
    image: `${siteUrl}/opengraph-image.png`,
    logo: `${siteUrl}/ewo-logo.svg`,
    priceRange: "$$",
    areaServed: ["ZA", "GB", "US", "EU"],
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.streetAddress,
      addressLocality: siteConfig.locality,
      addressRegion: siteConfig.region,
      postalCode: siteConfig.postalCode,
      addressCountry: siteConfig.country,
    },
    sameAs: [siteConfig.linkedin],
  };

  return (
    <html lang="en-ZA" className={blauerNue.variable}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Preloader />
        <PageTransition />
        <Nav />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
