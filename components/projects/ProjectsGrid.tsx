"use client";

import { useState } from "react";
import type { Project } from "@/data/portfolio";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const openProject = openIndex === null ? null : projects[openIndex];

  return (
    <>
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] justify-items-center gap-x-8 gap-y-[72px] sm:justify-items-start xl:grid-cols-4 xl:justify-between">
        {projects.map((project, i) => (
          <li key={project.slug}>
            <ProjectCard project={project} phase={i * 0.9} onOpen={() => setOpenIndex(i)} />
          </li>
        ))}
      </ul>

      {openProject && openIndex !== null && (
        <ProjectModal
          key={openProject.slug}
          project={openProject}
          index={openIndex + 1}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </>
  );
}
