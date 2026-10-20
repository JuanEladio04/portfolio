import type { ComponentProps } from "react";

// Etiqueta en mayúsculas dorada usada en hechos, stack y columnas.
export function Label({ className = "", ...props }: ComponentProps<"p">) {
  return (
    <p
      className={`text-[11px] font-semibold tracking-[2px] text-gold uppercase ${className}`}
      {...props}
    />
  );
}
