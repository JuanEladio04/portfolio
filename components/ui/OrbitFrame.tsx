import type { CSSProperties } from "react";

// Marco geométrico animado (port en SVG + CSS del shader orbit-frame.glsl):
// cuadrado, hexágono y dodecágono concéntricos girando a distinta velocidad.
const RADIUS = 49;

const shapes = [
  { sides: 4, radius: RADIUS, opacity: 1, className: "orbit-shape orbit-shape--square" },
  { sides: 6, radius: RADIUS * 0.86, opacity: 0.85, className: "orbit-shape orbit-shape--hexagon" },
  { sides: 12, radius: RADIUS * 0.74, opacity: 0.7, className: "orbit-shape orbit-shape--dodecagon" },
];

function polygonPoints(sides: number, radius: number) {
  return Array.from({ length: sides }, (_, i) => {
    const angle = (2 * Math.PI * i) / sides + Math.PI / sides;
    return `${(radius * Math.cos(angle)).toFixed(3)},${(radius * Math.sin(angle)).toFixed(3)}`;
  }).join(" ");
}

type OrbitFrameProps = {
  className?: string;
  /** Desfase de la animación, igual que u_phase del shader (0 – 2π). */
  phase?: number;
  /** Multiplicador de velocidad, igual que u_speed del shader. */
  speed?: number;
  /** Grosor de línea en px, igual que u_width del shader. */
  strokeWidth?: number;
  /** Clase de color de línea (u_color del shader). */
  colorClassName?: string;
};

export function OrbitFrame({
  className = "",
  phase = 0,
  speed = 1,
  strokeWidth = 1.5,
  colorClassName = "text-orbit",
}: OrbitFrameProps) {
  return (
    <svg
      viewBox="-50 -50 100 100"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={`${colorClassName} ${className}`}
      style={{ "--orbit-phase": phase, "--orbit-speed": speed } as CSSProperties}
    >
      {shapes.map(({ sides, radius, opacity, className }) => (
        <polygon
          key={sides}
          points={polygonPoints(sides, radius)}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          opacity={opacity}
          className={className}
        />
      ))}
    </svg>
  );
}
