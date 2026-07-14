import type { Metadata } from "next";
import Footer from "@/components/Footer";
import ContactWizard from "@/features/contact/ContactWizard";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <ContactWizard />
      <Footer variant="slim" />
    </div>
  );
}
