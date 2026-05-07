import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";
import { PageTransition } from "../components/common/PageTransition";
import { useLenis } from "../hooks/useLenis";

export function MainLayout() {
  const location = useLocation();

  useLenis();

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const targetId = location.hash.replace("#", "");
    window.setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
  }, [location.hash]);

  return (
    <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-hidden">
      {/* Background Atmosphere Layers */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-radial-accent" />
      <div className="fixed inset-0 pointer-events-none z-0 bg-brutal-grid" />

      {/* Skip to Content for Accessibility */}
      <a
        href="#main-content"
        className="absolute -top-16 left-4 z-[100] rounded-xl border-[3px] border-[var(--border)] bg-[var(--lime)] px-4 py-2 font-heading font-extrabold text-[#111111] shadow-[4px_4px_0_var(--border)] transition focus-brutal focus-visible:top-4"
      >
        Skip to content
      </a>

      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <main id="main-content" className="flex-1 pt-28 sm:pt-36">
          <PageTransition keyId={location.pathname}>
            <Outlet />
          </PageTransition>
        </main>
        <Footer />
      </div>
    </div>
  );
}
