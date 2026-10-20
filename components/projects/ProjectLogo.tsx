import Image from "next/image";
import type { ProjectLogo as Logo } from "@/data/portfolio";

// Las medidas del logo en el JSON son para el círculo de 128px de la tarjeta;
// en otros tamaños se escalan en proporción.
const BASE_SIZE = 128;

type ProjectLogoProps = {
  logo: Logo;
  name: string;
  size?: number;
  className?: string;
};

export function ProjectLogo({ logo, name, size = BASE_SIZE, className = "" }: ProjectLogoProps) {
  const scale = size / BASE_SIZE;
  const width = Math.round(logo.width * scale);
  const height = Math.round(logo.height * scale);
  const cover = logo.fit === "cover";

  return (
    <div
      className={`flex shrink-0 items-center justify-center overflow-hidden rounded-full ring-1 ring-inset ring-gold ${logo.tone === "dark" ? "bg-charcoal" : "bg-cream"} ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={logo.src}
        alt={`Logo de ${name}`}
        width={width}
        height={height}
        sizes={`${width}px`}
        className={cover ? "size-full object-cover" : "object-contain"}
        style={cover ? undefined : { width, height }}
      />
    </div>
  );
}
