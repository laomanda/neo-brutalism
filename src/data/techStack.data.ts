import type { BilingualText } from "../types/common.types";

export type TechCategory = "frontend" | "backend" | "database" | "tools";

export type TechStackItem = {
  name: string;
  category: TechCategory;
  icon: string;
  color: string;
  description: BilingualText;
};

export const techStack: TechStackItem[] = [
  {
    name: "HTML",
    category: "frontend",
    icon: "logos:html-5",
    color: "#E34F26",
    description: { id: "Struktur dasar halaman web.", en: "Basic structure for web pages." },
  },
  {
    name: "CSS",
    category: "frontend",
    icon: "logos:css-3",
    color: "#1572B6",
    description: { id: "Styling visual dan layout.", en: "Visual styling and layout." },
  },
  {
    name: "JavaScript",
    category: "frontend",
    icon: "logos:javascript",
    color: "#F7DF1E",
    description: { id: "Interaksi dan logika frontend.", en: "Frontend interaction and logic." },
  },
  {
    name: "TypeScript",
    category: "frontend",
    icon: "logos:typescript-icon",
    color: "#3178C6",
    description: {
      id: "JavaScript dengan type safety untuk project yang lebih rapi.",
      en: "JavaScript with type safety for cleaner projects.",
    },
  },
  {
    name: "React",
    category: "frontend",
    icon: "logos:react",
    color: "#61DAFB",
    description: {
      id: "Library untuk membangun antarmuka berbasis komponen.",
      en: "A library for building component-based interfaces.",
    },
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: "logos:tailwindcss-icon",
    color: "#06B6D4",
    description: {
      id: "Utility-first CSS untuk styling cepat dan konsisten.",
      en: "Utility-first CSS for fast and consistent styling.",
    },
  },
  {
    name: "PHP",
    category: "backend",
    icon: "logos:php",
    color: "#777BB4",
    description: {
      id: "Bahasa backend yang menjadi dasar pengembangan Laravel.",
      en: "Backend language used as the foundation for Laravel development.",
    },
  },
  {
    name: "Laravel",
    category: "backend",
    icon: "logos:laravel",
    color: "#FF2D20",
    description: {
      id: "Framework backend untuk sistem web, dashboard, dan CRUD.",
      en: "Backend framework for web systems, dashboards, and CRUD.",
    },
  },
  {
    name: "MySQL",
    category: "database",
    icon: "logos:mysql",
    color: "#4479A1",
    description: {
      id: "Database relasional untuk menyimpan dan mengelola data.",
      en: "Relational database for storing and managing data.",
    },
  },
  {
    name: "Git",
    category: "tools",
    icon: "logos:git-icon",
    color: "#F05032",
    description: {
      id: "Version control untuk mengelola perubahan kode.",
      en: "Version control for managing code changes.",
    },
  },
  {
    name: "GitHub",
    category: "tools",
    icon: "logos:github-icon",
    color: "#181717",
    description: {
      id: "Platform repository untuk menyimpan dan membagikan project.",
      en: "Repository platform for storing and sharing projects.",
    },
  },
  {
    name: "Vite",
    category: "tools",
    icon: "logos:vitejs",
    color: "#646CFF",
    description: {
      id: "Build tool cepat untuk project frontend modern.",
      en: "Fast build tool for modern frontend projects.",
    },
  },
  {
    name: "REST API",
    category: "backend",
    icon: "carbon:api",
    color: "#000000",
    description: {
      id: "Pola komunikasi data antara frontend dan backend.",
      en: "Data communication pattern between frontend and backend.",
    },
  },
  {
    name: "RBAC",
    category: "backend",
    icon: "material-symbols:admin-panel-settings-rounded",
    color: "#4285F4",
    description: {
      id: "Pengaturan akses berdasarkan role pengguna.",
      en: "Access control based on user roles.",
    },
  },
  {
    name: "Next.js",
    category: "frontend",
    icon: "logos:nextjs-icon",
    color: "#000000",
    description: {
      id: "Framework React untuk aplikasi web production-ready.",
      en: "React framework for production-ready web applications.",
    },
  },
  {
    name: "VS Code",
    category: "tools",
    icon: "logos:visual-studio-code",
    color: "#007ACC",
    description: {
      id: "Code editor andalan untuk pengembangan software.",
      en: "Primary code editor for software development.",
    },
  },
  {
    name: "Postman",
    category: "tools",
    icon: "logos:postman-icon",
    color: "#FF6C37",
    description: {
      id: "Alat untuk testing dan dokumentasi API.",
      en: "Tool for API testing and documentation.",
    },
  },
];
