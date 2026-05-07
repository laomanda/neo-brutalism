import type { BilingualText } from "../types/common.types";

export type NavigationItem = {
  label: BilingualText;
  href: string;
};

export const navigationItems: NavigationItem[] = [
  {
    label: { id: "Home", en: "Home" },
    href: "/",
  },
  {
    label: { id: "Tentang", en: "About" },
    href: "/#about",
  },
  {
    label: { id: "Stack", en: "Stack" },
    href: "/#stack",
  },
  {
    label: { id: "Project", en: "Projects" },
    href: "/#projects",
  },
  {
    label: { id: "Produk/Jasa", en: "Products/Services" },
    href: "/#products",
  },
  {
    label: { id: "Kontak", en: "Contact" },
    href: "/#contact",
  },
];
