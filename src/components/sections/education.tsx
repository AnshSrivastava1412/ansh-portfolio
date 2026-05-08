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

      <div className="flex justify-center">
        {education.map((edu, i) => (
          <div
            key={i}
            className="group w-full max-w-md rounded-2xl border border-border/50 bg-card/40 p-8 backdrop-blur-md transition-all hover:border-primary/20 hover:bg-card/60"
          >
            <div className="flex flex-col items-center text-center gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
                <GraduationCap className="h-7 w-7 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="font-heading text-xl font-bold tracking-tight text-foreground">
                  {edu.degree}
                </h3>
                {edu.institution && (
                  <p className="text-sm font-medium tracking-widest text-primary uppercase">
                    {edu.institution}
                  </p>
                )}
                <div className="mt-4 flex items-center justify-center gap-3 text-sm text-muted-foreground/80">
                  <span>{edu.period}</span>
                  {edu.location && (
                    <>
                      <span className="h-1 w-1 rounded-full bg-border" />
                      <span>{edu.location}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
