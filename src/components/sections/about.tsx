import { about } from "@/data/portfolio";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <AnimatedSection
      id="about"
      className="mx-auto max-w-6xl px-6 py-24 md:py-32"
    >
      <SectionHeading label={about.label} title={about.title} />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {about.paragraphs.map((p, i) => (
          <div
            key={i}
            className="rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-colors hover:border-primary/20"
          >
            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 font-heading text-sm font-bold text-primary">
              {String(i + 1).padStart(2, "0")}
            </div>
            <p className="text-[15px] leading-relaxed text-muted-foreground">
              {p}
            </p>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
