import type { BilingualList } from "../types/common.types";

export const detailCopy = {
  project: {
    backToProjects: { id: "Kembali ke Project", en: "Back to Projects" },
    projectDetail: { id: "Detail Project", en: "Project Detail" },
    overview: { id: "Ringkasan", en: "Overview" },
    roleResponsibilities: { id: "Peran & Tanggung Jawab", en: "Role & Responsibility" },
    coreFeatures: { id: "Fitur Utama", en: "Core Features" },
    techStack: { id: "Teknologi yang Digunakan", en: "Tech Stack Used" },
    screenshots: { id: "Tampilan Project", en: "Project Screenshots" },
    challenges: { id: "Tantangan", en: "Challenges" },
    results: { id: "Hasil", en: "Results" },
    contact: { id: "Hubungi Saya", en: "Contact Me" },
    viewGithub: { id: "Lihat GitHub", en: "View GitHub" },
    viewLive: { id: "Lihat Live Demo", en: "View Live Demo" },
    screenshotWillBeAdded: { id: "Screenshot akan ditambahkan", en: "Screenshot will be added" },
    ctaTitle: { id: "Tertarik melihat project lainnya?", en: "Interested in other projects?" },
    stackNote: {
      id: "Stack dipilih berdasarkan kebutuhan fitur, struktur data, dan alur operasional project.",
      en: "The stack was chosen based on feature needs, data structure, and the project's operational flow.",
    },
    meta: {
      role: { id: "Peran", en: "Role" },
      status: { id: "Status", en: "Status" },
      stack: { id: "Jumlah Stack", en: "Stack Count" },
      type: { id: "Tipe", en: "Type" },
      mainStack: { id: "Stack utama", en: "Main stack" },
      route: { id: "Route", en: "Route" },
    },
    screenshotLabels: {
      id: ["Tampilan utama", "Dashboard / halaman utama sistem", "Detail fitur"],
      en: ["Main view", "Dashboard / system main view", "Feature detail"],
    } satisfies BilingualList,
    fallbackResponsibilities: {
      id: [
        "Menyusun struktur antarmuka dan halaman utama.",
        "Mengelola alur data dari UI ke sistem.",
        "Membantu membangun fitur utama sesuai kebutuhan project.",
        "Menjaga tampilan tetap responsif dan mudah digunakan.",
      ],
      en: [
        "Structured the main interface and page layout.",
        "Managed the data flow from UI to the system.",
        "Helped build the core features based on project needs.",
        "Kept the interface responsive and usable.",
      ],
    } satisfies BilingualList,
    fallbackChallenges: {
      id: [
        "Menyusun struktur fitur agar tetap mudah dipahami dan dikembangkan.",
        "Menjaga tampilan responsif di berbagai ukuran layar.",
        "Menyesuaikan kebutuhan UI dengan alur data dan role pengguna.",
        "Membuat halaman tetap informatif tanpa terasa terlalu penuh.",
      ],
      en: [
        "Structuring features so they remain easy to understand and extend.",
        "Keeping the interface responsive across screen sizes.",
        "Aligning UI needs with data flow and user roles.",
        "Keeping pages informative without making them feel overcrowded.",
      ],
    } satisfies BilingualList,
    fallbackResults: {
      id: [
        "Project memiliki struktur halaman yang lebih rapi.",
        "Fitur utama tersusun berdasarkan kebutuhan pengguna.",
        "Sistem lebih mudah dipresentasikan sebagai portfolio project.",
        "Project siap dikembangkan lebih lanjut dengan data dan asset asli.",
      ],
      en: [
        "The project has a cleaner page structure.",
        "Core features are organized around user needs.",
        "The system is easier to present as a portfolio project.",
        "The project is ready to be expanded with real data and assets.",
      ],
    } satisfies BilingualList,
  },
  product: {
    backToProducts: { id: "Kembali ke Produk/Jasa", en: "Back to Products/Services" },
    productDetail: { id: "Detail Produk & Jasa", en: "Product & Service Detail" },
    whatItIs: { id: "Apa Ini?", en: "What It Is" },
    whoItIsFor: { id: "Cocok Untuk Siapa?", en: "Who It Is For" },
    whatYouGet: { id: "Yang Didapat", en: "What You Get" },
    process: { id: "Alur Pengerjaan", en: "Process" },
    consultWhatsapp: { id: "Konsultasi via WhatsApp", en: "Consult via WhatsApp" },
    contact: { id: "Hubungi Saya", en: "Contact Me" },
    secondaryOffering: { id: "Secondary Offering", en: "Secondary Offering" },
    digitalProductService: { id: "Digital Product / Service", en: "Digital Product / Service" },
    portfolioAddon: { id: "Portfolio Add-on", en: "Portfolio Add-on" },
    ctaTitle: { id: "Butuh paket seperti ini?", en: "Need this kind of package?" },
    ctaDescription: {
      id: "Hubungi saya untuk diskusi kebutuhan, scope, dan arah tampilan yang sesuai dengan project kamu.",
      en: "Contact me to discuss the needs, scope, and visual direction that fit your project.",
    },
    fallbackProcess: {
      id: ["Diskusi kebutuhan", "Struktur konten", "Desain frontend", "Revisi dan deploy"],
      en: ["Requirement discussion", "Content structure", "Frontend design", "Revision and deployment"],
    } satisfies BilingualList,
  },
  notFound: {
    title: { id: "Halaman tidak ditemukan.", en: "Page not found." },
    description: {
      id: "Route yang kamu buka tidak tersedia atau datanya belum dibuat.",
      en: "The route you opened is not available or the data has not been created yet.",
    },
    home: { id: "Kembali ke Home", en: "Back to Home" },
    projects: { id: "Lihat Project", en: "View Projects" },
  },
  footer: {
    secondary: {
      id: "Fullstack-capable second",
      en: "Fullstack-capable second",
    },
    line: {
      id: "Dibangun dengan React, TypeScript, Tailwind CSS, dan sedikit kesabaran melawan layout.",
      en: "Built with React, TypeScript, Tailwind CSS, and a bit of patience against layout issues.",
    },
    quickLinks: { id: "Tautan cepat", en: "Quick links" },
  },
} as const;
