import { courses, degrees, sections, type Course, type Degree } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Label } from "@/components/ui/Label";

export function Education() {
  const { id, label } = sections.education;

  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-4 bg-cream">
      <div className="container-page flex flex-col gap-[72px] py-20 md:py-32">
        <SectionHeader index={4} title={label} id={`${id}-title`} />

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col gap-6">
            <Label>Estudios</Label>
            <ul className="flex flex-col gap-6">
              {degrees.map((degree) => (
                <DegreeCard key={degree.title} degree={degree} />
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <Label>Cursos</Label>
            <ul>
              {courses.map((course) => (
                <CourseItem key={course.title} course={course} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function DegreeCard({ degree }: { degree: Degree }) {
  return (
    <li className="flex items-center justify-between gap-6 p-8 ring-1 ring-inset ring-ink">
      <div className="flex flex-col gap-2">
        <h3 className="font-display text-[22px] leading-7 font-medium text-ink">{degree.title}</h3>
        <p className="text-sm text-muted">
          {degree.school} · {degree.period}
        </p>
      </div>
      <div className="flex size-[88px] shrink-0 flex-col items-center justify-center gap-0.5 bg-ink">
        <span className="text-[9px] font-semibold tracking-[2px] text-stone">NOTA</span>
        <span className="font-display text-[26px] font-medium text-gold-light">{degree.grade}</span>
      </div>
    </li>
  );
}

function CourseItem({ course }: { course: Course }) {
  return (
    <li className="flex items-center justify-between gap-6 border-b border-line py-[18px]">
      <div className="flex flex-col gap-1">
        <h3 className="text-base font-medium text-ink">{course.title}</h3>
        <p className="text-[13px] text-muted">{course.issuer}</p>
      </div>
      <span className="shrink-0 text-[13px] font-medium text-gold">{course.date}</span>
    </li>
  );
}
