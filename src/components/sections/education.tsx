import { education } from "@/data/portfolio";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <AnimatedSection
      id="education"
      className="mx-auto max-w-6xl px-6 py-24 md:py-32"
    >
      <SectionHeading label="Background" title="Education" />

      <div className="grid gap-4 sm:grid-cols-2">
        {education.map((edu) => (
          <div
            key={edu.institution}
            className="group rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/20 hover:bg-card/80"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/15">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-base font-semibold">
                  {edu.degree}
                </h3>
                <p className="mt-1 text-sm text-primary">{edu.institution}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {edu.location}
                </p>
                <div className="mt-3 flex items-center justify-between text-sm text-muted-foreground">
                  <span>{edu.period}</span>
                  <span className="font-medium text-foreground/80">
                    {edu.details}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
