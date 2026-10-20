import { existsSync } from "node:fs";
import { join } from "node:path";
import content from "@/content/portfolio.json";
import { isIconName, type IconName } from "@/components/ui/Icon";
import { withBasePath } from "@/lib/site";

// El contenido vive en content/portfolio.json. Este módulo lo tipa, lo valida
// en el build y añade el basePath a las imágenes de /public.

export type NavItem = { id: string; label: string };

export type Project = {
  name: string;
  tags: string[];
  frame: string;
  logo: {
    src: string;
    width: number;
    height: number;
    fit?: "contain" | "cover";
    tone?: "light" | "dark";
  };
  href?: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  current?: boolean;
};

export type Degree = { title: string; school: string; period: string; grade: string };

export type Course = { title: string; issuer: string; date: string };

export type ContactLink = { label: string; value: string; href: string; icon: IconName };

function fail(message: string): never {
  throw new Error(`content/portfolio.json: ${message}`);
}

function publicImage(src: string, where: string) {
  if (!existsSync(join(process.cwd(), "public", src))) {
    fail(`${where} → no existe la imagen "public${src}"`);
  }
  return withBasePath(src);
}

function oneOf<T extends string>(value: string | undefined, options: readonly T[], where: string) {
  if (value === undefined) return undefined;
  if (!options.includes(value as T)) {
    fail(`${where} → "${value}" no es válido (usa: ${options.join(", ")})`);
  }
  return value as T;
}

export const profile = {
  ...content.profile,
  fullName: `${content.profile.firstName} ${content.profile.lastName}`,
};

export const sections = {
  about: { id: "sobre-mi", label: "Sobre mí" },
  projects: { id: "proyectos", label: "Proyectos" },
  experience: { id: "experiencia", label: "Experiencia" },
  education: { id: "formacion", label: "Formación" },
  contact: { id: "contacto", label: "Contacto" },
} satisfies Record<string, NavItem>;

export const navItems: NavItem[] = [
  sections.about,
  sections.projects,
  sections.experience,
  sections.education,
];

export const about = content.about;

export const projectsIntro = content.projectsIntro;

export const projects: Project[] = content.projects.map((project) => {
  const where = `proyecto "${project.name}"`;
  const logo: { fit?: string; tone?: string } = project.logo;

  return {
    ...project,
    frame: publicImage(project.frame, `${where}.frame`),
    logo: {
      ...project.logo,
      src: publicImage(project.logo.src, `${where}.logo.src`),
      fit: oneOf(logo.fit, ["contain", "cover"], `${where}.logo.fit`),
      tone: oneOf(logo.tone, ["light", "dark"], `${where}.logo.tone`),
    },
  };
});

export const experienceIntro = content.experienceIntro;

export const experience: Experience[] = content.experience;

export const degrees: Degree[] = content.degrees;

export const courses: Course[] = content.courses;

export const contact = {
  ...content.contact,
  links: content.contact.links.map((link): ContactLink => {
    if (!isIconName(link.icon)) fail(`contacto "${link.label}" → icono "${link.icon}" no existe`);
    return { ...link, icon: link.icon };
  }),
};
