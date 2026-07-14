import ScrollReveal from "@/components/ScrollReveal";

/** Remounts on every route change, replaying the page-enter animation and
    re-arming the scroll reveals for the new page's sections. */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="animate-page-in motion-reduce:animate-none">
      <ScrollReveal />
      {children}
    </div>
  );
}
