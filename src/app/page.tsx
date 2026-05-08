import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Certifications } from "@/components/sections/certifications";
import { Education } from "@/components/sections/education";
import { Contact } from "@/components/sections/contact";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <Hero />
      <Separator className="mx-auto max-w-6xl" />
      <About />
      <Separator className="mx-auto max-w-6xl" />
      <Experience />
      <Separator className="mx-auto max-w-6xl" />
      <Skills />
      <Separator className="mx-auto max-w-6xl" />
      <Projects />
      <Separator className="mx-auto max-w-6xl" />
      <Certifications />
      <Separator className="mx-auto max-w-6xl" />
      <Education />
      <Separator className="mx-auto max-w-6xl" />
      <Contact />
    </>
  );
}
