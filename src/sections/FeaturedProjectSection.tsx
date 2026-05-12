import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Heart, LayoutDashboard, FileText, ClipboardList } from "lucide-react";
import { BrowserMockup } from "../components/common/BrowserMockup";
import { Container } from "../components/common/Container";
import { buttonVariants } from "../components/ui/buttonVariants";
import { homepageCopy } from "../data/homepageCopy.data";
import { projects } from "../data/projects.data";
import { PROJECT_SCREENSHOTS } from "../data/assets.data";
import { useLanguage } from "../hooks/useLanguage";
import { getText } from "../utils/getText";

const featuredCopy = homepageCopy.featured;

const techStack = [
  { name: "React",   color: "#93C5FD" },
  { name: "Laravel", color: "#FDA4AF" },
  { name: "MySQL",   color: "#FDE047" },
  { name: "Tailwind",color: "#86EFAC" },
];

export function FeaturedProjectSection() {
  const { language } = useLanguage();
  const project = projects.find((item) => item.slug === "dpf-wakaf") ?? projects[0];

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax only on large screens via CSS; value is safe-small for mobile too
  const yMockup = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section
      ref={sectionRef}
      id="featured"
      className="relative bg-[var(--background)] py-20 lg:py-40 overflow-x-hidden"
    >
      {/* Subtle crosshair background */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]">
        <div className="absolute left-1/2 h-full w-px bg-[var(--border)]" />
        <div className="absolute top-1/2 w-full h-px bg-[var(--border)]" />
      </div>

      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:items-center">

          {/* ── LEFT: Copy ────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-2 w-2 rounded-full bg-[var(--orange)] animate-pulse" />
              <span className="font-mono text-[11px] font-black uppercase tracking-[0.2em] text-[var(--foreground)]/50">
                {getText(featuredCopy.eyebrow, language)}
              </span>
            </div>

            {/* Title — responsive clamp agar tidak meluber di mobile */}
            <h2 className="font-heading text-[clamp(2.4rem,11vw,7rem)] font-black uppercase leading-[0.9] tracking-tighter text-[var(--foreground)]">
              {project.title}
            </h2>

            <div className="my-6 lg:my-8 h-[2px] w-12 bg-[var(--border)]" />

            <p className="text-base lg:text-xl font-medium leading-relaxed text-[var(--foreground)]/70">
              {language === "id"
                ? "Platform donasi dan wakaf modern dengan sistem arsitektur digital yang bersih dan performa tinggi."
                : "Modern donation and waqf platform with clean digital architecture and high-performance engineering."}
            </p>

            {/* Tech Stack — flex-wrap agar tidak meluber */}
            <div className="mt-8 lg:mt-10">
              <div className="mb-3 font-mono text-[10px] font-black uppercase tracking-[0.2em] text-[var(--foreground)]/40">
                Core Stack //
              </div>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex shrink-0 cursor-default items-center rounded-full border-2 border-[var(--border)] px-3 py-1.5 shadow-[2px_2px_0_var(--border)] transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[3px_3px_0_var(--border)]"
                    style={{ backgroundColor: tech.color, color: "#09090b" }}
                  >
                    <span className="text-xs font-black uppercase tracking-wider">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 lg:mt-14">
              <Link
                className={`${buttonVariants("primary", "lg")} w-full sm:w-auto justify-center`}
                to={project.route}
              >
                {getText(featuredCopy.detailCta, language)}
                <ArrowUpRight className="ml-2 shrink-0" size={22} strokeWidth={3.5} />
              </Link>
            </div>
          </motion.div>

          {/* ── RIGHT: Mockup ─────────────────────────────── */}
          {/* 
            Wrapper: pr + pb buat ruang solid-shadow supaya tidak meluber dari layar.
            Solid shadow dikurangi di mobile (translate-3) dan lebih besar di desktop (translate-8).
          */}
          <motion.div
            style={{ y: yMockup }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative pr-3 pb-3 lg:pr-8 lg:pb-8"
            data-cursor="view"
          >
            {/* Solid block shadow */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 lg:translate-x-8 lg:translate-y-8 rounded-[1.5rem] bg-[var(--border)]" />

            {/* Mockup card */}
            <div className="relative z-10">
              <BrowserMockup
                language={language}
                label={{ id: project.title, en: project.title }}
                blocks={featuredCopy.mockupBlocks[language]}
                icons={[Heart, LayoutDashboard, FileText, ClipboardList]}
                screenshot={
                  PROJECT_SCREENSHOTS[
                    project.screenshotsKey as keyof typeof PROJECT_SCREENSHOTS
                  ][0]
                }
                priority
                className="shadow-none"
              />
            </div>

            {/* Corner crosshairs — decorative */}
            <div className="hidden lg:block absolute -left-4 -top-4 h-8 w-8 border-l-2 border-t-2 border-[var(--border)]/20 z-20" />
            <div className="hidden lg:block absolute -bottom-4 -right-4 h-8 w-8 border-b-2 border-r-2 border-[var(--border)]/20 z-0" />
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
