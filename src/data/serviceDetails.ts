import { services } from "@/data/services";
import { servicePages } from "@/data/servicePages";

/** Accordion/home-carousel view of the services: short description from the
    original handoff + the detail-page slug from the service-pages update.
    Order follows the original accordion design. */
export const serviceDetails = services.map((s) => {
  const page = servicePages.find((p) => p.eyebrow === s.name);
  if (!page) throw new Error(`No service page for "${s.name}"`);
  return { ...s, slug: page.slug };
});
