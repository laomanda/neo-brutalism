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

export function FeaturedProjectSection() {
  const { language } = useLanguage();
  const project = projects.find((item) => item.slug === "dpf-wakaf") ?? projects[0];

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  
  // Lightweight parallax: mockup moves slightly opposite to scroll
  const yMockup = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={sectionRef} id="featured" className="relative overflow-hidden bg-[var(--background)] py-32 lg:py-48">
      {/* Subtle Background Structure */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]">
        <div className="absolute left-1/2 h-full w-px bg-[var(--border)]" />
        <div className="absolute top-1/2 w-full h-px bg-[var(--border)]" />
      </div>

      <Container>
        {/* Highly Structured 2-Column Editorial Layout */}
        <div className="grid items-center gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          
          {/* LEFT: Structured Typography & Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:pr-8"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-2 w-2 rounded-full bg-[var(--orange)] animate-pulse" />
              <span className="font-mono text-xs font-black uppercase tracking-[0.2em] text-[var(--foreground)]/50">
                {getText(featuredCopy.eyebrow, language)}
              </span>
            </div>

            <h2 className="font-heading text-[clamp(4rem,8vw,7rem)] font-black uppercase leading-[0.85] tracking-tighter text-[var(--foreground)]">
              {project.title}
            </h2>

            <div className="my-10 h-[2px] w-16 bg-[var(--border)]" />

            <p className="text-xl font-medium leading-relaxed text-[var(--foreground)]/70 lg:text-2xl">
              {language === "id" 
                ? "Platform donasi dan wakaf modern dengan sistem arsitektur digital yang bersih dan performa tinggi."
                : "Modern donation and waqf platform with clean digital architecture and high-performance engineering."
              }
            </p>

            <div className="mt-12">
              <div className="mb-4 font-mono text-[10px] font-black uppercase tracking-[0.2em] text-[var(--foreground)]/40">
                Core Stack //
              </div>
              <div className="flex flex-nowrap gap-3 overflow-x-auto pb-4 pt-1 px-1 -mx-1 no-scrollbar [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {[
                  { name: "React", color: "#93C5FD" },    // Harmonious Blue
                  { name: "Laravel", color: "#FDA4AF" },  // Harmonious Rose/Red
                  { name: "MySQL", color: "#FDE047" },    // Harmonious Yellow
                  { name: "Tailwind", color: "#86EFAC" }  // Harmonious Green
                ].map(tech => (
                  <div 
                    key={tech.name} 
                    className="flex shrink-0 cursor-default items-center gap-2 rounded-full border-2 border-[var(--border)] px-4 py-2 shadow-[2px_2px_0_var(--border)] transition-all duration-200 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[4px_4px_0_var(--border)]"
                    style={{ 
                      backgroundColor: tech.color,
                      color: '#09090b'
                    }}
                  >
                    <span className="text-xs font-black uppercase tracking-wider">{tech.name}</span>
                  </div>
                ))}
                {/* Spacer to prevent expanded hover shadow cutoff */}
                <div className="w-2 shrink-0" />
              </div>
            </div>

            <div className="mt-16">
              <Link 
                className={buttonVariants("primary", "lg")} 
                to={project.route}
                style={{ height: '64px', padding: '0 40px', fontSize: '1.1rem' }}
              >
                {getText(featuredCopy.detailCta, language)} <ArrowUpRight className="ml-3" size={24} strokeWidth={4} />
              </Link>
            </div>
          </motion.div>

          {/* RIGHT: Dominant Visual Showcase */}
          <motion.div 
            style={{ y: yMockup }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            className="relative"
          >
            {/* The Realistic Physical Shadow (Solid Block instead of CSS box-shadow) */}
            <div className="absolute inset-0 translate-x-4 translate-y-4 lg:translate-x-8 lg:translate-y-8 rounded-[1.5rem] bg-[var(--border)] transition-transform duration-500" />
            
            {/* The Mockup stands completely clean on its own */}
            <div className="relative z-10">
                <BrowserMockup
                  language={language}
                  label={featuredCopy.screenshotPlaceholder}
                  blocks={featuredCopy.mockupBlocks[language]}
                  icons={[Heart, LayoutDashboard, FileText, ClipboardList]}
                  screenshot={PROJECT_SCREENSHOTS.dpfWakaf[0]}
                  priority
                  className="shadow-none"
                />
            </div>
            
            {/* Minimal Decorative Crosshairs */}
            <div className="absolute -left-4 -top-4 h-8 w-8 border-l-2 border-t-2 border-[var(--border)]/20 z-20" />
            <div className="absolute -bottom-4 -right-4 h-8 w-8 border-b-2 border-r-2 border-[var(--border)]/20 z-0 lg:bottom-4 lg:right-4" />
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
