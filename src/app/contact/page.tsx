import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Footer from "@/components/Footer";
import ContactForm from "@/features/contact/ContactForm";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Start a project with EWO Solutions. Tell us about your brand and book a free 45-minute consultation with our Cape Town digital marketing team.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <ContactForm />
      <Footer variant="slim" />
    </div>
  );
}
