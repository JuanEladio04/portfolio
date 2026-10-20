import type { ReactNode } from "react";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block px-3.5 py-2 text-[13px] font-medium text-ink ring-1 ring-inset ring-ink">
      {children}
    </span>
  );
}
