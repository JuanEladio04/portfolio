import { existsSync } from "node:fs";
import { join } from "node:path";
import content from "@/content/portfolio.json";
import { isIconName, type IconName } from "@/components/ui/Icon";
import { withBasePath } from "@/lib/site";

// El contenido vive en content/portfolio.json. Este módulo lo tipa, lo valida
// en el build y añade el basePath a las imágenes de /public.

export type NavItem = { id: string; label: string };

export type ProjectLogo = {
  src: string;
  width: number;
  height: number;
  fit?: "contain" | "cover";
  tone?: "light" | "dark";
};

export type GalleryImage = { src: string; title: string; caption: string };

export type Project = {
  slug: string;
  name: string;
  /** Resumen corto bajo el nombre en la tarjeta. */
  tags: string[];
  /** Subtítulo del modal, p. ej. "SaaS en producción". */
  type: string;
  description: string;
  stack: string[];
  /** Enlace del botón "Visitar proyecto"; vacío para ocultarlo. */
  url: string;
  logo: ProjectLogo;
  gallery: GalleryImage[];
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
  photo: publicImage(content.profile.photo, "profile.photo"),
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
    logo: {
      ...project.logo,
      src: publicImage(project.logo.src, `${where}.logo.src`),
      fit: oneOf(logo.fit, ["contain", "cover"], `${where}.logo.fit`),
      tone: oneOf(logo.tone, ["light", "dark"], `${where}.logo.tone`),
    },
    gallery: project.gallery.map((image, i) => ({
      ...image,
      src: publicImage(image.src, `${where}.gallery[${i}].src`),
    })),
  };
});

const duplicatedSlug = projects.find((p, i) => projects.findIndex((q) => q.slug === p.slug) !== i);
if (duplicatedSlug) fail(`el slug "${duplicatedSlug.slug}" está repetido`);

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
