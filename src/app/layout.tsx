import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Nav from "@/components/Nav";
import PageTransition from "@/components/PageTransition";
import Preloader from "@/components/Preloader";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
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
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="font-sans antialiased">
        <Preloader />
        <PageTransition />
        <Nav />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
