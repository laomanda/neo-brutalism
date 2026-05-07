import type { BilingualText } from "../types/common.types";

export type StatItem = {
  value: number | string;
  suffix?: string;
  label: BilingualText;
  description: BilingualText;
};

export const stats: StatItem[] = [
  {
    value: 6,
    suffix: "",
    label: { id: "Bulan PKL", en: "Months Internship" },
    description: {
      id: "Pengalaman project real sebagai Fullstack Developer Intern.",
      en: "Real project experience as a Fullstack Developer Intern.",
    },
  },
  {
    value: 3,
    suffix: "",
    label: { id: "Project Utama", en: "Main Projects" },
    description: {
      id: "DPF WAKAF, DoneTea, dan Laundry Management System.",
      en: "DPF WAKAF, DoneTea, and Laundry Management System.",
    },
  },
  {
    value: "Frontend",
    label: { id: "Fokus Utama", en: "Main Focus" },
    description: {
      id: "UI engineering, responsive layout, interaksi, dan pengalaman pengguna.",
      en: "UI engineering, responsive layout, interaction, and user experience.",
    },
  },
  {
    value: "Fullstack",
    label: { id: "Kemampuan Pendukung", en: "Supporting Capability" },
    description: {
      id: "Memahami Laravel, MySQL, CRUD, dashboard, dan role access.",
      en: "Understands Laravel, MySQL, CRUD, dashboards, and role access.",
    },
  },
];
