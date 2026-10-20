import { contact, sections, type ContactLink } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Icon } from "@/components/ui/Icon";
import { Footer } from "@/components/layout/Footer";

export function Contact() {
  const { id } = sections.contact;

  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-4 bg-ink">
      <div className="container-page flex flex-col gap-24 pt-20 pb-12 md:pt-32">
        <div className="flex flex-col justify-between gap-16 lg:flex-row lg:items-end">
          <div className="flex flex-col gap-6">
            <SectionHeader index={5} title={contact.title} id={`${id}-title`} tone="dark" size="xl" />
            <p className="text-[17px] text-stone">{contact.subtitle}</p>
          </div>

          <ul className="w-full lg:w-[440px]">
            {contact.links.map((link) => (
              <ContactItem key={link.label} link={link} />
            ))}
          </ul>
        </div>

        <Footer />
      </div>
    </section>
  );
}

function ContactItem({ link }: { link: ContactLink }) {
  return (
    <li className="border-b border-line-dark">
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-4 py-5"
      >
        <Icon name={link.icon} className="shrink-0 text-gold-light" />
        <span className="flex flex-1 flex-col gap-0.5">
          <span className="text-[10px] font-semibold tracking-[2px] text-stone uppercase">
            {link.label}
          </span>
          <span className="text-[15px] font-medium text-cream">{link.value}</span>
        </span>
        <Icon
          name="arrow-up-right"
          className="shrink-0 text-cream transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </a>
    </li>
  );
}
