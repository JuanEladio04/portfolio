import Image from "next/image";
import { profile, sections } from "@/data/portfolio";
import { ButtonLink } from "@/components/ui/Button";
import { OrbitFrame } from "@/components/ui/OrbitFrame";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-sand">
      <div className="container-page relative flex min-h-[760px] items-center justify-between gap-12 py-20">
        <div className="relative z-10 flex max-w-[700px] flex-col gap-9">
          <p className="flex items-center gap-3.5 text-xs font-semibold tracking-[3px] text-gold uppercase">
            <span className="h-[1.5px] w-12 bg-gold" aria-hidden="true" />
            Portfolio · {profile.location}
          </p>

          <div className="flex flex-col gap-5">
            <h1 className="font-display text-[56px] leading-none font-medium tracking-[-2px] text-ink md:text-[92px]">
              {profile.firstName}
              <br />
              {profile.lastName}
            </h1>
            <p className="flex items-center gap-4 font-display text-lg tracking-[6px] text-ink uppercase md:text-2xl">
              <span className="size-2.5 shrink-0 bg-gold" aria-hidden="true" />
              {profile.role}
            </p>
          </div>

          <p className="max-w-[560px] text-[17px] leading-[27px] text-muted">{profile.intro}</p>

          <div className="flex flex-wrap gap-4">
            <ButtonLink
              href={`#${sections.projects.id}`}
              icon="arrow-down-right"
              iconClassName="text-gold-light"
            >
              Ver proyectos
            </ButtonLink>
            <ButtonLink
              href={profile.cvUrl}
              variant="outline"
              icon="download"
              target="_blank"
              rel="noopener noreferrer"
            >
              Descargar CV
            </ButtonLink>
          </div>
        </div>

        <PhotoComposition />
      </div>
    </section>
  );
}

function PhotoComposition() {
  return (
    <div className="relative hidden h-[600px] w-[500px] shrink-0 lg:block">
      <OrbitFrame
        speed={0.6}
        className="pointer-events-none absolute -top-20 -left-[130px] size-[760px] opacity-60"
      />
      <div className="absolute top-0 left-14 h-[540px] w-[440px] ring-[1.5px] ring-inset ring-gold" />
      <Image
        src={profile.photo}
        alt={`Foto de ${profile.fullName}`}
        width={440}
        height={540}
        sizes="440px"
        fetchPriority="high"
        className="absolute top-9 left-5 h-[540px] w-[440px] bg-line object-cover motion-safe:animate-bob"
      />
      <div className="absolute top-6 left-[452px] size-7 bg-gold" />
      <div className="absolute top-[500px] left-0 flex h-[100px] w-[120px] flex-col justify-center gap-1 bg-ink px-5">
        <span className="text-[10px] font-semibold tracking-[2.5px] text-stone">DESDE</span>
        <span className="font-display text-[30px] font-medium text-cream">{profile.since}</span>
      </div>
    </div>
  );
}
