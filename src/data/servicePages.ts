/** Per-service detail-page content, transcribed verbatim from the
    Service.dc.html design handoff (UPDATE-service-pages.md).
    NOTE: all stats are placeholder claims from the design — the client
    must verify or replace them before launch. */

export interface ServicePage {
  slug: string;
  num: string;
  eyebrow: string;
  titleLight: string;
  titleBold: string;
  tagline: string;
  introHeading: string;
  introP1: string;
  introP2: string;
  deliverablesHeading: string;
  deliverables: { name: string; desc: string }[];
  stripEyebrow: string;
  stripHeading: string;
  stripBody: string;
  chips: string[];
  stats: { value: string; label: string }[];
}

export const servicePages: ServicePage[] = [
  {
    slug: "website-development",
    num: "01",
    eyebrow: "Website Development",
    titleLight: "Websites built to",
    titleBold: "convert",
    tagline: "From sharp corporate sites to fully custom platforms",
    introHeading: "Your website is your hardest-working employee. Make it earn.",
    introP1:
      "From standard corporate websites to involved custom platforms — our developers create it all. Every build starts with your goals and your users, engineered to convert visitors into customers and built to scale as you grow.",
    introP2:
      "We work in WordPress for speed and manageability, or fully custom stacks when your project demands it — e-commerce, booking systems, institutional platforms and more.",
    deliverablesHeading: "Everything a serious web project needs.",
    deliverables: [
      { name: "Discovery & UX", desc: "Sitemaps, wireframes and user flows mapped before a line of code." },
      { name: "Design & build", desc: "Pixel-faithful, responsive builds in WordPress or custom stacks." },
      { name: "E-commerce", desc: "Stores engineered for conversion — catalogue to checkout." },
      { name: "Integrations", desc: "CRM, payments, booking and analytics wired in properly." },
      { name: "SEO foundations", desc: "Technical SEO, speed and accessibility from day one." },
      { name: "Care & hosting", desc: "Maintenance, updates and support after launch." },
    ],
    stripEyebrow: "Our stack",
    stripHeading: "The right tool for the job, not our favourite one.",
    stripBody:
      "We choose the platform to fit the project — a lean WordPress site where it makes sense, custom code where it counts. Either way, it is fast, secure and yours.",
    chips: ["WordPress", "WooCommerce", "Custom builds", "React", "E-commerce", "APIs & integrations"],
    stats: [
      { value: "6wk", label: "Typical time to launch." },
      { value: "99.9%", label: "Uptime across client sites." },
      { value: "100+", label: "Sites shipped." },
    ],
  },
  {
    slug: "social-media-marketing",
    num: "02",
    eyebrow: "Social Media Marketing",
    titleLight: "Social that stays",
    titleBold: "relevant",
    tagline: "Organic and paid strategies that keep your brand impossible to ignore",
    introHeading: "Your customers are scrolling. Meet them there.",
    introP1:
      "Stay relevant with organic and paid content marketing strategies. We plan, produce and manage your channels end-to-end — so your social presence works as hard as you do.",
    introP2:
      "Every calendar is bespoke: built from your audience data, your voice and your goals — never a recycled template.",
    deliverablesHeading: "From strategy to daily execution.",
    deliverables: [
      { name: "Channel strategy", desc: "Platform mix, audience targeting and content pillars." },
      { name: "Content production", desc: "Design, video and copy created by our in-house artisans." },
      { name: "Community management", desc: "Comments, DMs and reviews handled in your voice." },
      { name: "Paid social", desc: "Boosted and full-funnel campaigns with budgets that return." },
      { name: "Influencer tie-ins", desc: "Right voices, briefed and managed for your brand." },
      { name: "Reporting", desc: "Monthly insights your board will actually read." },
    ],
    stripEyebrow: "Platforms",
    stripHeading: "Wherever your audience lives, we speak the language.",
    stripBody:
      "Each platform has its own rhythm. We tailor format, tone and cadence to each — one brand, many dialects.",
    chips: ["Instagram", "Facebook", "LinkedIn", "TikTok", "YouTube", "X"],
    stats: [
      { value: "+120%", label: "Avg. audience growth, year one." },
      { value: "365", label: "Days-a-year presence." },
      { value: "40+", label: "Campaigns delivered." },
    ],
  },
  {
    slug: "ppc-advertising",
    num: "03",
    eyebrow: "Pay-Per-Click Advertising",
    titleLight: "Budgets that",
    titleBold: "return",
    tagline: "Google, YouTube, Meta, TikTok — measured to the cent",
    introHeading: "Every rand deployed where it actually performs.",
    introP1:
      "Stand out by putting budget where it returns. We plan, build and optimise paid campaigns across Google Ads, YouTube, Meta, TikTok and more — with every click tracked and every cost accounted for.",
    introP2:
      "No set-and-forget: campaigns are monitored and tuned continuously, and you see exactly what your spend brings back.",
    deliverablesHeading: "Full-funnel paid media, managed.",
    deliverables: [
      { name: "Strategy & setup", desc: "Account structure, tracking and audience research done right." },
      { name: "Search ads", desc: "Google Ads capturing demand at the moment of intent." },
      { name: "Video & display", desc: "YouTube and display building awareness at scale." },
      { name: "Social ads", desc: "Meta and TikTok campaigns tuned to your audience." },
      { name: "Landing pages", desc: "Pages built to convert the clicks you pay for." },
      { name: "Optimisation", desc: "Continuous A/B testing, bid and budget tuning." },
    ],
    stripEyebrow: "Channels",
    stripHeading: "One budget, deployed across the channels that convert.",
    stripBody:
      "We follow the data, not the hype — shifting spend to whichever channel is returning best this month.",
    chips: ["Google Ads", "YouTube", "Meta", "TikTok", "Display", "Remarketing"],
    stats: [
      { value: "-35%", label: "Avg. cost-per-lead reduction." },
      { value: "24/7", label: "Campaign monitoring." },
      { value: "R1M+", label: "Ad spend managed." },
    ],
  },
  {
    slug: "graphic-design",
    num: "04",
    eyebrow: "Graphic Design",
    titleLight: "Design that",
    titleBold: "communicates",
    tagline: "Brand assets that land at a glance, everywhere they appear",
    introHeading: "Great design isn’t decoration. It’s communication.",
    introP1:
      "Ensure your brand and related assets communicate effectively in the online world. Our designers craft identities and campaign visuals with purpose and precision — design that tells your story in a way that resonates.",
    introP2:
      "From a single campaign visual to a full identity system, everything is built to hold up across print, digital and social.",
    deliverablesHeading: "Identity to execution, crafted in-house.",
    deliverables: [
      { name: "Brand identity", desc: "Logos, palettes and typography systems with guidelines." },
      { name: "Campaign art", desc: "Key visuals and ad creative that stop the scroll." },
      { name: "Social templates", desc: "On-brand systems your team can run with." },
      { name: "Print & packaging", desc: "Brochures, signage and packaging done properly." },
      { name: "Presentation design", desc: "Decks that sell the way you speak." },
      { name: "Illustration & icons", desc: "Custom visual language, not stock clip-art." },
    ],
    stripEyebrow: "Craft",
    stripHeading: "Three designers, one standard: artisan.",
    stripBody:
      "Our lead, senior and junior designers cover the full spectrum — strategy-led identity work through fast-turnaround campaign assets.",
    chips: ["Identity", "Campaigns", "Social", "Print", "Packaging", "Decks"],
    stats: [
      { value: "3", label: "Dedicated designers." },
      { value: "1000+", label: "Assets delivered." },
      { value: "48h", label: "Typical turnaround." },
    ],
  },
  {
    slug: "content-creation",
    num: "05",
    eyebrow: "Content Creation",
    titleLight: "Content that",
    titleBold: "connects",
    tagline: "Video, podcasts, photography and more — produced end-to-end",
    introHeading: "From video and podcasts to logos and more — we create it all.",
    introP1:
      "Our team can create all the content you need to thrive online: video, podcast production, photography, animation and the words to go with them.",
    introP2:
      "Content is planned against your strategy, produced by our artisans, and packaged for every channel it needs to live on.",
    deliverablesHeading: "A production house inside your agency.",
    deliverables: [
      { name: "Video production", desc: "Concept, shoot and edit — social cuts to brand films." },
      { name: "Podcasts", desc: "Recording, editing and distribution, handled." },
      { name: "Photography", desc: "Product, team and lifestyle shoots on-brand." },
      { name: "Animation", desc: "Motion graphics that explain and entertain." },
      { name: "Copywriting", desc: "Web copy, campaigns and scripts with a voice." },
      { name: "Repurposing", desc: "One shoot, a month of content across channels." },
    ],
    stripEyebrow: "Formats",
    stripHeading: "Made once, working everywhere.",
    stripBody:
      "Every piece is cut, cropped and captioned for each platform it lands on — no orphaned content.",
    chips: ["Video", "Podcast", "Photo", "Animation", "Copy", "Reels"],
    stats: [
      { value: "4K", label: "Production standard." },
      { value: "30+", label: "Assets per shoot, typical." },
      { value: "7", label: "Formats per campaign." },
    ],
  },
  {
    slug: "email-marketing",
    num: "06",
    eyebrow: "Email Marketing",
    titleLight: "Inboxes,",
    titleBold: "earned",
    tagline: "Newsletters and journeys that keep your audience coming back",
    introHeading: "The channel you own beats the channels you rent.",
    introP1:
      "Email is still the highest-ROI channel in digital — when it’s done with respect for the reader. We build newsletters and automated journeys that people actually open.",
    introP2:
      "Strategy, design, copy and automation are handled end-to-end, with deliverability and list health monitored throughout.",
    deliverablesHeading: "From welcome flow to win-back.",
    deliverables: [
      { name: "Strategy & calendar", desc: "Send cadence and segmentation built on your data." },
      { name: "Design & copy", desc: "On-brand templates and words that get opened." },
      { name: "Automation", desc: "Welcome, nurture, cart and win-back journeys." },
      { name: "List health", desc: "Growth, hygiene and deliverability managed." },
      { name: "A/B testing", desc: "Subject lines and content tested, not guessed." },
      { name: "Reporting", desc: "Opens to revenue, attributed clearly." },
    ],
    stripEyebrow: "Journeys",
    stripHeading: "Automated, but never robotic.",
    stripBody:
      "Every automated journey is written like a conversation — triggered by behaviour, tuned by results.",
    chips: ["Newsletters", "Welcome flows", "Nurture", "Cart recovery", "Win-back", "Promos"],
    stats: [
      { value: "42×", label: "Avg. ROI of email marketing." },
      { value: "+30%", label: "Open-rate lift, typical." },
      { value: "0", label: "Spam-folder strategies." },
    ],
  },
  {
    slug: "influence-management",
    num: "07",
    eyebrow: "Influence Management",
    titleLight: "The right voices,",
    titleBold: "on brand",
    tagline: "Influencer strategy, outreach and campaign management",
    introHeading: "Borrowed trust, managed properly.",
    introP1:
      "The right creator can put your brand in front of an audience that already trusts them. We find those voices, negotiate the partnerships and manage the campaigns.",
    introP2:
      "Every collaboration is briefed against your brand guidelines and measured against agreed outcomes — reach, engagement or conversions.",
    deliverablesHeading: "End-to-end creator partnerships.",
    deliverables: [
      { name: "Creator sourcing", desc: "Vetted voices whose audience matches yours." },
      { name: "Outreach & deals", desc: "Negotiation, contracts and usage rights handled." },
      { name: "Campaign briefs", desc: "Clear creative direction that keeps it on-brand." },
      { name: "Content approvals", desc: "Review workflow before anything goes live." },
      { name: "Amplification", desc: "Paid boost behind the best-performing content." },
      { name: "Measurement", desc: "Reach, engagement and conversion reporting." },
    ],
    stripEyebrow: "Partnerships",
    stripHeading: "Micro to macro — matched to your market.",
    stripBody:
      "Follower counts matter less than fit. We match creators to your niche, your tone and your budget.",
    chips: ["Micro-influencers", "Creators", "Ambassadors", "UGC", "Takeovers", "Reviews"],
    stats: [
      { value: "92%", label: "Of consumers trust peer recommendations." },
      { value: "50+", label: "Creator relationships." },
      { value: "3×", label: "Avg. engagement vs. brand posts." },
    ],
  },
  {
    slug: "afrinuus-features",
    num: "08",
    eyebrow: "AfriNUUS Features",
    titleLight: "Get featured on",
    titleBold: "AfriNUUS",
    tagline: "Sponsored content in front of an engaged Afrikaans audience",
    introHeading: "Your story, told to an audience that’s already listening.",
    introP1:
      "AfriNUUS puts your brand in front of an engaged, loyal Afrikaans-speaking audience through sponsored features and native content.",
    introP2:
      "We handle the writing, placement and promotion — content that reads like editorial, not like an ad.",
    deliverablesHeading: "Native features, done for you.",
    deliverables: [
      { name: "Sponsored articles", desc: "Editorial-style features written by our team." },
      { name: "Brand placements", desc: "Your brand woven into relevant content." },
      { name: "Social amplification", desc: "Features pushed across AfriNUUS channels." },
      { name: "Campaign bundles", desc: "Series packages for sustained visibility." },
      { name: "Translation & tone", desc: "Afrikaans copy that sounds native, not translated." },
      { name: "Performance report", desc: "Reads, engagement and referral traffic." },
    ],
    stripEyebrow: "Audience",
    stripHeading: "A loyal readership, not rented reach.",
    stripBody:
      "AfriNUUS readers return daily. Featured brands become familiar names, not passing impressions.",
    chips: ["Features", "Advertorials", "Series", "Social pushes", "Afrikaans-first"],
    stats: [
      { value: "Daily", label: "Engaged readership." },
      { value: "Native", label: "Editorial-style content." },
      { value: "1st", label: "Afrikaans digital audience." },
    ],
  },
];

/** Deliverables panel is lilac by default; dark for these two services
    (intentional variation from the design). */
export const darkPanelSlugs = ["ppc-advertising", "email-marketing"];
