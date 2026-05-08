import { skillGroups } from "@/data/portfolio";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Globe,
  Database,
  Cloud,
  Layers,
  Cpu,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Globe,
  Database,
  Cloud,
  Layers,
  Cpu,
};

export function Skills() {
  return (
    <AnimatedSection
      id="skills"
      className="mx-auto max-w-6xl px-6 py-24 md:py-32"
    >
      <SectionHeading
        label="Toolbox"
        title="Skills & Technologies"
        subtitle="The tools and technologies I work with daily."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => {
          const Icon = iconMap[group.icon] || Code2;
          return (
            <div
              key={group.title}
              className="group rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/20 hover:bg-card/80"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/15">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-heading text-base font-semibold">
                  {group.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-xs font-normal transition-colors hover:bg-primary/10 hover:text-primary"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </AnimatedSection>
  );
}
