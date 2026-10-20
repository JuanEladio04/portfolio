import { projects, projectsIntro, sections } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const { id, label } = sections.projects;

  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-4 bg-ink">
      <div className="container-page flex flex-col gap-[88px] py-20 md:py-32">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeader index={2} title={label} id={`${id}-title`} tone="dark" />
          <p className="max-w-[420px] text-base leading-[26px] text-stone">{projectsIntro}</p>
        </div>

        <ul className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-x-8 gap-y-[72px] justify-items-center sm:justify-items-start xl:grid-cols-4 xl:justify-between">
          {projects.map((project) => (
            <li key={project.name}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
