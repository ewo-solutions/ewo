export const workFilters = [
  "All",
  "Platform",
  "E-commerce",
  "Campaign",
  "Lead gen",
] as const;

export type WorkFilterLabel = (typeof workFilters)[number];

export interface CaseStudy {
  client: string;
  category: Exclude<WorkFilterLabel, "All">;
  summary: string;
  stat1: string;
  stat1label: string;
  stat2: string;
  stat2label: string;
}

// Placeholder copy/stats from the design handoff — replace with real
// case-study content from the client.
export const caseStudies: CaseStudy[] = [
  {
    client: "VetsBrands",
    category: "Platform",
    summary:
      "Custom web platform and brand refresh for a national veterinary distributor.",
    stat1: "2.5×",
    stat1label: "Lead volume",
    stat2: "6wk",
    stat2label: "To launch",
  },
  {
    client: "beautific",
    category: "E-commerce",
    summary:
      "E-commerce build plus always-on social and PPC for a growing beauty brand.",
    stat1: "3.2×",
    stat1label: "Online revenue",
    stat2: "18mo",
    stat2label: "Partnership",
  },
  {
    client: "Focal Shipping",
    category: "Lead gen",
    summary:
      "SEO and PPC engine driving qualified logistics enquiries month after month.",
    stat1: "-35%",
    stat1label: "Cost per lead",
    stat2: "12mo",
    stat2label: "Retained",
  },
  {
    client: "blueprint society.",
    category: "Campaign",
    summary:
      "Brand and content campaign building an engaged community from scratch.",
    stat1: "+120%",
    stat1label: "Audience growth",
    stat2: "3",
    stat2label: "Channels",
  },
  {
    client: "Rooibos Limited",
    category: "Campaign",
    summary:
      "Global content campaign growing market share for South Africa’s iconic tea export.",
    stat1: "+40%",
    stat1label: "Global reach",
    stat2: "12",
    stat2label: "Markets",
  },
  {
    client: "CUDU Active Gear",
    category: "E-commerce",
    summary:
      "Full e-commerce build plus always-on social for an active-gear brand.",
    stat1: "2.8×",
    stat1label: "Conversion rate",
    stat2: "40+",
    stat2label: "Campaigns",
  },
];
