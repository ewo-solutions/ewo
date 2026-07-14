export const aboutOverview = {
  heading: "A brief overview of our company",
  col1: "Having started as a sideline hustle, EWO Solutions has grown into a proper, full-scale agency with a staff complement above 8 team members. The company was started by Emile Opperman, who mainly worked as a freelancer and consultant after university. Soon, however, he realised the potential of the business he had been building and started to expand. The business was then registered and more team members were hired to deliver incredible results for clients locally and internationally.",
  col2: "Fast-forward to today: EWO Solutions keeps seeing year-on-year growth. Lourens Vorster joined EWO Solutions as a director, further fueling the talent and capabilities of the team.",
};

export const whoWeAreCards = [
  {
    heading: "Where we are",
    body: "Based in Cape Town, working globally. Thanks to the nature of our services, we can work with clients no matter where they are located in the world. EWO Solutions boasts an impressive list of clients locally, and a growing client base in other parts of the world — the United States, the United Kingdom and the European Union.",
  },
  {
    heading: "Who we are",
    body: "EWO is a boutique digital agency built for brands that demand more than the ordinary. We're a team of strategists, creatives, and technologists who believe in precision, performance, and partnership. We work with high-value clients who want their digital presence to reflect their ambition.",
  },
  {
    heading: "What we do",
    body: "We craft data-driven digital marketing strategies, build high-performing websites, and manage compelling social media campaigns — all tailored to the unique needs of each client. From strategy to execution, we don't just follow best practices — we create them.",
  },
  {
    heading: "Why we do it",
    body: "Because we believe great businesses deserve great digital experiences. We exist to help our clients lead in their industries by creating work that drives results, inspires trust, and sets new standards. When our clients win, so do we.",
  },
] as const;

export const aboutStats = [
  { value: "35+", label: "Combined years of experience." },
  { value: "12+", label: "Service offered." },
  { value: "9+", label: "Digital artisans." },
] as const;

export const principles = [
  {
    label: "Principle One",
    name: "Client-Centricity",
    desc: "We succeed when our clients succeed. Our approach is rooted in understanding your unique goals, challenges, and aspirations. Every strategy we craft is tailored to achieve measurable impact for you.",
  },
  {
    label: "Principle Two",
    name: "Data-Driven Excellence",
    desc: "We believe in the power of data to unlock potential. By leveraging advanced analytics, insights, and tools, we create strategies grounded in evidence and optimized for performance.",
  },
  {
    label: "Principle Three",
    name: "Creativity Meets Strategy",
    desc: "Creativity is at the heart of what we do, but it’s always aligned with purpose. We combine innovative thinking with strategic execution to craft campaigns that captivate and deliver results.",
  },
  {
    label: "Principle Four",
    name: "Transparency and Trust",
    desc: "Strong relationships are built on trust, and trust is built on transparency. We provide clear communication, honest feedback, and actionable insights at every stage of our partnership.",
  },
  {
    label: "Principle Five",
    name: "Agility and Adaptability",
    desc: "The digital landscape evolves rapidly, and so do we. Our team thrives on staying ahead of trends, adapting strategies in real-time, and embracing change as an opportunity to innovate.",
  },
  {
    label: "Principle Six",
    name: "Commitment to Quality",
    desc: "High-value clients demand high-value solutions. We pride ourselves on meticulous attention to detail and an unwavering commitment to excellence in every project we undertake.",
  },
  {
    label: "Principle Seven",
    name: "Partnership, Not Just Service",
    desc: "We’re not just service providers; we’re partners. We work collaboratively, treating your business goals as our own, ensuring alignment and mutual success.",
  },
] as const;

export const teamPanel = {
  eyebrow: "Our team",
  heading: "Our team is our greatest asset.",
  col1: "We are a collective of passionate professionals, each bringing a unique blend of expertise, creativity, and dedication to the table. Together, we are committed to delivering extraordinary results for our clients.",
  col2: "We typically encourage clients to book a 45-minute consultation with us so that we can determine exactly what the project requirements are. From there, we deliver a bespoke proposal for the client to consider.",
};

// photo: filename under public/images/team/, or null while awaiting the
// real photograph (renders a styled placeholder).
export const team: readonly {
  name: string;
  role: string;
  photo: string | null;
}[] = [
  { name: "Emile Opperman", role: "Founder & Director", photo: null },
  { name: "Lourens Vorster", role: "Director", photo: null },
  { name: "Tarien Kirby", role: "Project Manager", photo: null },
  { name: "Marleine Louw", role: "Graphic Designer", photo: null },
  { name: "Sage", role: "Website Developer", photo: null },
];
