import Image from "next/image";
import type { Project } from "@/data/portfolio";
import { Icon } from "@/components/ui/Icon";

export function ProjectCard({ project }: { project: Project }) {
  const { name, tags, frame, logo, href } = project;
  const Wrapper = href ? "a" : "div";

  return (
    <article className="group">
      <Wrapper {...(href ? { href } : {})} className="flex flex-col gap-7">
        <div className="relative size-60">
          <Image src={frame} alt="" fill sizes="240px" className="object-fill" />
          <div
            className={`absolute inset-14 flex items-center justify-center overflow-hidden rounded-full ring-1 ring-inset ring-gold transition-transform group-hover:scale-105 ${logo.tone === "dark" ? "bg-charcoal" : "bg-cream"}`}
          >
            <Image
              src={logo.src}
              alt={`Logo de ${name}`}
              width={logo.width}
              height={logo.height}
              sizes={`${logo.width}px`}
              className={logo.fit === "cover" ? "size-full object-cover" : "object-contain"}
              style={logo.fit === "cover" ? undefined : { width: logo.width, height: logo.height }}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Icon name="mouse-pointer-click" size={20} className="text-gold-light" />
          <h3 className="font-display text-[22px] font-medium text-cream">{name}</h3>
          <p className="text-[13px] text-stone">{tags.join(" · ")}</p>
        </div>
      </Wrapper>
    </article>
  );
}
