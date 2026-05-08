import { Icon } from "@iconify/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { navigationItems } from "../../data/navigation.data";
import { useLanguage } from "../../hooks/useLanguage";
import { cn } from "../../utils/cn";
import { getText } from "../../utils/getText";
import { LanguageToggle } from "../common/LanguageToggle";
import { ThemeToggle } from "../common/ThemeToggle";
import { uiCopy } from "../../data/uiCopy.data";

const navIcons: Record<string, string> = {
  "/": "lucide:house",
  "/#about": "lucide:user-round",
  "/#stack": "lucide:layers-3",
  "/#projects": "lucide:briefcase-business",
  "/#products": "lucide:package",
  "/#contact": "lucide:mail"
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 90);
  };

  const handleNavigate = (href: string) => {
    setIsOpen(false);

    if (href === "/") {
      navigate("/");
      window.setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 80);
      return;
    }

    if (href.startsWith("/#")) {
      const targetId = href.slice(2);
      if (location.pathname !== "/") {
        navigate(href);
        return;
      }

      navigate(href);
      scrollToSection(targetId);
    }
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/" && !location.hash;
    }
    return location.pathname === "/" && location.hash === href.replace("/", "");
  };

  return (
    <header 
      className={cn(
        "fixed left-1/2 z-50 w-[calc(100%-1.5rem)] max-w-[1180px] -translate-x-1/2 transition-all duration-300",
        scrolled ? "top-2 sm:top-3 sm:w-[calc(100%-3rem)]" : "top-4 sm:top-5 sm:w-[calc(100%-2rem)]"
      )}
    >
      {/* Desktop & Mobile Main Bar */}
      <nav 
        className={cn(
          "relative flex items-center justify-between rounded-full border-[3px] border-[var(--border)] bg-[var(--card)]/95 backdrop-blur-xl transition-all duration-300",
          scrolled ? "p-1.5 [box-shadow:var(--nav-shadow),4px_4px_0_var(--border)]" : "p-2 [box-shadow:var(--nav-shadow),6px_6px_0_var(--border)]"
        )}
      >
        
        <button
          aria-label="Home"
          className="group flex items-center gap-2.5 rounded-full pr-2 focus-brutal sm:gap-3 sm:pr-3"
          type="button"
          onClick={() => handleNavigate("/")}
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl border-[3px] border-[var(--border)] bg-[var(--lime)] font-heading text-base font-black text-[#111111] transition-transform duration-200 group-hover:-rotate-3 group-hover:scale-105 shadow-[2px_2px_0_var(--border)] sm:h-11 sm:w-11 sm:text-lg">
            JP
          </span>
          <div className="flex flex-col items-start leading-none">
            <span className="font-heading text-sm font-extrabold tracking-tight transition-colors group-hover:text-[var(--primary)] sm:text-base">Jakkob.dev</span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-1.5 lg:flex">
          {navigationItems.map((item) => {
            const active = isActive(item.href);
            const icon = navIcons[item.href];
            return (
              <button
                key={item.href}
                className={cn(
                  "group relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-extrabold transition-all duration-200 focus-brutal",
                  active
                    ? "bg-[var(--foreground)] text-[var(--background)] shadow-[2px_2px_0_var(--border)]"
                    : "text-[var(--foreground)]/88 hover:-translate-y-0.5 hover:bg-[var(--card-2)] hover:text-[var(--foreground)]"
                )}
                type="button"
                onClick={() => handleNavigate(item.href)}
              >
                {icon && (
                  <Icon 
                    icon={icon} 
                    className={cn("h-4 w-4 transition-all duration-200", active ? "opacity-100" : "opacity-75 group-hover:scale-110 group-hover:opacity-100")}
                  />
                )}
                <span>{getText(item.label, language)}</span>
              </button>
            );
          })}
        </div>

        {/* Desktop Right Controls */}
        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex items-center gap-1 rounded-full border-2 border-[var(--border)] bg-[var(--card-2)]/90 p-1 [box-shadow:inset_0_1px_0_rgba(255,255,255,0.08),2px_2px_0_var(--border)] transition-transform duration-200 hover:-translate-y-0.5">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <button
          aria-expanded={isOpen}
          aria-label="Toggle menu"
          className="ml-auto grid h-11 w-11 place-items-center rounded-full border-2 border-[var(--border)] bg-[var(--card-2)] transition-transform focus-brutal active:scale-95 lg:hidden"
          type="button"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={20} strokeWidth={3} /> : <Menu size={20} strokeWidth={3} />}
        </button>
      </nav>

      {/* Mobile Menu Panel */}
      <div
        className={cn(
          "absolute left-0 right-0 top-[calc(100%+0.75rem)] origin-top overflow-hidden transition-all duration-300 lg:hidden",
          isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
        )}
      >
        <div className="brutal-panel flex flex-col gap-2 p-3 shadow-[6px_6px_0_var(--border)]">
          <div className="flex items-center gap-2 rounded-xl border-2 border-[var(--border)] bg-[var(--lime)] px-3 py-2">
             <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full border border-black bg-white"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-widest text-black">
              {getText(uiCopy.availableForWork, language)}
            </span>
          </div>

          <div className="flex flex-col gap-1.5">
            {navigationItems.map((item) => {
              const active = isActive(item.href);
              const icon = navIcons[item.href];
              return (
                <button
                  key={item.href}
                  className={cn(
                    "group flex w-full items-center gap-3 rounded-xl border-2 border-[var(--border)] px-4 py-3 text-left text-sm font-extrabold transition-transform duration-200 focus-brutal active:scale-[0.98]",
                    active
                      ? "bg-[var(--primary)] text-white shadow-[2px_2px_0_var(--border)]"
                      : "bg-[var(--card-2)] text-[var(--foreground)]/88 hover:-translate-y-0.5 hover:bg-[var(--background)] hover:text-[var(--foreground)]"
                  )}
                  type="button"
                  onClick={() => handleNavigate(item.href)}
                >
                  {icon && <Icon icon={icon} className={cn("h-4 w-4", active ? "opacity-100" : "opacity-75 group-hover:opacity-100")} />}
                  {getText(item.label, language)}
                </button>
              );
            })}
          </div>

          <div className="mt-2 flex items-center justify-between rounded-xl border-2 border-[var(--border)] bg-[var(--card-2)] p-2">
            <span className="px-2 font-mono text-[10px] font-extrabold uppercase tracking-widest text-[var(--muted)]">
              {getText(uiCopy.systemConfig, language)}
            </span>
            <div className="flex gap-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
