import type { ComponentProps } from "react";
import { Icon, type IconName } from "./Icon";

type Variant = "primary" | "outline";
type Size = "sm" | "md";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-cream hover:bg-charcoal",
  outline: "text-ink ring-[1.5px] ring-inset ring-ink hover:bg-ink hover:text-cream",
};

const sizes: Record<Size, string> = {
  sm: "px-[22px] py-3 text-[13px]",
  md: "px-[30px] py-[18px] text-[15px]",
};

type ButtonLinkProps = ComponentProps<"a"> & {
  variant?: Variant;
  size?: Size;
  icon?: IconName;
  iconClassName?: string;
};

export function ButtonLink({
  variant = "primary",
  size = "md",
  icon,
  iconClassName,
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={`inline-flex items-center gap-3 font-medium whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
      {icon && <Icon name={icon} className={iconClassName} />}
    </a>
  );
}
