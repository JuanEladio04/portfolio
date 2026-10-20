import { experience, experienceIntro, sections, type Experience as Job } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Experience() {
  const { id, label } = sections.experience;

  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-4 bg-sand">
      <div className="container-page flex flex-col gap-16 py-20 md:py-32 lg:flex-row lg:gap-24">
        <div className="flex flex-col gap-6 lg:w-[340px] lg:shrink-0">
          <SectionHeader index={3} title={label} id={`${id}-title`} />
          <p className="text-base leading-[26px] text-muted">{experienceIntro}</p>
        </div>

        <ol className="flex-1 border-t border-line">
          {experience.map((job) => (
            <TimelineItem key={job.company} job={job} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function TimelineItem({ job }: { job: Job }) {
  return (
    <li className="flex flex-col gap-4 border-b border-line py-10 md:flex-row md:gap-12">
      <div className="flex flex-col items-start gap-3 md:w-[200px] md:shrink-0">
        <p className="flex items-center gap-2.5 text-[13px] font-medium text-muted">
          <span className={`size-2 ${job.current ? "bg-gold" : "bg-ink"}`} aria-hidden="true" />
          {job.period}
        </p>
        {job.current && (
          <span className="px-2.5 py-[5px] text-[10px] font-semibold tracking-[2px] text-gold ring-1 ring-inset ring-gold">
            ACTUAL
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2.5">
        <h3 className="font-display text-[28px] font-medium text-ink">{job.company}</h3>
        <p className="text-sm font-semibold tracking-[0.5px] text-gold">{job.role}</p>
        <p className="text-[15px] leading-[25px] text-muted">{job.description}</p>
      </div>
    </li>
  );
}
