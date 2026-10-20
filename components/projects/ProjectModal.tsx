"use client";

import { useEffect, useId, useRef, type MouseEvent } from "react";
import type { Project } from "@/data/portfolio";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Label } from "@/components/ui/Label";
import { OrbitFrame } from "@/components/ui/OrbitFrame";
import { Tag } from "@/components/ui/Tag";
import { ProjectCarousel } from "./ProjectCarousel";
import { ProjectLogo } from "./ProjectLogo";

type ProjectModalProps = {
  project: Project;
  /** Posición del proyecto en la lista, para el "PROYECTO 05". */
  index: number;
  onClose: () => void;
};

// <dialog> nativo: atrapa el foco, cierra con Esc y devuelve el foco al cerrar.
export function ProjectModal({ project, index, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const { name, type, description, stack, url, logo, gallery } = project;
  const hasDetails = description || stack.length > 0 || url;

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  const close = () => dialogRef.current?.close();

  // Un clic fuera del contenido cae sobre el propio <dialog> (su ::backdrop).
  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) close();
  };

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={handleBackdropClick}
      className="m-auto max-h-[calc(100dvh-2rem)] w-[min(1120px,calc(100%-2rem))] max-w-none overflow-y-auto bg-cream p-0 text-ink ring-1 ring-gold backdrop:bg-ink/88"
    >
      <header className="flex items-start justify-between gap-6 px-6 pt-12 pb-8 md:px-14">
        <div className="flex flex-col gap-3.5">
          <p className="flex flex-wrap items-center gap-3.5 text-xs">
            <span className="font-semibold tracking-[3px] text-gold">
              PROYECTO {String(index).padStart(2, "0")}
            </span>
            <span className="h-[1.5px] w-12 bg-gold" aria-hidden="true" />
            {type && <span className="font-medium tracking-[1px] text-muted">{type}</span>}
          </p>

          <div className="flex items-center gap-5">
            <div className="relative size-24 shrink-0">
              <OrbitFrame
                colorClassName="text-gold"
                strokeWidth={1.2}
                speed={1.5}
                phase={4.5}
                className="absolute inset-0 size-full"
              />
              <ProjectLogo logo={logo} name={name} size={50} className="absolute top-[23px] left-[23px]" />
            </div>
            <h2
              id={titleId}
              className="font-display text-[40px] leading-none font-medium tracking-[-1.5px] md:text-[64px]"
            >
              {name}
            </h2>
          </div>
        </div>

        <button
          type="button"
          onClick={close}
          aria-label="Cerrar"
          className="flex size-12 shrink-0 cursor-pointer items-center justify-center ring-[1.5px] ring-inset ring-ink transition-colors hover:bg-ink hover:text-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          <Icon name="x" size={20} />
        </button>
      </header>

      {hasDetails && (
        <div className="flex flex-col gap-10 px-6 pb-10 md:flex-row md:gap-16 md:px-14">
          {description && (
            <p className="flex-1 text-[17px] leading-[1.7] text-muted">{description}</p>
          )}

          {(stack.length > 0 || url) && (
            <div className="flex shrink-0 flex-col items-start gap-5 md:max-w-[420px]">
              {stack.length > 0 && (
                <div className="flex flex-col gap-2.5">
                  <Label>Stack</Label>
                  <ul className="flex flex-wrap gap-2">
                    {stack.map((tech) => (
                      <li key={tech}>
                        <Tag>{tech}</Tag>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {url && (
                <ButtonLink
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon="arrow-up-right"
                  iconClassName="text-gold-light"
                >
                  Visitar proyecto
                </ButtonLink>
              )}
            </div>
          )}
        </div>
      )}

      {gallery.length > 0 && <ProjectCarousel images={gallery} projectName={name} />}
    </dialog>
  );
}
