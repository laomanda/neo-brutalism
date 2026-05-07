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
      id: "Source code project untuk pembelajaran, referensi struktur, atau dasar pengembangan project serupa.",
      en: "Project source code for learning, structure reference, or as a base for similar development.",
    },
    route: ROUTES.products.sourceCode,
    deliverables: {
      id: [
        "Source code project",
        "Dokumentasi dasar",
        "Penjelasan tech stack",
        "Overview struktur folder",
        "Panduan setup",
      ],
      en: [
        "Project source code",
        "Basic documentation",
        "Tech stack explanation",
        "Folder structure overview",
        "Setup guide",
      ],
    },
    targetUsers: {
      id: [
        "Siswa atau mahasiswa yang ingin belajar struktur project.",
        "Developer pemula yang butuh referensi.",
        "Orang yang ingin mengembangkan project serupa.",
      ],
      en: [
        "Students who want to learn project structure.",
        "Beginner developers who need references.",
        "People who want to develop similar projects.",
      ],
    },
    process: {
      id: [
        "Diskusi kebutuhan source code",
        "Penyesuaian project yang tersedia",
        "Penjelasan struktur dan setup",
        "Pengiriman file dan panduan penggunaan",
      ],
      en: [
        "Source code needs discussion",
        "Available project adjustment",
        "Structure and setup explanation",
        "File delivery and usage guide",
      ],
    },
    note: {
      id: "Produk ini ditujukan sebagai referensi pembelajaran dan pengembangan, bukan sistem siap produksi tanpa penyesuaian.",
      en: "This product is intended for learning and development reference, not as a production-ready system without adjustment.",
    },
    accent: "lime",
  },
  {
    slug: "landing-page-package",
    title: {
      id: "Landing Page Package",
      en: "Landing Page Package",
    },
    description: {
      id: "Paket pembuatan landing page modern, cepat, responsif, dan siap dipakai untuk promosi produk, jasa, brand, atau personal profile.",
      en: "A modern, fast, responsive landing page package for promoting products, services, brands, or personal profiles.",
    },
    route: ROUTES.products.landingPagePackage,
    deliverables: {
      id: [
        "Responsive landing page",
        "UI modern",
        "CTA section",
        "SEO dasar",
        "Fast loading",
        "Integrasi kontak",
        "Build siap deploy",
      ],
      en: [
        "Responsive landing page",
        "Modern UI",
        "CTA section",
        "Basic SEO",
        "Fast loading",
        "Contact integration",
        "Deployment-ready build",
      ],
    },
    targetUsers: {
      id: ["UMKM", "Personal brand", "Produk digital", "Event", "Jasa profesional"],
      en: ["Small businesses", "Personal brands", "Digital products", "Events", "Professional services"],
    },
    process: {
      id: [
        "Diskusi kebutuhan dan tujuan halaman",
        "Penyusunan struktur konten",
        "Pembuatan tampilan frontend",
        "Revisi dan persiapan deploy",
      ],
      en: [
        "Discussion of page needs and goals",
        "Content structure planning",
        "Frontend interface development",
        "Revision and deployment preparation",
      ],
    },
    note: {
      id: "Paket ini fokus pada halaman promosi yang jelas, cepat, dan mudah digunakan.",
      en: "This package focuses on a clear, fast, and usable promotional page.",
    },
    accent: "orange",
  },
  {
    slug: "frontend-company-profile",
    title: {
      id: "Frontend / Company Profile Service",
      en: "Frontend / Company Profile Service",
    },
    description: {
      id: "Jasa pembuatan frontend website atau company profile modern untuk organisasi, personal brand, UMKM, komunitas, atau bisnis.",
      en: "Frontend website or company profile development service for organizations, personal brands, small businesses, communities, or companies.",
    },
    route: ROUTES.products.frontendCompanyProfile,
    deliverables: {
      id: [
        "Homepage",
        "Section tentang/profil",
        "Section layanan",
        "Portfolio/gallery section",
        "Contact section",
        "Responsive UI",
        "SEO dasar",
        "Project siap deploy",
      ],
      en: [
        "Homepage",
        "About/profile section",
        "Services section",
        "Portfolio/gallery section",
        "Contact section",
        "Responsive UI",
        "Basic SEO",
        "Deployment-ready project",
      ],
    },
    targetUsers: {
      id: ["Organisasi", "Yayasan", "Komunitas", "Bisnis", "Personal portfolio"],
      en: ["Organizations", "Foundations", "Communities", "Businesses", "Personal portfolios"],
    },
    process: {
      id: [
        "Diskusi kebutuhan website",
        "Penyusunan struktur halaman",
        "Pengembangan frontend",
        "Revisi, testing, dan deploy",
      ],
      en: [
        "Website needs discussion",
        "Page structure planning",
        "Frontend development",
        "Revision, testing, and deployment",
      ],
    },
    note: {
      id: "Layanan ini cocok untuk kebutuhan website profil yang ingin tampil rapi, modern, dan mudah diakses.",
      en: "This service is suitable for profile websites that need to look clean, modern, and easy to access.",
    },
    accent: "blue",
  },
];
