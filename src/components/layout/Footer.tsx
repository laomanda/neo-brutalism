import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { SITE_CONFIG } from "../../constants/site";
import { navigationItems } from "../../data/navigation.data";
import { socialLinks } from "../../data/socialLinks.data";
import { uiCopy } from "../../data/uiCopy.data";
import { useLanguage } from "../../hooks/useLanguage";
import { cn } from "../../utils/cn";
import { getText } from "../../utils/getText";
import { Container } from "../common/Container";

const footerSocialLabels = new Set(["GitHub", "LinkedIn", "Instagram", "Email"]);
const footerQuickLinkHrefs = new Set(["/", "/#projects", "/#products", "/#contact"]);
const footerTech = ["React", "TypeScript", "Laravel", "Tailwind"];

const quickLinkConfig: Record<string, { icon: string; hoverClass: string; hoverText: string }> = {
  "/": {
    icon: "lucide:house",
    hoverClass: "hover:border-[var(--lime)] hover:bg-[var(--lime)]",
    hoverText: "group-hover:text-black",
  },
  "/#projects": {
    icon: "lucide:briefcase-business",
    hoverClass: "hover:border-[var(--primary)] hover:bg-[var(--primary)]",
    hoverText: "group-hover:text-white",
  },
  "/#products": {
    icon: "lucide:package",
    hoverClass: "hover:border-[var(--orange)] hover:bg-[var(--orange)]",
    hoverText: "group-hover:text-black",
  },
  "/#contact": {
    icon: "lucide:mail",
    hoverClass: "hover:border-[var(--purple)] hover:bg-[var(--purple)]",
    hoverText: "group-hover:text-white",
  },
};

function getSocialHoverClass(label: string) {
  switch (label) {
    case "GitHub":
      return "hover:border-[#06B6D4] hover:bg-[#06B6D4] hover:text-black";
    case "LinkedIn":
      return "hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white";
    case "Instagram":
      return "hover:border-transparent hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white";
    case "Email":
      return "hover:border-[var(--orange)] hover:bg-[var(--orange)] hover:text-black";
    default:
      return "hover:border-[var(--lime)] hover:bg-[var(--lime)] hover:text-black";
  }
}

export function Footer() {
  const { language } = useLanguage();
  const year = new Date().getFullYear();
  const footerSocials = socialLinks.filter((link) => footerSocialLabels.has(link.label));
  const quickLinks = navigationItems.filter((item) => footerQuickLinkHrefs.has(item.href));

  const copyDesc =
    language === "id"
      ? "Membangun website modern, rapi, dan interaktif. Berfokus pada keandalan frontend dengan pondasi fullstack untuk merealisasikan produk digital Anda."
      : "Building modern, clean, and interactive websites. Focused on frontend reliability with fullstack foundations to bring your digital products to life.";

  const copyAvail =
    language === "id"
      ? "Siap berkolaborasi untuk proyek mendatang."
      : "Available for new collaborative opportunities.";

  return (
    <footer className="mt-auto border-t-[3px] border-[var(--border)] bg-[var(--background)] py-8 text-[var(--foreground)] sm:py-10">
      <Container>
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-stretch lg:gap-8">
          <div className="rounded-3xl border-[3px] border-[var(--border)] bg-[var(--card)] p-6 text-[var(--foreground)] shadow-[6px_6px_0_var(--border)] sm:p-7 lg:p-8">
            <div className="mb-5 flex flex-wrap gap-2">
              <span className="rounded-full border-2 border-[var(--border)] bg-[var(--lime)] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-black shadow-[3px_3px_0_var(--border)] sm:text-xs">
                {getText(SITE_CONFIG.role, language)}
              </span>
              <span className="rounded-full border-2 border-[var(--border)] bg-[var(--background)] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--foreground)]/85 sm:text-xs">
                Jakarta
              </span>
            </div>

            <p className="max-w-2xl text-balance-custom font-heading text-3xl font-extrabold uppercase leading-[1.08] sm:text-4xl lg:text-5xl">
              {SITE_CONFIG.ownerName}
            </p>
            <p className="mt-4 max-w-xl text-sm font-bold leading-6 text-[var(--foreground)]/80 sm:text-base">
              {copyDesc}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {footerTech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border-2 border-[var(--border)] bg-[var(--background)] px-3 py-1 text-xs font-extrabold text-[var(--foreground)]/85"
                >
                  {item}
                </span>
              ))}
            </div>

            <p className="mt-5 text-sm font-extrabold text-[var(--foreground)]/65">{copyAvail}</p>
          </div>

          <div className="flex flex-col gap-5 sm:flex-row lg:w-[420px] lg:flex-col">
            <div className="flex-1 rounded-3xl border-[3px] border-[var(--border)] bg-[var(--card)] p-5 shadow-[6px_6px_0_var(--border)] sm:p-6">
              <nav aria-label={getText(uiCopy.navigation, language)}>
                <p className="mb-4 font-mono text-xs font-extrabold uppercase tracking-widest text-[var(--foreground)]/65">
                  {getText(uiCopy.navigation, language)}
                </p>
                <div className="flex flex-col gap-2">
                  {quickLinks.map((item) => {
                    const config = quickLinkConfig[item.href];

                    return (
                      <Link
                        key={item.href}
                        className={cn(
                          "group flex w-full items-center justify-between rounded-xl border-2 border-[var(--border)] bg-[var(--background)] px-4 py-3 font-extrabold text-[var(--foreground)] transition-all duration-300 focus-brutal",
                          config?.hoverClass,
                        )}
                        to={item.href}
                      >
                        <span className="flex items-center gap-3">
                          {config?.icon ? (
                            <Icon
                              icon={config.icon}
                              className={cn(
                                "h-4 w-4 transition-all duration-300 group-hover:rotate-3 group-hover:scale-110",
                                config.hoverText,
                              )}
                              aria-hidden="true"
                            />
                          ) : null}
                          <span
                            className={cn(
                              "transition-all duration-300 group-hover:translate-x-1",
                              config?.hoverText,
                            )}
                          >
                            {getText(item.label, language)}
                          </span>
                        </span>
                        <Icon
                          icon="lucide:arrow-right"
                          className={cn(
                            "h-4 w-4 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100",
                            config?.hoverText,
                          )}
                          aria-hidden="true"
                        />
                      </Link>
                    );
                  })}
                </div>
              </nav>
            </div>

            <div className="rounded-3xl border-[3px] border-[var(--border)] bg-[var(--card)] p-5 text-[var(--foreground)] shadow-[6px_6px_0_var(--border)] sm:p-6">
              <p className="mb-4 font-mono text-xs font-extrabold uppercase tracking-widest text-[var(--foreground)]/65">
                {getText(uiCopy.connect, language)}
              </p>
              <div className="grid grid-cols-4 gap-2 sm:flex sm:flex-wrap">
                {footerSocials.map((link) => {
                  const hoverTextClass =
                    link.label === "GitHub" || link.label === "Email"
                      ? "group-hover:text-black"
                      : "group-hover:text-white";

                  return (
                    <a
                      key={link.label}
                      aria-label={link.label}
                      className={cn(
                        "group flex aspect-square flex-1 items-center justify-center rounded-xl border-2 border-[var(--border)] bg-[var(--background)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_0_var(--border)] focus-brutal sm:h-12 sm:w-12 sm:flex-none",
                        getSocialHoverClass(link.label),
                      )}
                      href={link.href}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      target={link.external ? "_blank" : undefined}
                    >
                      <Icon
                        icon={link.icon}
                        className={cn(
                          "h-5 w-5 transition-all duration-300 group-hover:scale-110",
                          hoverTextClass,
                        )}
                        aria-hidden="true"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 rounded-2xl border-2 border-[var(--border)] bg-[var(--card)] px-4 py-3 text-xs font-bold text-[var(--foreground)]/70 sm:flex-row sm:items-center sm:justify-between">
          <p>(c) {year} {SITE_CONFIG.ownerName}. {getText(uiCopy.allRightsReserved, language)}</p>
          <p>Built with React + TypeScript</p>
        </div>
      </Container>
    </footer>
  );
}
