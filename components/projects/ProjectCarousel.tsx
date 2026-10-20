"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { GalleryImage } from "@/data/portfolio";
import { Icon, type IconName } from "@/components/ui/Icon";

const pad = (n: number) => String(n).padStart(2, "0");

type ProjectCarouselProps = {
  images: GalleryImage[];
  projectName: string;
};

export function ProjectCarousel({ images, projectName }: ProjectCarouselProps) {
  const [current, setCurrent] = useState(0);
  const total = images.length;
  const image = images[current];
  const hasMany = total > 1;

  const goTo = (index: number) => setCurrent((index + total) % total);
  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  // Navegación con las flechas del teclado mientras el modal está abierto.
  useEffect(() => {
    if (!hasMany) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") setCurrent((i) => (i - 1 + total) % total);
      if (event.key === "ArrowRight") setCurrent((i) => (i + 1) % total);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [hasMany, total]);

  return (
    <section
      aria-roledescription="carrusel"
      aria-label={`Capturas de ${projectName}`}
      className="flex flex-col gap-5 border-t border-line bg-sand px-6 pt-8 pb-12 md:px-14"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-line ring-1 ring-ink">
        <Image
          key={image.src}
          src={image.src}
          alt={image.title}
          fill
          sizes="(min-width: 1120px) 1008px, 100vw"
          className="object-cover object-top"
        />
        {hasMany && (
          <>
            <NavButton icon="arrow-left" label="Imagen anterior" onClick={prev} className="left-0" />
            <NavButton icon="arrow-right" label="Imagen siguiente" onClick={next} className="right-0" />
          </>
        )}
      </div>

      {hasMany && (
        <div className="flex items-center gap-6">
          <span className="font-display text-base font-medium tracking-[1px]">
            {pad(current + 1)} / {pad(total)}
          </span>
          <div className="flex flex-1 items-center gap-1.5" aria-hidden="true">
            {images.map((img, i) => (
              <span
                key={img.src}
                className={`flex-1 transition-all ${i === current ? "h-[3px] bg-gold" : "h-[1.5px] bg-line"}`}
              />
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-col gap-1.5" aria-live="polite">
        <p className="flex items-center gap-3 font-display text-xl font-medium">
          <span className="size-2 bg-gold" aria-hidden="true" />
          {image.title}
        </p>
        {image.caption && <p className="text-[15px] leading-normal text-muted">{image.caption}</p>}
      </div>

      {hasMany && (
        <ul className="flex gap-3 overflow-x-auto pb-1">
          {images.map((img, i) => (
            <li key={img.src} className="min-w-[120px] flex-1">
              <button
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Ver ${img.title}`}
                aria-current={i === current}
                className={`relative block h-[90px] w-full cursor-pointer overflow-hidden transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
                  i === current ? "" : "opacity-55 hover:opacity-100"
                }`}
              >
                <Image src={img.src} alt="" fill sizes="160px" className="object-cover object-top" />
                {/* Borde en su propia capa para que la imagen no lo tape. */}
                <span
                  className={`absolute inset-0 ring-inset ${i === current ? "ring-2 ring-gold" : "ring-1 ring-line"}`}
                />
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

type NavButtonProps = {
  icon: IconName;
  label: string;
  onClick: () => void;
  className: string;
};

function NavButton({ icon, label, onClick, className }: NavButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`absolute top-1/2 flex size-14 -translate-y-1/2 cursor-pointer items-center justify-center bg-ink text-cream transition-colors hover:bg-charcoal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${className}`}
    >
      <Icon name={icon} size={20} />
    </button>
  );
}
