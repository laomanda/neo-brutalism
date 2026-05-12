import type { BilingualText } from "../types/common.types";

export type TimelineItemData = {
  title: BilingualText;
  period: BilingualText;
  description: BilingualText;
};

export const timelineItems: TimelineItemData[] = [
  {
    title: {
      id: "Rekayasa Perangkat Lunak",
      en: "Software Engineering",
    },
    period: {
      id: "2023 — 2026",
      en: "2023 — 2026",
    },
    description: {
      id: "Mempelajari dasar pengembangan web, frontend, backend, database, dan pembuatan aplikasi berbasis web.",
      en: "Learned the foundations of web development, frontend, backend, databases, and web-based application development.",
    },
  },
  {
    title: {
      id: "Magang Kelas Industri - IT Developer",
      en: "Industrial Class Internship - IT Developer",
    },
    period: {
      id: "Mar — Jun 2025",
      en: "Mar — Jun 2025",
    },
    description: {
      id: "Mengikuti program magang kelas industri di DPF WAKAF sebagai IT Developer untuk mendapatkan pengalaman industri langsung.",
      en: "Participated in an industrial class internship program at DPF WAKAF as an IT Developer to gain direct industry experience.",
    },
  },
  {
    title: {
      id: "PKL sebagai Fullstack Developer",
      en: "Fullstack Developer Internship",
    },
    period: {
      id: "Jan — Jun 2026",
      en: "Jan — Jun 2026",
    },
    description: {
      id: "Mengerjakan project DPF WAKAF dengan fokus pada pengembangan website, frontend React, backend Laravel, dashboard, dan pengelolaan data.",
      en: "Worked on the DPF WAKAF project with a focus on website development, React frontend, Laravel backend, dashboard, and data management.",
    },
  },
  {
    title: {
      id: "Fresh Graduate Developer",
      en: "Fresh Graduate Developer",
    },
    period: {
      id: "Now",
      en: "Now",
    },
    description: {
      id: "Fokus mencari peluang sebagai Frontend Developer dengan kemampuan fullstack untuk membangun sistem web modern dan terstruktur.",
      en: "Focused on frontend developer opportunities with fullstack capability to build modern and structured web systems.",
    },
  },
];
