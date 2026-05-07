import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { SITE_CONFIG } from "../../constants/site";
import { navigationItems } from "../../data/navigation.data";
import { socialLinks } from "../../data/socialLinks.data";
import { useLanguage } from "../../hooks/useLanguage";
import { getText } from "../../utils/getText";
import { cn } from "../../utils/cn";
import { Container } from "../common/Container";
import { uiCopy } from "../../data/uiCopy.data";

const footerSocialLabels = new Set(["GitHub", "LinkedIn", "Instagram", "Email"]);
const footerQuickLinkHrefs = new Set(["/", "/#projects", "/#products", "/#contact"]);

const quickLinkConfig: Record<string, { icon: string; hoverClass: string; hoverText: string }> = {
  "/": { icon: "lucide:house", hoverClass: "hover:bg-[var(--lime)] hover:border-[var(--lime)]", hoverText: "group-hover:text-black" },
  "/#projects": { icon: "lucide:briefcase-business", hoverClass: "hover:bg-[var(--primary)] hover:border-[var(--primary)]", hoverText: "group-hover:text-white" },
  "/#products": { icon: "lucide:package", hoverClass: "hover:bg-[var(--orange)] hover:border-[var(--orange)]", hoverText: "group-hover:text-white" },
  "/#contact": { icon: "lucide:mail", hoverClass: "hover:bg-[var(--purple)] hover:border-[var(--purple)]", hoverText: "group-hover:text-white" },
};

const getSocialHoverClass = (label: string) => {
  switch (label) {
    case "GitHub":
      return "hover:bg-[#06B6D4] hover:text-black hover:border-[#06B6D4]";
    case "LinkedIn":
      return "hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]";
    case "Instagram":
      return "hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white hover:border-transparent";
    case "Email":
      return "hover:bg-[var(--orange)] hover:text-black hover:border-[var(--orange)]";
    default:
      return "hover:bg-[var(--lime)] hover:text-black";
  }
};

export function Footer() {
  const { language } = useLanguage();
  const year = new Date().getFullYear();
  const footerSocials = socialLinks.filter((link) => footerSocialLabels.has(link.label));
  const quickLinks = navigationItems.filter((item) => footerQuickLinkHrefs.has(item.href));

  const copyDesc = language === "id" 
    ? "Membangun website modern, rapi, dan interaktif. Berfokus pada keandalan frontend dengan pondasi fullstack untuk merealisasikan produk digital Anda."
    : "Building modern, clean, and interactive websites. Focused on frontend reliability with fullstack foundations to bring your digital products to life.";
  
  const copyAvail = language === "id"
    ? "Siap berkolaborasi untuk proyek mendatang."
    : "Available for new collaborative opportunities.";

  return (
    <footer className="mt-auto border-t-[3px] border-[var(--border)] bg-[var(--foreground)] py-8 text-[var(--background)] sm:py-12">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:gap-12 lg:items-stretch">
          
          {/* Left Brand Panel */}
          <div className="flex flex-col justify-between rounded-3xl border-[3px] border-[var(--background)] bg-[var(--background)] p-6 text-[var(--foreground)] sm:p-8 lg:p-10">
            <div>
              <div className="mb-6 flex flex-wrap gap-2">
                <span className="rounded-full border-2 border-[var(--border)] bg-[var(--lime)] px-3 py-1 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest shadow-[3px_3px_0_var(--border)]">
                  {getText(SITE_CONFIG.role, language)}
                </span>
              </div>
              <p className="max-w-2xl text-balance-custom font-heading text-4xl font-extrabold uppercase leading-[1.1] sm:text-5xl lg:text-6xl">
                {SITE_CONFIG.ownerName}
              </p>
              <p className="mt-5 max-w-md text-base font-bold leading-relaxed text-[var(--foreground)]/80 sm:mt-6 sm:text-lg">
                {copyDesc}
              </p>
            </div>
            
            <p className="mt-12 text-sm font-extrabold text-[var(--foreground)]/60">
              {copyAvail}
            </p>
          </div>

          {/* Right Navigation & Socials */}
          <div className="flex flex-col gap-6 sm:flex-row lg:w-[420px] lg:flex-col lg:gap-8">
            
            {/* Quick Links Card */}
            <div className="flex-1 rounded-3xl border-[3px] border-[var(--background)] bg-transparent p-6 sm:p-8">
              <nav aria-label="Quick Links">
                <p className="mb-4 font-mono text-xs font-extrabold uppercase tracking-widest text-[var(--background)]/70">
                  {getText(uiCopy.navigation, language)}
                </p>
                <div className="flex flex-col gap-2">
                  {quickLinks.map((item) => {
                    const config = quickLinkConfig[item.href];
                    return (
                      <Link
                        key={item.href}
                        className={cn(
                          "group flex w-full items-center justify-between rounded-xl border-2 border-[var(--background)] bg-[var(--foreground)] px-4 py-3 font-extrabold text-[var(--background)] transition-all duration-300 focus-brutal",
                          config?.hoverClass
                        )}
                        to={item.href}
                      >
                        <div className="flex items-center gap-3">
                          {config?.icon && (
                            <Icon 
                              icon={config.icon} 
                              className={cn(
                                "h-4 w-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3",
                                config.hoverText
                              )}
                            />
                          )}
                          <span className={cn(
                            "transition-all duration-300 group-hover:translate-x-1",
                            config.hoverText
                          )}>
                            {getText(item.label, language)}
                          </span>
                        </div>
                        <Icon 
                          icon="lucide:arrow-right" 
                          className={cn(
                            "h-4 w-4 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100",
                            config.hoverText
                          )}
                        />
                      </Link>
                    );
                  })}
                </div>
              </nav>
            </div>

            {/* Social Links Card */}
            <div className="rounded-3xl border-[3px] border-[var(--background)] bg-[var(--background)] p-6 text-[var(--foreground)] sm:p-8 lg:p-6">
              <p className="mb-4 font-mono text-xs font-extrabold uppercase tracking-widest text-[var(--foreground)]/70">
                {getText(uiCopy.connect, language)}
              </p>
              <div className="grid grid-cols-4 gap-2 sm:flex sm:flex-wrap">
                {footerSocials.map((link) => {
                  const hoverTextClass = (link.label === "GitHub" || link.label === "Email") 
                    ? "group-hover:text-black" 
                    : "group-hover:text-white";
                  
                  return (
                    <a
                      key={link.label}
                      aria-label={link.label}
                      className={cn(
                        "group flex aspect-square flex-1 items-center justify-center rounded-xl border-2 border-[var(--border)] bg-[var(--card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_0_var(--border)] focus-brutal sm:h-12 sm:w-12 sm:flex-none",
                        getSocialHoverClass(link.label)
                      )}
                      href={link.href}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      target={link.external ? "_blank" : undefined}
                    >
                      <Icon 
                        icon={link.icon} 
                        className={cn(
                          "h-5 w-5 transition-all duration-300 group-hover:scale-110",
                          hoverTextClass
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

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col gap-4 rounded-full border-2 border-[var(--background)]/20 px-6 py-4 text-sm font-bold text-[var(--background)]/70 sm:mt-12 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {SITE_CONFIG.ownerName}. {getText(uiCopy.allRightsReserved, language)}</p>
        </div>
      </Container>
    </footer>
  );
}
