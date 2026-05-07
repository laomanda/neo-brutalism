import { SITE_CONFIG } from "../constants/site";
import type { BilingualText } from "../types/common.types";

export type SocialLink = {
  label: string;
  href: string;
  icon: string;
  type: "email" | "phone" | "social";
  external: boolean;
  displayText: BilingualText;
};

export const socialLinks: SocialLink[] = [
  {
    label: "Email",
    href: `mailto:${SITE_CONFIG.email}`,
    icon: "lucide:mail",
    type: "email",
    external: false,
    displayText: {
      id: SITE_CONFIG.email,
      en: SITE_CONFIG.email,
    },
  },
  {
    label: "WhatsApp",
    href: SITE_CONFIG.whatsapp,
    icon: "simple-icons:whatsapp",
    type: "phone",
    external: true,
    displayText: {
      id: "Chat langsung",
      en: "Direct chat",
    },
  },
  {
    label: "GitHub",
    href: SITE_CONFIG.github,
    icon: "simple-icons:github",
    type: "social",
    external: true,
    displayText: {
      id: "Repository project",
      en: "Project repositories",
    },
  },
  {
    label: "LinkedIn",
    href: SITE_CONFIG.linkedin,
    icon: "simple-icons:linkedin",
    type: "social",
    external: true,
    displayText: {
      id: "Profil profesional",
      en: "Professional profile",
    },
  },
  {
    label: "Instagram",
    href: SITE_CONFIG.instagram,
    icon: "simple-icons:instagram",
    type: "social",
    external: true,
    displayText: {
      id: "Sosial media",
      en: "Social media",
    },
  },
];
