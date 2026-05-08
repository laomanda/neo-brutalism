import type { BilingualText } from "../types/common.types";

export const uiCopy = {
  viewDetail: {
    id: "Lihat Detail",
    en: "View Detail",
  },
  openDetail: {
    id: "Buka Detail",
    en: "Open Detail",
  },
  learnMore: {
    id: "Pelajari Lebih Lanjut",
    en: "Learn More",
  },
  backHome: {
    id: "Kembali ke Home",
    en: "Back to Home",
  },
  viewProjects: {
    id: "Lihat Project",
    en: "View Projects",
  },
  secondaryOffering: {
    id: "Penawaran Tambahan",
    en: "Secondary Offering",
  },
  comingSoon: {
    id: "Akan Ditambahkan",
    en: "Coming Soon",
  },
  available: {
    id: "Tersedia",
    en: "Available",
  },
  notAvailable: {
    id: "Belum Tersedia",
    en: "Not Available Yet",
  },
  downloadCv: {
    id: "Unduh CV",
    en: "Download CV",
  },
  cvComingSoon: {
    id: "CV akan ditambahkan",
    en: "CV will be added",
  },
  cvHelper: {
    id: "File CV final belum dipasang ke folder public/documents.",
    en: "The final CV file has not been added to public/documents yet.",
  },
  github: {
    id: "GitHub",
    en: "GitHub",
  },
  liveDemo: {
    id: "Live Demo",
    en: "Live Demo",
  },
  languageToggle: {
    id: "Ganti bahasa",
    en: "Switch language",
  },
  languageLabels: {
    id: {
      id: "ID",
      en: "ID",
    },
    en: {
      id: "EN",
      en: "EN",
    },
  },
  themeLabels: {
    dark: {
      id: "Mode Gelap",
      en: "Dark Mode",
    },
    light: {
      id: "Mode Terang",
      en: "Light Mode",
    },
  },
  availableForWork: {
    id: "Siap Bekerja",
    en: "Available for work",
  },
  systemConfig: {
    id: "Konfigurasi Sistem",
    en: "System Config",
  },
  navigation: {
    id: "Navigasi",
    en: "Navigation",
  },
  connect: {
    id: "Hubungkan",
    en: "Connect",
  },
  allRightsReserved: {
    id: "Hak cipta dilindungi.",
    en: "All rights reserved.",
  },
} satisfies Record<string, BilingualText | Record<string, BilingualText>>;
