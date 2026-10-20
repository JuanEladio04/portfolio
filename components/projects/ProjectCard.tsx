import type { Project } from "@/data/portfolio";
import { Icon } from "@/components/ui/Icon";
import { OrbitFrame } from "@/components/ui/OrbitFrame";
import { ProjectLogo } from "./ProjectLogo";

type ProjectCardProps = {
  project: Project;
  onOpen: () => void;
  /** Desfase del marco para que cada tarjeta gire en un punto distinto. */
  phase?: number;
};

export function ProjectCard({ project, onOpen, phase = 0 }: ProjectCardProps) {
  const { name, tags, logo } = project;

  return (
    <article className="group relative flex flex-col gap-7">
      <div className="relative size-60">
        <OrbitFrame phase={phase} className="absolute inset-0 size-full" />
        <div className="absolute inset-14 motion-safe:animate-bob">
          <ProjectLogo
            logo={logo}
            name={name}
            className="transition-transform group-hover:scale-105"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Icon name="mouse-pointer-click" size={20} className="text-gold-light" />
        <h3 className="font-display text-[22px] font-medium text-cream">
          {/* El ::after extiende el área clicable a toda la tarjeta. */}
          <button
            type="button"
            onClick={onOpen}
            aria-haspopup="dialog"
            className="cursor-pointer text-left after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-8 focus-visible:after:outline-gold"
          >
            {name}
          </button>
        </h3>
        <p className="text-[13px] text-stone">{tags.join(" · ")}</p>
      </div>
    </article>
  );
}
