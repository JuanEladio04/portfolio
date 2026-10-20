import type { StaticImageData } from "next/image";
import type { IconName } from "@/components/ui/Icon";

import csiFrame from "@/assets/images/projects/csi-restaurant-frame.webp";
import csiLogo from "@/assets/images/projects/csi-restaurant-logo.png";
import plannerlyFrame from "@/assets/images/projects/plannerly-frame.webp";
import plannerlyLogo from "@/assets/images/projects/plannerly-logo.png";
import atlasFrame from "@/assets/images/projects/atlas-music-festival-frame.webp";
import atlasLogo from "@/assets/images/projects/atlas-music-festival-logo.png";
import servoFrame from "@/assets/images/projects/serv-o-frame.webp";
import servoLogo from "@/assets/images/projects/serv-o-logo.png";
import nebulaFrame from "@/assets/images/projects/nebula-frame.webp";
import nebulaLogo from "@/assets/images/projects/nebula-logo.png";
import orbityFrame from "@/assets/images/projects/orbity-frame.webp";
import orbityLogo from "@/assets/images/projects/orbity-logo.png";
import veriosFrame from "@/assets/images/projects/verios-frame.webp";
import veriosLogo from "@/assets/images/projects/verios-logo.png";
import forviaFrame from "@/assets/images/projects/forvia-frame.webp";
import forviaLogo from "@/assets/images/projects/forvia-logo.png";

// TODO: sustituir por el enlace real al CV en Google Drive.
const CV_URL = "#";

export const profile = {
  initials: "JE",
  shortName: "Juan Eladio",
  firstName: "Juan Eladio",
  lastName: "Pareja Martín",
  fullName: "Juan Eladio Pareja Martín",
  role: "Fullstack & Cloud Developer",
  location: "Pedrera, Sevilla",
  country: "España",
  since: 2022,
  cvUrl: CV_URL,
  intro:
    "Desarrollador Fullstack especializado en backend PHP/Laravel y arquitecturas cloud. Construyo soluciones escalables de principio a fin: de React y Next.js a infraestructura en GCP con Docker.",
};

export type NavItem = { id: string; label: string };

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

export const about = {
  quote:
    "¿Desarrollador? ¿DevOps? ¿Técnico? Al final, las etiquetas son lo de menos. Lo que me define es la curiosidad por entender cómo funciona el mundo bit a bit.",
  quoteTail:
    "Construyo tecnología porque es el único lugar donde la lógica y la creatividad hablan el mismo idioma.",
  description:
    "Desarrollador Fullstack con especialización en backend PHP/Laravel y experiencia en arquitecturas cloud, automatización e integraciones API. Cuento con proyectos propios SaaS en producción desarrollados junto a mi socio en Nebula Systems.",
  facts: [
    { label: "Ubicación", value: "Pedrera, Sevilla" },
    { label: "Actualmente", value: "Co-Founder · Nebula Systems" },
    { label: "Enfoque", value: "Backend & Cloud" },
  ],
  stack: [
    "PHP",
    "Laravel",
    "Node.js",
    "NestJS",
    "Express.js",
    "TypeScript",
    "React",
    "Next.js",
    "Angular",
    "SQL",
    "Docker",
    "GCP",
    "n8n",
  ],
};

export type Project = {
  name: string;
  tags: string[];
  frame: StaticImageData;
  logo: {
    src: StaticImageData;
    width: number;
    height: number;
    fit?: "contain" | "cover";
    tone?: "light" | "dark";
  };
  href?: string;
};

export const projectsIntro =
  "Desde proyectos académicos hasta plataformas SaaS en producción. Selecciona uno para ver el detalle.";

export const projects: Project[] = [
  {
    name: "CSI Restaurant",
    tags: ["Reservas", "Carta online"],
    frame: csiFrame,
    logo: { src: csiLogo, width: 100, height: 94 },
  },
  {
    name: "Plannerly",
    tags: ["Tareas", "Notas", "Workspaces"],
    frame: plannerlyFrame,
    logo: { src: plannerlyLogo, width: 96, height: 108 },
  },
  {
    name: "Atlas Music Festival",
    tags: ["Entradas", "Artistas"],
    frame: atlasFrame,
    logo: { src: atlasLogo, width: 128, height: 128, fit: "cover", tone: "dark" },
  },
  {
    name: "Serv-O",
    tags: ["Gestión de servidores"],
    frame: servoFrame,
    logo: { src: servoLogo, width: 92, height: 72 },
  },
  {
    name: "Nebula",
    tags: ["Clientes", "Pedidos", "Portfolio"],
    frame: nebulaFrame,
    logo: { src: nebulaLogo, width: 100, height: 62, tone: "dark" },
  },
  {
    name: "Orbity",
    tags: ["SaaS", "PDFs", "Correo temporal"],
    frame: orbityFrame,
    logo: { src: orbityLogo, width: 128, height: 128, fit: "cover", tone: "dark" },
  },
  {
    name: "Verios",
    tags: ["Landing", "Web"],
    frame: veriosFrame,
    logo: { src: veriosLogo, width: 108, height: 108 },
  },
  {
    name: "Forvia",
    tags: ["Fitness", "Nutrición", "Social"],
    frame: forviaFrame,
    logo: { src: forviaLogo, width: 104, height: 100 },
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  current?: boolean;
};

export const experienceIntro =
  "Del soporte técnico y las redes al desarrollo fullstack y la infraestructura cloud.";

export const experience: Experience[] = [
  {
    company: "Nebula Systems",
    role: "Co-Founder · Fullstack & Cloud Developer",
    period: "04/2025 — Actualidad",
    current: true,
    description:
      "Desarrollo y mantengo Orbity, plataforma SaaS multifunción con microservicios en Next.js, React y Express.js. Lidero Luma, sistema de control horario con auditoría inmutable (Next.js, NestJS). Diseño infraestructura cloud con Docker en GCP y automatizaciones con n8n.",
  },
  {
    company: "TICsmart",
    role: "Desarrollador Web",
    period: "03/2024 — 06/2024",
    description:
      "Desarrollo y mantenimiento de aplicaciones full stack con Node.js, TypeScript, Angular y SQL. Integración de APIs, optimización de rendimiento, documentación y pruebas unitarias.",
  },
  {
    company: "Osttech SC",
    role: "Técnico de reparación de equipos",
    period: "03/2024 — 06/2024",
    description:
      "Diagnóstico y reparación de equipos, instalación de sistemas, diseño y cableado de redes y administración de servidores.",
  },
];

export type Degree = {
  title: string;
  school: string;
  period: string;
  grade: string;
};

export const degrees: Degree[] = [
  {
    title: "CFGS Desarrollo de Aplicaciones Web",
    school: "IES Marqués de Comares",
    period: "09/2022 — 06/2024",
    grade: "8,42",
  },
  {
    title: "CFGM Sistemas Microinformáticos y Redes",
    school: "IES Marqués de Comares",
    period: "09/2020 — 06/2022",
    grade: "8,00",
  },
];

export type Course = { title: string; issuer: string; date: string };

export const courses: Course[] = [
  {
    title: "Programación y Algoritmos en Python para IA (130 h)",
    issuer: "Samsung Innovation Campus · EOI",
    date: "Jun 2025",
  },
  { title: "React para principiantes", issuer: "OpenWebinars", date: "Jul 2024" },
  {
    title: "Programación orientada a objetos con C++",
    issuer: "OpenWebinars",
    date: "May 2024",
  },
  { title: "C++: Introducción", issuer: "OpenWebinars", date: "May 2024" },
  {
    title: "WordPress: Construcción de sitios web",
    issuer: "OpenWebinars",
    date: "Abr 2024",
  },
];

export type ContactLink = {
  label: string;
  value: string;
  href: string;
  icon: IconName;
};

export const contact = {
  title: "Hablemos.",
  subtitle: "¿Tienes un proyecto en mente? Estaré encantado de escucharte.",
  links: [
    {
      label: "LinkedIn",
      value: "in/juan-eladio-pareja-martin",
      href: "https://www.linkedin.com/in/juan-eladio-pareja-martin",
      icon: "linkedin",
    },
    {
      label: "GitHub",
      value: "github.com/JuanEladio04",
      href: "https://github.com/JuanEladio04",
      icon: "github",
    },
    {
      label: "Linktree",
      value: "hub.nebulasyst.com/@juaneladio",
      href: "https://hub.nebulasyst.com/@juaneladio",
      icon: "link",
    },
    {
      label: "Currículum",
      value: "Ver CV en Google Drive",
      href: CV_URL,
      icon: "file-text",
    },
  ] satisfies ContactLink[],
};
