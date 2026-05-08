import { certifications } from "@/data/portfolio";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { Award } from "lucide-react";

export function Certifications() {
  return (
    <AnimatedSection
      id="certifications"
      className="mx-auto max-w-6xl px-6 py-24 md:py-32"
    >
      <SectionHeading
        label="Credentials"
        title="Certifications"
        subtitle="Professional certifications and completed coursework."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((cert) => (
          <div
            key={cert.title}
            className="group flex flex-col rounded-xl border border-border/50 bg-card/50 p-5 backdrop-blur-sm transition-all hover:border-primary/20 hover:bg-card/80"
          >
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/15">
              <Award className="h-4 w-4 text-primary" />
            </div>
            <h3 className="text-sm font-semibold leading-snug">
              {cert.title}
            </h3>
            <p className="mt-1.5 text-xs text-muted-foreground">
              {cert.provider}
            </p>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
