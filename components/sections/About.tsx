import { about, sections } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Label } from "@/components/ui/Label";
import { Tag } from "@/components/ui/Tag";

export function About() {
  const { id, label } = sections.about;

  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-4 bg-cream">
      <div className="container-page flex flex-col gap-[72px] py-20 md:py-32">
        <SectionHeader index={1} title={label} id={`${id}-title`} />

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <figure className="flex flex-col gap-7">
            <span
              className="font-display text-[96px] leading-[58px] text-gold"
              aria-hidden="true"
            >
              “
            </span>
            <blockquote className="font-display text-[26px] leading-[36px] text-ink md:text-[32px] md:leading-[43px]">
              {about.quote}
            </blockquote>
            <figcaption className="text-[17px] leading-[27px] text-muted">
              {about.quoteTail}
            </figcaption>
          </figure>

          <div className="flex flex-col gap-10">
            <p className="text-[17px] leading-[29px] text-muted">{about.description}</p>

            <dl className="grid grid-cols-1 border-y border-line sm:grid-cols-3">
              {about.facts.map((fact) => (
                <div key={fact.label} className="flex flex-col gap-2 py-6">
                  <dt>
                    <Label>{fact.label}</Label>
                  </dt>
                  <dd className="text-[15px] font-medium text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-col gap-4">
              <Label>Stack</Label>
              <ul className="flex flex-wrap gap-2">
                {about.stack.map((tech) => (
                  <li key={tech}>
                    <Tag>{tech}</Tag>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
