import { services } from "@/data/services";

export function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** Expanded copy for the individual service pages. Draft copy derived from
    the handoff's service descriptions — review/replace with final client
    copy as it becomes available. */
const detailCopy: Record<string, { intro: string; points: string[] }> = {
  "website-development": {
    intro:
      "From standard corporate websites to involved custom platforms — our developers create it all, engineered to convert and built to scale. Every build starts with your goals: who the site must reach, what it must achieve, and how it will grow with your business.",
    points: [
      "Corporate websites and landing pages",
      "E-commerce stores and custom platforms",
      "Performance, SEO and analytics baked in",
      "Ongoing maintenance and support",
    ],
  },
  "content-creation": {
    intro:
      "From video and podcasts to logo design and more — our team can create all the content you need to thrive. We plan, produce and publish content that sounds like you and works for your audience.",
    points: [
      "Video production and editing",
      "Podcasts and audio content",
      "Copywriting and storytelling",
      "Brand and logo design",
    ],
  },
  "pay-per-click-advertising": {
    intro:
      "Stand out by putting budget where it returns — Google Ads, YouTube Ads, Facebook Ads, TikTok Ads and more. We build, measure and tune campaigns so every rand is accountable.",
    points: [
      "Google, YouTube, Meta and TikTok campaigns",
      "Landing page and conversion optimisation",
      "Transparent reporting on spend and return",
      "Continuous testing and tuning",
    ],
  },
  "graphic-design": {
    intro:
      "Ensure your brand and related assets communicate effectively in the online world with great graphic design. From social templates to full brand identities, we design with purpose and precision.",
    points: [
      "Brand identities and style guides",
      "Social media and campaign graphics",
      "Print and digital collateral",
      "Presentation and pitch design",
    ],
  },
  "social-media-marketing": {
    intro:
      "Stay relevant with organic and paid content marketing strategies, planned and managed end-to-end. We keep your channels active, on-brand and growing.",
    points: [
      "Channel strategy and content calendars",
      "Organic and paid campaign management",
      "Community management and engagement",
      "Monthly performance reporting",
    ],
  },
  "email-marketing": {
    intro:
      "Newsletters and automated journeys that keep your audience engaged and coming back. We design, write and automate email that people actually open.",
    points: [
      "Newsletter design and copywriting",
      "Automated journeys and drip campaigns",
      "List growth and segmentation",
      "Deliverability and performance tracking",
    ],
  },
  "influence-management": {
    intro:
      "Partner with the right voices — influencer strategy, outreach and campaign management. We match your brand with creators whose audiences match your customers.",
    points: [
      "Influencer identification and vetting",
      "Outreach, negotiation and contracting",
      "Campaign briefs and content approval",
      "Results measurement and reporting",
    ],
  },
  "afrinuus-features": {
    intro:
      "Get featured on AfriNUUS — sponsored content that puts your brand in front of an engaged audience. We handle the story, placement and promotion.",
    points: [
      "Sponsored articles and features",
      "Story development and copywriting",
      "Audience-matched placement",
      "Amplification across channels",
    ],
  },
};

export const serviceDetails = services.map((s) => ({
  ...s,
  slug: slugify(s.name),
  ...detailCopy[slugify(s.name)],
}));
