import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { BrowserMockup } from "../components/common/BrowserMockup";
import { Container } from "../components/common/Container";
import { SectionHeader } from "../components/common/SectionHeader";
import { Badge } from "../components/ui/Badge";
import { buttonVariants } from "../components/ui/buttonVariants";
import { Card } from "../components/ui/Card";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { homepageCopy } from "../data/homepageCopy.data";
import { projects } from "../data/projects.data";
import { PROJECT_SCREENSHOTS } from "../data/assets.data";
import { useLanguage } from "../hooks/useLanguage";
import { getList } from "../utils/getList";
import { getText } from "../utils/getText";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const featuredCopy = homepageCopy.featured;

export function FeaturedProjectSection() {
  const { language } = useLanguage();
  const project = projects.find((item) => item.slug === "dpf-wakaf") ?? projects[0];
  const features = getList(project.features, language).slice(0, 4);
  const mockupRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 1024;
    if (prefersReducedMotion || isMobile || !mockupRef.current) return;

    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.fromTo(
        mockupRef.current,
        { y: 30 },
        {
          y: -20,
          ease: "none",
          scrollTrigger: {
            trigger: mockupRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
          },
        }
      );
    }, mockupRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="featured" className="section-padding">
      <Container>
        <AnimatedSection>
          <SectionHeader
            eyebrow={getText(featuredCopy.eyebrow, language)}
            title={getText(featuredCopy.title, language)}
            description={getText(featuredCopy.description, language)}
          />
        </AnimatedSection>

        <div className="grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <AnimatedSection>
            <Card accent="blue" className="h-full">
              <div className="mb-5 flex flex-wrap gap-2">
                <Badge variant="status">{project.status}</Badge>
                <Badge variant="role">{project.role}</Badge>
              </div>
              <h3 className="text-balance-custom text-4xl font-extrabold leading-tight sm:text-5xl">{project.title}</h3>
              <p className="mt-3 text-lg font-extrabold text-[var(--primary)]">
                {getText(project.subtitle, language)}
              </p>
              <p className="mt-5 font-semibold leading-7 text-[var(--foreground)]/80">
                {getText(project.description, language)}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="tech">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {features.map((feature, index) => (
                  <div
                    key={feature}
                    className="rounded-2xl border-[3px] border-[var(--border)] bg-[var(--background)] p-4 text-sm font-extrabold shadow-[4px_4px_0_var(--border)]"
                  >
                    <span className="mr-2 text-[var(--orange)]">0{index + 1}</span>
                    {feature}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link className={buttonVariants("primary", "md")} to={project.route}>
                  {getText(featuredCopy.detailCta, language)} <ArrowUpRight size={18} strokeWidth={3} />
                </Link>
                <Link className={buttonVariants("outline", "md")} to="/#case-study">
                  {getText(featuredCopy.caseStudyCta, language)} <ArrowRight size={18} strokeWidth={3} />
                </Link>
              </div>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.08} className="h-full">
            <div ref={mockupRef} className="h-full motion-safe-transform">
              <BrowserMockup
                language={language}
                label={featuredCopy.screenshotPlaceholder}
                blocks={featuredCopy.mockupBlocks[language]}
                screenshot={PROJECT_SCREENSHOTS.dpfWakaf[0]}
                priority
              />
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
