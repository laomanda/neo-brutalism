// Images
import profileImage from "../assets/images/profile.webp";
import aboutImage from "../assets/images/about.webp";
import workspaceImage from "../assets/images/workspace.webp";

// DPF WAKAF screenshots
import dpfLandingPage from "../assets/screenshots/dpf-wakaf/landing-page.webp";
import dpfAuth from "../assets/screenshots/dpf-wakaf/auth.webp";
import dpfAdminRole from "../assets/screenshots/dpf-wakaf/admin-role.webp";
import dpfEditorRole from "../assets/screenshots/dpf-wakaf/editor-role.webp";
import dpfMidtransPayment from "../assets/screenshots/dpf-wakaf/midtrans-payment.webp";
import dpfSuperAdminRole from "../assets/screenshots/dpf-wakaf/super-admin_role.webp";

// DoneTea screenshots
import doneteaLandingPage from "../assets/screenshots/donetea/landing-page.webp";
import doneteaAuth from "../assets/screenshots/donetea/auth.webp";
import doneteaAdminRole from "../assets/screenshots/donetea/admin_role.webp";
import doneteaKantinRole from "../assets/screenshots/donetea/kantin-role.webp";
import doneteaCart from "../assets/screenshots/donetea/cart.webp";
import doneteaDetailMenu from "../assets/screenshots/donetea/detail-menu.webp";

// Laundry screenshots
import laundryAuth from "../assets/screenshots/laundry/auth.webp";
import laundryAdminRole from "../assets/screenshots/laundry/admin-role.webp";
import laundryKasirRole from "../assets/screenshots/laundry/kasir-role.webp";
import laundryOwnerRole from "../assets/screenshots/laundry/owner-role.webp";

export const IMAGE_ASSETS = {
  profile: {
    src: profileImage,
    status: "ready",
    alt: {
      id: "Foto profil Jakkob Panjaitan",
      en: "Profile photo of Jakkob Panjaitan",
    },
  },
  about: {
    src: aboutImage,
    status: "ready",
    alt: {
      id: "Foto Jakkob Panjaitan di ruang kerja",
      en: "Jakkob Panjaitan workspace portrait",
    },
  },
  workspace: {
    src: workspaceImage,
    status: "ready",
    alt: {
      id: "Workspace developer untuk portfolio Jakkob Panjaitan",
      en: "Developer workspace for Jakkob Panjaitan portfolio",
    },
  },
} as const;

export const STATIC_ASSETS = {
  cv: {
    src: "/documents/cv-jakkob.pdf",
    status: "ready",
    alt: {
      id: "CV Jakkob Panjaitan",
      en: "Jakkob Panjaitan CV",
    },
  },
  favicon: {
    src: "/icons/favicon.svg",
    status: "ready",
    alt: {
      id: "Favicon JP",
      en: "JP favicon",
    },
  },
  ogImage: {
    src: "/og/jakkob-og.png",
    status: "ready",
    alt: {
      id: "Open Graph image portfolio Jakkob Panjaitan",
      en: "Open Graph image for Jakkob Panjaitan portfolio",
    },
  },
} as const;

export const PROJECT_SCREENSHOTS = {
  dpfWakaf: [
    {
      src: dpfLandingPage,
      status: "ready",
      label: {
        id: "DPF WAKAF",
        en: "DPF WAKAF",
      },
      alt: {
        id: "Screenshot landing page DPF WAKAF",
        en: "Screenshot of DPF WAKAF landing page",
      },
    },
    {
      src: dpfAuth,
      status: "ready",
      label: {
        id: "Halaman autentikasi DPF WAKAF",
        en: "DPF WAKAF authentication page",
      },
      alt: {
        id: "Screenshot halaman autentikasi DPF WAKAF",
        en: "Screenshot of DPF WAKAF authentication page",
      },
    },
    {
      src: dpfAdminRole,
      status: "ready",
      label: {
        id: "Dashboard role admin DPF WAKAF",
        en: "DPF WAKAF admin role dashboard",
      },
      alt: {
        id: "Screenshot dashboard admin DPF WAKAF",
        en: "Screenshot of DPF WAKAF admin dashboard",
      },
    },
    {
      src: dpfEditorRole,
      status: "ready",
      label: {
        id: "Dashboard role editor DPF WAKAF",
        en: "DPF WAKAF editor role dashboard",
      },
      alt: {
        id: "Screenshot dashboard editor DPF WAKAF",
        en: "Screenshot of DPF WAKAF editor dashboard",
      },
    },
    {
      src: dpfMidtransPayment,
      status: "ready",
      label: {
        id: "Integrasi pembayaran Midtrans",
        en: "Midtrans payment integration",
      },
      alt: {
        id: "Screenshot pembayaran Midtrans DPF WAKAF",
        en: "Screenshot of DPF WAKAF Midtrans payment",
      },
    },
    {
      src: dpfSuperAdminRole,
      status: "ready",
      label: {
        id: "Dashboard super admin DPF WAKAF",
        en: "DPF WAKAF super admin dashboard",
      },
      alt: {
        id: "Screenshot dashboard super admin DPF WAKAF",
        en: "Screenshot of DPF WAKAF super admin dashboard",
      },
    },
  ],
  donetea: [
    {
      src: doneteaLandingPage,
      status: "ready",
      label: {
        id: "Landing page DoneTea",
        en: "DoneTea landing page",
      },
      alt: {
        id: "Screenshot landing page DoneTea",
        en: "Screenshot of DoneTea landing page",
      },
    },
    {
      src: doneteaAuth,
      status: "ready",
      label: {
        id: "Halaman autentikasi DoneTea",
        en: "DoneTea authentication page",
      },
      alt: {
        id: "Screenshot halaman autentikasi DoneTea",
        en: "Screenshot of DoneTea authentication page",
      },
    },
    {
      src: doneteaAdminRole,
      status: "ready",
      label: {
        id: "Dashboard admin DoneTea",
        en: "DoneTea admin dashboard",
      },
      alt: {
        id: "Screenshot dashboard admin DoneTea",
        en: "Screenshot of DoneTea admin dashboard",
      },
    },
    {
      src: doneteaKantinRole,
      status: "ready",
      label: {
        id: "Tampilan role kantin DoneTea",
        en: "DoneTea canteen role view",
      },
      alt: {
        id: "Screenshot role kantin DoneTea",
        en: "Screenshot of DoneTea canteen role view",
      },
    },
    {
      src: doneteaCart,
      status: "ready",
      label: {
        id: "Keranjang pemesanan DoneTea",
        en: "DoneTea cart flow",
      },
      alt: {
        id: "Screenshot keranjang pemesanan DoneTea",
        en: "Screenshot of DoneTea cart flow",
      },
    },
    {
      src: doneteaDetailMenu,
      status: "ready",
      label: {
        id: "Detail menu DoneTea",
        en: "DoneTea menu detail",
      },
      alt: {
        id: "Screenshot detail menu DoneTea",
        en: "Screenshot of DoneTea menu detail",
      },
    },
  ],
  laundry: [
    {
      src: laundryAuth,
      status: "ready",
      label: {
        id: "Laundry Application",
        en: "Laundry Application",
      },
      alt: {
        id: "Screenshot halaman autentikasi Laundry",
        en: "Screenshot of Laundry authentication page",
      },
    },
    {
      src: laundryAdminRole,
      status: "ready",
      label: {
        id: "Dashboard admin Laundry",
        en: "Laundry admin dashboard",
      },
      alt: {
        id: "Screenshot dashboard admin Laundry",
        en: "Screenshot of Laundry admin dashboard",
      },
    },
    {
      src: laundryKasirRole,
      status: "ready",
      label: {
        id: "Dashboard kasir Laundry",
        en: "Laundry cashier dashboard",
      },
      alt: {
        id: "Screenshot dashboard kasir Laundry",
        en: "Screenshot of Laundry cashier dashboard",
      },
    },
    {
      src: laundryOwnerRole,
      status: "ready",
      label: {
        id: "Dashboard owner Laundry",
        en: "Laundry owner dashboard",
      },
      alt: {
        id: "Screenshot dashboard owner Laundry",
        en: "Screenshot of Laundry owner dashboard",
      },
    },
  ],
} as const;
