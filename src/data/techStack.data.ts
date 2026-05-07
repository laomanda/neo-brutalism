import type { BilingualText } from "../types/common.types";

export type TechCategory = "frontend" | "backend" | "database" | "tools";

export type TechStackItem = {
  name: string;
  category: TechCategory;
  icon: string;
  description: BilingualText;
};

export const techStack: TechStackItem[] = [
  {
    name: "HTML",
    category: "frontend",
    icon: "logos:html-5",
    description: { id: "Struktur dasar halaman web.", en: "Basic structure for web pages." },
  },
  {
    name: "CSS",
    category: "frontend",
    icon: "logos:css-3",
    description: { id: "Styling visual dan layout.", en: "Visual styling and layout." },
  },
  {
    name: "JavaScript",
    category: "frontend",
    icon: "logos:javascript",
    description: { id: "Interaksi dan logika frontend.", en: "Frontend interaction and logic." },
  },
  {
    name: "TypeScript",
    category: "frontend",
    icon: "logos:typescript-icon",
    description: {
      id: "JavaScript dengan type safety untuk project yang lebih rapi.",
      en: "JavaScript with type safety for cleaner projects.",
    },
  },
  {
    name: "React",
    category: "frontend",
    icon: "logos:react",
    description: {
      id: "Library untuk membangun antarmuka berbasis komponen.",
      en: "A library for building component-based interfaces.",
    },
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: "logos:tailwindcss-icon",
    description: {
      id: "Utility-first CSS untuk styling cepat dan konsisten.",
      en: "Utility-first CSS for fast and consistent styling.",
    },
  },
  {
    name: "PHP",
    category: "backend",
    icon: "logos:php",
    description: {
      id: "Bahasa backend yang menjadi dasar pengembangan Laravel.",
      en: "Backend language used as the foundation for Laravel development.",
    },
  },
  {
    name: "Laravel",
    category: "backend",
    icon: "logos:laravel",
    description: {
      id: "Framework backend untuk sistem web, dashboard, dan CRUD.",
      en: "Backend framework for web systems, dashboards, and CRUD.",
    },
  },
  {
    name: "MySQL",
    category: "database",
    icon: "logos:mysql",
    description: {
      id: "Database relasional untuk menyimpan dan mengelola data.",
      en: "Relational database for storing and managing data.",
    },
  },
  {
    name: "Git",
    category: "tools",
    icon: "logos:git-icon",
    description: {
      id: "Version control untuk mengelola perubahan kode.",
      en: "Version control for managing code changes.",
    },
  },
  {
    name: "GitHub",
    category: "tools",
    icon: "logos:github-icon",
    description: {
      id: "Platform repository untuk menyimpan dan membagikan project.",
      en: "Repository platform for storing and sharing projects.",
    },
  },
  {
    name: "Vite",
    category: "tools",
    icon: "logos:vitejs",
    description: {
      id: "Build tool cepat untuk project frontend modern.",
      en: "Fast build tool for modern frontend projects.",
    },
  },
  {
    name: "REST API",
    category: "backend",
    icon: "carbon:api",
    description: {
      id: "Pola komunikasi data antara frontend dan backend.",
      en: "Data communication pattern between frontend and backend.",
    },
  },
  {
    name: "RBAC",
    category: "backend",
    icon: "material-symbols:admin-panel-settings-rounded",
    description: {
      id: "Pengaturan akses berdasarkan role pengguna.",
      en: "Access control based on user roles.",
    },
  },
];
