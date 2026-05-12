import { ROUTES } from "../constants/routes";
import type { ProductService } from "../types/product.types";

export const products: ProductService[] = [
  {
    slug: "source-code",
    title: {
      id: "Source Code",
      en: "Source Code",
    },
    description: {
      id: "Akses penuh ke baris kode project pilihan untuk mempercepat proses belajar Anda, memahami arsitektur yang solid, atau sebagai pondasi kokoh untuk membangun project impian Anda.",
      en: "Full access to curated project source code to accelerate your learning, understand solid architectures, or serve as a robust foundation for building your dream projects.",
    },
    route: ROUTES.products.sourceCode,
    deliverables: {
      id: [
        "Clean & Scalable Source Code",
        "Dokumentasi Implementasi Lengkap",
        "Bedah Arsitektur & Tech Stack",
        "Panduan Setup Step-by-Step",
        "Best Practices & Tips Khusus",
        "Akses Resource & Aset Tambahan",
      ],
      en: [
        "Clean & Scalable Source Code",
        "Complete Implementation Docs",
        "Architecture & Tech Stack Breakdown",
        "Step-by-Step Setup Guide",
        "Best Practices & Pro Tips",
        "Additional Resources & Assets",
      ],
    },
    targetUsers: {
      id: [
        "Mahasiswa yang haus akan implementasi nyata",
        "Developer yang ingin naik level secara teknis",
        "Creative minds yang ingin mewujudkan ide dengan cepat",
      ],
      en: [
        "Students hungry for real-world implementation",
        "Developers looking to level up technically",
        "Creative minds wanting to realize ideas fast",
      ],
    },
    process: {
      id: [
        "Konsultasi kebutuhan teknis Anda",
        "Kurasi project yang paling relevan",
        "Sesi penjelasan struktur & alur",
        "Handover aset & dukungan teknis",
      ],
      en: [
        "Technical needs consultation",
        "Curating the most relevant project",
        "Structure & logic walkthrough session",
        "Asset handover & technical support",
      ],
    },
    note: {
      id: "Project ini dirancang untuk memaksimalkan potensi belajar Anda dengan standar industri yang bisa langsung Anda adaptasi.",
      en: "This project is designed to maximize your learning potential with industry standards that you can directly adapt.",
    },
    accent: "lime",
  },
  {
    slug: "frontend-company-profile",
    title: {
      id: "Professional Website & Branding",
      en: "Professional Website & Branding",
    },
    description: {
      id: "Hadirkan citra profesional brand Anda melalui website yang dirancang khusus untuk membangun kepercayaan pelanggan, mulai dari Company Profile hingga Portfolio Personal yang memikat.",
      en: "Present a professional brand image through a website specially designed to build customer trust, from Company Profiles to captivating Personal Portfolios.",
    },
    route: ROUTES.products.frontendCompanyProfile,
    deliverables: {
      id: [
        "High-End Visual Design",
        "Optimasi Kecepatan & SEO",
        "Integrasi Media Sosial & Kontak",
        "Interaksi & Animasi Halus",
        "Akses Admin (CMS) Opsional",
        "Panduan Manajemen Konten",
      ],
      en: [
        "High-End Visual Design",
        "Speed & SEO Optimization",
        "Social Media & Contact Integration",
        "Smooth Interaction & Animation",
        "Optional Admin Access (CMS)",
        "Content Management Guide",
      ],
    },
    targetUsers: {
      id: [
        "Bisnis & UMKM yang ingin ekspansi digital",
        "Profesional yang ingin personal branding kuat",
        "Komunitas & Organisasi yang butuh wadah informasi",
      ],
      en: [
        "Businesses & SMEs looking for digital expansion",
        "Professionals wanting strong personal branding",
        "Communities & Organizations needing an info hub",
      ],
    },
    process: {
      id: [
        "Bedah Strategi & Kebutuhan",
        "Perancangan UI/UX & Konten",
        "Development & Coding Presisi",
        "Testing, Quality Check & Launch",
      ],
      en: [
        "Strategy & Needs Breakdown",
        "UI/UX & Content Planning",
        "Precision Development & Coding",
        "Testing, Quality Check & Launch",
      ],
    },
    note: {
      id: "Solusi website all-in-one yang tidak hanya cantik dipandang, tapi juga efektif mengonversi pengunjung menjadi klien.",
      en: "An all-in-one website solution that is not only beautiful to look at but also effective at converting visitors into clients.",
    },
    accent: "blue",
  },
  {
    slug: "landing-page-package",
    title: {
      id: "High-Conversion Landing Page",
      en: "High-Conversion Landing Page",
    },
    description: {
      id: "Tingkatkan konversi penjualan Anda dengan landing page yang didesain secara psikologis untuk menarik perhatian dan meyakinkan pengunjung dalam hitungan detik.",
      en: "Boost your sales conversion with a landing page psychologically designed to capture attention and convince visitors in seconds.",
    },
    route: ROUTES.products.landingPagePackage,
    deliverables: {
      id: [
        "Conversion-Focused Layout",
        "Mobile-First Responsive Design",
        "Lead Capture & Contact System",
        "Fast-Loading Performance",
        "Copywriting-Ready Structure",
        "Setup Analytics & Tracking",
      ],
      en: [
        "Conversion-Focused Layout",
        "Mobile-First Responsive Design",
        "Lead Capture & Contact System",
        "Fast-Loading Performance",
        "Copywriting-Ready Structure",
        "Setup Analytics & Tracking",
      ],
    },
    targetUsers: {
      id: [
        "Produk Digital & SaaS",
        "Layanan Jasa & Profesional",
        "Event & Campaign Khusus",
      ],
      en: [
        "Digital Products & SaaS",
        "Service & Professional Fees",
        "Special Events & Campaigns",
      ],
    },
    process: {
      id: [
        "Analisis Target & Konversi",
        "Copywriting & Visual Planning",
        "High-Performance Development",
        "Final Optimization & Go-Live",
      ],
      en: [
        "Target & Conversion Analysis",
        "Copywriting & Visual Planning",
        "High-Performance Development",
        "Final Optimization & Go-Live",
      ],
    },
    note: {
      id: "Solusi tepat bagi Anda yang ingin hasil instan dengan halaman promosi yang tajam, cepat, dan berorientasi pada hasil.",
      en: "The right solution for those who want instant results with a promotional page that is sharp, fast, and results-oriented.",
    },
    accent: "orange",
  },
];
