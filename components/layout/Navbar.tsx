import { navItems, profile, sections } from "@/data/portfolio";
import { ButtonLink } from "@/components/ui/Button";

export function Navbar() {
  return (
    <header className="border-b border-line bg-sand">
      <nav
        aria-label="Principal"
        className="container-page flex items-center justify-between py-7"
      >
        <a href="#" className="flex items-center gap-3 font-display text-sm text-ink">
          <span className="flex size-9 items-center justify-center font-semibold tracking-[1px] ring-[1.5px] ring-inset ring-ink">
            {profile.initials}
          </span>
          <span className="font-medium tracking-[3px] uppercase">{profile.shortName}</span>
        </a>

        <div className="flex items-center gap-10">
          <ul className="hidden items-center gap-10 lg:flex">
            {navItems.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-[13px] font-medium tracking-[0.5px] text-ink transition-colors hover:text-gold"
                >
                  {String(i + 1).padStart(2, "0")} {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ButtonLink href={`#${sections.contact.id}`} size="sm">
            {sections.contact.label}
          </ButtonLink>
        </div>
      </nav>
    </header>
  );
}
