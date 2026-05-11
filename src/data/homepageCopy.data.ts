import type { BilingualList, BilingualText } from "../types/common.types";
import type { Accent } from "../components/ui/Card";
import type { TechCategory } from "./techStack.data";

type CopyCard = {
  title: BilingualText;
  description: BilingualText;
  accent?: Exclude<Accent, "default">;
};

type CaseStudyStepCopy = {
  title: BilingualText;
  description: BilingualText;
  accent: Accent;
};

export type TechFilterKey = "all" | TechCategory;

export const homepageCopy = {
  hero: {
    eyebrow: { id: "Web Developer", en: "Web Developer" },
    availability: {
      id: "Terbuka untuk frontend role & freelance work.",
      en: "Open for frontend roles & freelance work.",
    },
    roleNote: {
      id: "Frontend Developer first, Fullstack-capable second.",
      en: "Frontend Developer first, Fullstack-capable second.",
    },
    title: {
      id: "Developer yang membangun web modern, interaktif, dan terstruktur.",
      en: "Developer building modern, interactive, and structured web experiences.",
    },
    description: {
      id: "Saya membangun antarmuka web yang clean, responsif, dan punya karakter visual kuat menggunakan React, TypeScript, dan Tailwind CSS. Di sisi lain, saya juga memahami alur fullstack dengan Laravel, MySQL, dashboard, CRUD, dan sistem berbasis role.",
      en: "I build clean, responsive, and visually strong web interfaces using React, TypeScript, and Tailwind CSS. I also understand fullstack workflows with Laravel, MySQL, dashboards, CRUD, and role-based systems.",
    },
    primaryCta: { id: "Lihat Karya Utama", en: "View Featured Work" },
    secondaryCta: { id: "Baca Studi Kasus", en: "Read Case Study" },
    downloadCta: { id: "Unduh CV", en: "Download CV" },
    cvPending: { id: "CV akan ditambahkan", en: "CV will be added" },
    photoPlaceholder: { id: "Foto asli akan ditambahkan", en: "Real photo will be added" },
    skillTags: ["React", "TypeScript", "Tailwind CSS", "Laravel", "MySQL"],
    posterBadges: ["Frontend First", "Laravel Flow", "RPL Graduate"],
    posterStrip: {
      id: "Junior Frontend Developer",
      en: "Junior Frontend Developer",
    }
  },
  about: {
    eyebrow: { id: "Tentang Saya", en: "About Me" },
    title: {
      id: "Frontend-first developer yang menyusun visual, struktur, dan alur sistem dalam satu pengalaman web.",
      en: "A frontend-first developer shaping visuals, structure, and system flow into one web experience.",
    },
    bentoTitle: {
      id: "Obsesi Frontend. Kapabilitas Fullstack.",
      en: "Frontend Obsessed. Fullstack Capable.",
    },
    bentoDescription: {
      id: "Saya tidak hanya menulis kode; saya merancang sistem. Menghilangkan kebisingan untuk membangun pengalaman web yang cepat, interaktif, dan berdampak nyata.",
      en: "I don't just write code; I design systems. Stripping away the noise to build blazing-fast, interactive web experiences that actually convert.",
    },
    description: {
      id: "Saya adalah Fresh Graduate Rekayasa Perangkat Lunak dari Jakarta Timur dengan fokus utama pada frontend development. Saya membangun interface yang responsif, rapi, dan punya karakter visual, sambil tetap memahami alur backend, database, dashboard, CRUD, dan sistem berbasis role.",
      en: "I am a Software Engineering fresh graduate from East Jakarta with a main focus on frontend development. I build responsive, structured, and visually distinctive interfaces while understanding backend workflows, databases, dashboards, CRUD, and role-based systems.",
    },
    quickFacts: [
      { id: "Fresh Graduate Rekayasa Perangkat Lunak", en: "Software Engineering fresh graduate" },
      { id: "Berdomisili di Jakarta Timur", en: "Based in East Jakarta" },
      { id: "Fokus utama Frontend Developer", en: "Main focus on Frontend Development" },
      { id: "Fullstack-capable dengan Laravel dan MySQL", en: "Fullstack-capable with Laravel and MySQL" },
      { id: "Pengalaman PKL sebagai Fullstack Developer", en: "Internship experience as a Fullstack Developer" },
    ],
    cards: [
      {
        title: { id: "UI Engineering", en: "UI Engineering" },
        description: {
          id: "Membangun layout, komponen, dan interaksi web yang clean, responsif, dan nyaman digunakan.",
          en: "Building clean, responsive, and usable web layouts, components, and interactions.",
        },
        accent: "lime",
      },
      {
        title: { id: "Fullstack Foundation", en: "Fullstack Foundation" },
        description: {
          id: "Memahami alur Laravel, MySQL, CRUD, dashboard admin, REST API, dan role-based access.",
          en: "Understanding Laravel, MySQL, CRUD, admin dashboards, REST APIs, and role-based access.",
        },
        accent: "orange",
      },
      {
        title: { id: "Real Project Experience", en: "Real Project Experience" },
        description: {
          id: "Berpengalaman mengerjakan project seperti DPF WAKAF, DoneTea, dan aplikasi manajemen Laundry.",
          en: "Experienced in building projects such as DPF WAKAF, DoneTea, and a Laundry Management Application.",
        },
        accent: "blue",
      },
    ] satisfies CopyCard[],
  },
  techStack: {
    title: {
      id: "Stack yang saya pakai untuk membangun web modern.",
      en: "The stack I use to build modern web experiences.",
    },
    description: {
      id: "Kumpulan teknologi yang saya gunakan untuk membangun antarmuka, backend, database, dan sistem web yang terstruktur.",
      en: "A collection of technologies I use to build interfaces, backends, databases, and structured web systems.",
    },
    filterLabels: {
      all: { id: "Semua", en: "All" },
      frontend: { id: "Frontend", en: "Frontend" },
      backend: { id: "Backend", en: "Backend" },
      database: { id: "Database", en: "Database" },
      tools: { id: "Tools", en: "Tools" },
    } satisfies Record<TechFilterKey, BilingualText>,
  },
  featured: {
    eyebrow: { id: "Project Utama", en: "Featured Project" },
    title: { id: "DPF WAKAF sebagai project flagship.", en: "DPF WAKAF as the flagship project." },
    description: {
      id: "Project utama yang menunjukkan kemampuan membangun platform digital dengan UI modern, dashboard admin, manajemen konten, layanan interaktif, dan alur sistem berbasis React serta Laravel.",
      en: "The main project that demonstrates the ability to build a digital platform with modern UI, an admin dashboard, content management, interactive services, and a React + Laravel system flow.",
    },
    detailCta: { id: "Lihat Detail Project", en: "View Project Detail" },
    caseStudyCta: { id: "Baca Studi Kasus", en: "Read Case Study" },
    screenshotPlaceholder: {
      id: "Screenshot DPF WAKAF akan ditambahkan",
      en: "DPF WAKAF screenshot will be added",
    },
    mockupBlocks: {
      id: ["Program Donasi", "Dashboard Admin", "Article CMS", "Form Layanan"],
      en: ["Donation Program", "Admin Dashboard", "Article CMS", "Service Form"],
    } satisfies BilingualList,
  },
  caseStudy: {
    eyebrow: { id: "Studi Kasus", en: "Case Study" },
    title: {
      id: "Dari masalah nyata menjadi platform digital yang lebih rapi.",
      en: "From a real problem into a more structured digital platform.",
    },
    description: {
      id: "Studi kasus ini menunjukkan bagaimana DPF WAKAF dibangun sebagai platform untuk donasi, wakaf, konten, layanan interaktif, dan dashboard admin.",
      en: "This case study shows how DPF WAKAF was built as a platform for donations, waqf, content, interactive services, and an admin dashboard.",
    },
    sideTitle: { id: "Project utama", en: "Main project" },
    detailCta: { id: "Lihat Detail Project", en: "View Project Detail" },
    sideTags: ["Fullstack Developer", "React", "Laravel", "MySQL", "Dashboard", "Content Management"],
    steps: [
      {
        title: { id: "Problem", en: "Problem" },
        description: {
          id: "Yayasan membutuhkan platform digital yang lebih modern untuk menampilkan program, mengelola konten, menerima layanan interaktif, dan mendukung alur donasi/wakaf secara lebih terstruktur.",
          en: "The foundation needed a more modern digital platform to present programs, manage content, support interactive services, and structure the donation/waqf flow.",
        },
        accent: "orange",
      },
      {
        title: { id: "Role", en: "Role" },
        description: {
          id: "Saya berperan sebagai Fullstack Developer yang membantu membangun frontend, menyusun struktur halaman, mengelola integrasi dengan backend, dan menyiapkan alur sistem.",
          en: "I worked as a Fullstack Developer, helping build the frontend, structure pages, integrate with the backend, and prepare the system flow.",
        },
        accent: "blue",
      },
      {
        title: { id: "Solution", en: "Solution" },
        description: {
          id: "Solusi dibuat dengan React untuk antarmuka modern dan Laravel + MySQL untuk backend, dashboard, konten, serta data transaksi.",
          en: "The solution used React for the modern interface and Laravel + MySQL for the backend, dashboard, content, and transaction data.",
        },
        accent: "lime",
      },
      {
        title: { id: "Build Process", en: "Build Process" },
        description: {
          id: "Proses pengembangan difokuskan pada struktur UI, pengelolaan program, artikel, form layanan, dashboard admin, dan data yang mudah dikelola.",
          en: "The build process focused on UI structure, program management, articles, service forms, admin dashboard, and maintainable data.",
        },
        accent: "purple",
      },
      {
        title: { id: "Result", en: "Result" },
        description: {
          id: "Hasilnya adalah platform yang lebih rapi, modern, dan siap dikembangkan untuk kebutuhan digital DPF WAKAF.",
          en: "The result is a cleaner, more modern platform ready to be developed further for DPF WAKAF's digital needs.",
        },
        accent: "default",
      },
    ] satisfies CaseStudyStepCopy[],
  },
  projectGallery: {
    eyebrow: { id: "Project Pilihan", en: "Selected Projects" },
    title: {
      id: "Karya utama yang menunjukkan kemampuan frontend dan fullstack.",
      en: "Main works that show frontend and fullstack capability.",
    },
    description: {
      id: "Tiga project ini menunjukkan pengalaman saya dalam membangun platform donasi, sistem POS kantin, dan aplikasi manajemen operasional berbasis web.",
      en: "These three projects show my experience in building a donation platform, a canteen POS system, and a web-based operational management application.",
    },
    detailCta: { id: "Buka Detail", en: "Open Detail" },
    githubCta: { id: "GitHub", en: "GitHub" },
    liveCta: { id: "Live Demo", en: "Live Demo" },
    screenshotPlaceholder: { id: "Screenshot akan ditambahkan", en: "Screenshot will be added" },
  },
  timeline: {
    eyebrow: { id: "Perjalanan", en: "Journey" },
    title: { id: "Perjalanan singkat sebagai developer.", en: "A short journey as a developer." },
    description: {
      id: "Dari latar belakang Rekayasa Perangkat Lunak, pengalaman PKL, sampai membangun project web nyata untuk portfolio dan kebutuhan operasional.",
      en: "From a Software Engineering background and internship experience to building real web projects for portfolio and operational needs.",
    },
  },
  products: {
    eyebrow: { id: "Produk & Jasa", en: "Products & Services" },
    title: {
      id: "Penawaran tambahan untuk kebutuhan digital.",
      en: "Secondary offerings for digital needs.",
    },
    description: {
      id: "Selain portfolio project, saya juga menyiapkan beberapa produk dan jasa digital yang bisa membantu kebutuhan website, frontend, company profile, atau referensi source code.",
      en: "Beyond portfolio projects, I also provide digital products and services for website, frontend, company profile, or source code reference needs.",
    },
    notice: {
      id: "Produk & jasa ini adalah penawaran tambahan, bukan fokus utama portfolio.",
      en: "These products and services are secondary offerings, not the main focus of this portfolio.",
    },
    detailCta: { id: "Lihat Detail Paket", en: "View Package Detail" },
  },
  philosophy: {
    eyebrow: { id: "Cara Saya Membangun", en: "How I Build" },
    title: {
      id: "Prinsip sederhana untuk web yang rapi, hidup, dan mudah dipakai.",
      en: "Simple principles for websites that are structured, alive, and usable.",
    },
    description: {
      id: "Saya tidak hanya mengejar tampilan yang ramai. Setiap layout, motion, dan struktur kode harus punya fungsi yang jelas.",
      en: "I do not just chase flashy visuals. Every layout, motion, and code structure should have a clear purpose.",
    },
    cards: [
      {
        title: { id: "Design with hierarchy", en: "Design with hierarchy" },
        description: {
          id: "Konten harus punya urutan baca yang jelas agar user cepat memahami informasi penting.",
          en: "Content needs a clear reading hierarchy so users can quickly understand the important information.",
        },
        accent: "lime",
      },
      {
        title: { id: "Motion with purpose", en: "Motion with purpose" },
        description: {
          id: "Animasi dipakai untuk membantu alur, bukan membuat semua elemen bergerak tanpa alasan.",
          en: "Motion is used to support the flow, not to make every element move for no reason.",
        },
        accent: "orange",
      },
      {
        title: { id: "Code with structure", en: "Code with structure" },
        description: {
          id: "Komponen, data, dan styling harus disusun rapi agar project mudah dikembangkan.",
          en: "Components, data, and styling should be structured so the project is easier to scale.",
        },
        accent: "blue",
      },
      {
        title: { id: "Build for usability", en: "Build for usability" },
        description: {
          id: "Website harus terlihat menarik, tetapi tetap cepat, responsif, dan nyaman digunakan.",
          en: "A website should look engaging while staying fast, responsive, and comfortable to use.",
        },
        accent: "purple",
      },
    ] satisfies CopyCard[],
  },
  stats: {
    eyebrow: { id: "Angka Singkat", en: "Quick Stats" },
    title: { id: "Sedikit angka untuk memberi konteks.", en: "A few numbers for context." },
    description: {
      id: "Ringkasan singkat tentang pengalaman, project, dan fokus saya sebagai Frontend Developer dengan kemampuan fullstack.",
      en: "A short summary of my experience, projects, and focus as a Frontend Developer with fullstack capability.",
    },
  },
  contact: {
    eyebrow: { id: "Kontak", en: "Contact" },
    title: {
      id: "Punya project web yang perlu dibangun dengan rapi?",
      en: "Have a web project that needs to be built properly?",
    },
    description: {
      id: "Saya terbuka untuk peluang Junior Frontend Developer, project frontend, company profile, landing page, dan sistem web sederhana hingga menengah.",
      en: "I am open to Junior Frontend Developer opportunities, frontend projects, company profiles, landing pages, and small to medium web systems.",
    },
    socialTitle: { id: "Channel aktif", en: "Active channels" },
    socialDescription: {
      id: "Pilih channel yang paling nyaman untuk diskusi cepat, peluang kerja, atau melihat repository project.",
      en: "Pick the most convenient channel for quick discussions, work opportunities, or project repositories.",
    },
    whatsappCta: { id: "Diskusi via WhatsApp", en: "Discuss via WhatsApp" },
    emailCta: { id: "Kirim Email", en: "Send Email" },
    githubCta: { id: "Lihat GitHub", en: "View GitHub" },
    cvReadyCta: { id: "Unduh CV", en: "Download CV" },
    cvPendingCta: { id: "CV akan ditambahkan", en: "CV will be added" },
  },
} as const;
