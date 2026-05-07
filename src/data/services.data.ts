import type { BilingualText } from "../types/common.types";

export type ServiceProcessItem = {
  step: string;
  title: BilingualText;
  description: BilingualText;
};

export const serviceProcess: ServiceProcessItem[] = [
  {
    step: "01",
    title: { id: "Diskusi kebutuhan", en: "Needs Discussion" },
    description: {
      id: "Kebutuhan, target user, dan struktur halaman dirapikan sebelum proses build.",
      en: "Needs, target users, and page structure are clarified before the build process.",
    },
  },
  {
    step: "02",
    title: { id: "Pengembangan", en: "Development" },
    description: {
      id: "Frontend atau sistem dibangun dengan struktur yang mudah dipakai dan dikembangkan.",
      en: "The frontend or system is built with a structure that is usable and maintainable.",
    },
  },
  {
    step: "03",
    title: { id: "Handover", en: "Handover" },
    description: {
      id: "Project disiapkan untuk dicek, dipakai, dan dikembangkan lagi jika dibutuhkan.",
      en: "The project is prepared for review, usage, and further development when needed.",
    },
  },
];
