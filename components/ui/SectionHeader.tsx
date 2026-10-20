type SectionHeaderProps = {
  index: number;
  title: string;
  id?: string;
  tone?: "light" | "dark";
  size?: "md" | "xl";
};

const titleSizes = {
  md: "text-[40px] md:text-[56px] tracking-[-1px]",
  xl: "text-[64px] leading-none md:text-[120px] tracking-[-3px]",
};

export function SectionHeader({
  index,
  title,
  id,
  tone = "light",
  size = "md",
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-3.5">
      <div className="flex items-center gap-3.5" aria-hidden="true">
        <span className="text-xs font-semibold tracking-[3px] text-gold">
          {String(index).padStart(2, "0")}
        </span>
        <span className="h-[1.5px] w-12 bg-gold" />
      </div>
      <h2
        id={id}
        className={`font-display font-medium ${titleSizes[size]} ${tone === "dark" ? "text-cream" : "text-ink"}`}
      >
        {title}
      </h2>
    </div>
  );
}
