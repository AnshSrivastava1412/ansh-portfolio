import { experience } from "@/data/portfolio";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <AnimatedSection
      id="experience"
      className="mx-auto max-w-6xl px-6 py-24 md:py-32"
    >
      <SectionHeading
        label="Career"
        title="Experience"
        subtitle="A timeline of roles that shaped my engineering journey."
      />

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-[19px] top-2 hidden h-[calc(100%-16px)] w-px bg-border/60 md:block" />

        <div className="space-y-8">
          {experience.map((entry, i) => (
            <div key={i} className="group relative flex gap-6">
              {/* Timeline dot */}
              <div className="relative hidden flex-shrink-0 md:flex">
                <div
                  className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors ${
                    entry.current
                      ? "border-primary bg-primary/10"
                      : "border-border/60 bg-card group-hover:border-primary/40"
                  }`}
                >
                  <Briefcase
                    className={`h-4 w-4 ${
                      entry.current
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  />
                </div>
              </div>

              {/* Card */}
              <div className="flex-1 rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/20 hover:bg-card/80">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-heading text-lg font-semibold">
                      {entry.role}
                    </h3>
                    <p className="mt-1 text-sm text-primary">
                      {entry.company}
                      <span className="text-muted-foreground">
                        {" "}
                        · {entry.location}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {entry.current && (
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                      </span>
                    )}
                    <span className="text-sm text-muted-foreground">
                      {entry.period}
                    </span>
                  </div>
                </div>

                <ul className="mt-4 space-y-2">
                  {entry.description.map((bullet, j) => (
                    <li
                      key={j}
                      className="flex gap-2 text-[14px] leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/50" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {entry.tech.map((t) => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="text-xs font-normal transition-colors hover:bg-primary/10 hover:text-primary"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
