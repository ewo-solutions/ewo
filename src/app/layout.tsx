import type { Metadata } from "next";
import localFont from "next/font/local";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import Nav from "@/components/Nav";
import PageTransition from "@/components/PageTransition";
import Preloader from "@/components/Preloader";
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
  title: {
    default: "EWO Solutions — Digital Marketing Agency",
    template: "%s — EWO Solutions",
  },
  description:
    "Turning vision into reality — our digital artisans fuel your brand's growth online. Digital marketing agency in Somerset West, Cape Town.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={blauerNue.variable}>
      <body className="font-sans antialiased">
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
