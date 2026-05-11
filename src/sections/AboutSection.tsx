import {
  ArrowRight,
  Code2,
  MousePointerClick,
} from "lucide-react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, type MouseEventHandler, useEffect, useState } from "react";
import { Container } from "../components/common/Container";
import { ResponsiveImage } from "../components/common/ResponsiveImage";
import { IMAGE_ASSETS, PROJECT_SCREENSHOTS } from "../data/assets.data";
import { homepageCopy } from "../data/homepageCopy.data";
import { projects } from "../data/projects.data";
import { useLanguage } from "../hooks/useLanguage";
import { getText } from "../utils/getText";

const stackItems = ["React", "TypeScript", "Tailwind", "Framer Motion", "GSAP", "Laravel", "Next.js"];

export function AboutSection() {
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [carouselWidth, setCarouselWidth] = useState(0);

  // 3D & Interaction States
  const portraitX = useMotionValue(0);
  const portraitY = useMotionValue(0);
  const spotX = useMotionValue(50);
  const spotY = useMotionValue(50);

  // Smooth Scroll Parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothScroll = useSpring(scrollYProgress, { stiffness: 72, damping: 24, mass: 0.42 });
  const backgroundY = useTransform(smoothScroll, [0, 1], [50, -50]);

  // 3D Tilt Logic
  const smoothPortraitX = useSpring(portraitX, { stiffness: 130, damping: 20 });
  const smoothPortraitY = useSpring(portraitY, { stiffness: 130, damping: 20 });
  const portraitRotateY = useTransform(smoothPortraitX, [-0.5, 0.5], [-6, 6]);
  const portraitRotateX = useTransform(smoothPortraitY, [-0.5, 0.5], [6, -6]);

  const spotlightBackground = useMotionTemplate`radial-gradient(circle at ${spotX}% ${spotY}%, rgba(182, 255, 59, 0.15), transparent 40%)`;

  useEffect(() => {
    if (carouselRef.current) {
      setCarouselWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (event) => {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    portraitX.set((event.clientX - rect.left) / rect.width - 0.5);
    portraitY.set((event.clientY - rect.top) / rect.height - 0.5);
    spotX.set(((event.clientX - rect.left) / rect.width) * 100);
    spotY.set(((event.clientY - rect.top) / rect.height) * 100);
  };

  const handleMouseLeave = () => {
    portraitX.set(0);
    portraitY.set(0);
  };

  const aboutCopy = homepageCopy.about as any;

  return (
    <section ref={sectionRef} id="about" className="section-padding relative overflow-hidden">
      {/* Subtle Background Text */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-20 z-0 -translate-x-1/2 whitespace-nowrap font-heading text-[12vw] font-black uppercase leading-none text-[var(--border)] opacity-[0.03]"
        style={reduceMotion ? undefined : { y: backgroundY }}
      >
        ENGINEERED
      </motion.div>

      <Container>
        {/* Main Bento Layout: 3 Cards Only */}
        <div className="relative z-10 grid gap-6 lg:grid-cols-3 lg:grid-rows-[auto_auto]">
          
          {/* Card 1: The Statement (Takes up 2 columns) */}
          <motion.div
            className="group relative overflow-hidden rounded-[2rem] border-[3px] border-[var(--border)] bg-[var(--card)] p-8 shadow-[8px_8px_0_var(--border)] lg:col-span-2"
            onMouseMove={handleMouseMove}
          >
            <motion.div className="pointer-events-none absolute inset-0" style={{ background: spotlightBackground }} />
            
            <div className="relative z-10 flex h-full flex-col justify-between gap-12">
              <div>
                <h2 className="max-w-[15ch] font-heading text-[clamp(2.5rem,6vw,5.5rem)] font-black uppercase leading-[0.9] text-[var(--foreground)]">
                  {getText(aboutCopy.bentoTitle, language)}
                </h2>
                <p className="mt-6 max-w-lg text-lg font-bold leading-relaxed text-[var(--foreground)]/70">
                  {getText(aboutCopy.bentoDescription, language)}
                </p>
              </div>

              {/* Clean Stack Marquee inside the Statement Box */}
              <div className="w-full overflow-hidden rounded-xl border-2 border-[var(--border)] bg-[var(--foreground)] py-4 text-[var(--background)]">
                <motion.div
                  className="flex w-max gap-6 px-4"
                  animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
                  transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                >
                  {[...stackItems, ...stackItems].map((item, index) => (
                    <div key={`${item}-${index}`} className="flex items-center gap-3">
                      <Code2 size={16} className="text-[var(--lime)]" />
                      <span className="font-mono text-sm font-black uppercase tracking-widest">{item}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: 3D Cinematic Workspace (1 column) */}
          <motion.div
            className="relative overflow-hidden rounded-[2rem] border-[3px] border-[var(--border)] bg-[var(--card-2)] shadow-[8px_8px_0_var(--border)] [transform-style:preserve-3d]"
            style={reduceMotion ? undefined : { rotateX: portraitRotateX, rotateY: portraitRotateY }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <ResponsiveImage
              asset={IMAGE_ASSETS.workspace}
              language={language}
              fallbackLabel="WORKSPACE"
              className="h-full min-h-[400px] w-full"
              imgClassName="object-cover object-center grayscale transition-all duration-700 hover:grayscale-0 hover:scale-105"
            />
            {/* Minimalist Overlay Label */}
            <div className="absolute bottom-6 left-6 rounded-full border-2 border-[var(--border)] bg-[var(--lime)] px-4 py-2 font-mono text-xs font-black uppercase text-[#111111] shadow-[4px_4px_0_var(--border)]">
              Live Workspace
            </div>
          </motion.div>

          {/* Card 3: Interactive Project Strip (Spans full width) */}
          <div className="overflow-hidden rounded-[2rem] border-[3px] border-[var(--border)] bg-[var(--foreground)] p-6 shadow-[8px_8px_0_var(--border)] lg:col-span-3 lg:p-10">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b-2 border-[var(--border)]/30 pb-6">
              <h3 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-black uppercase leading-none text-[var(--background)]">
                Shipped Realities
              </h3>
              <div className="flex items-center gap-2 text-[var(--lime)]">
                <MousePointerClick size={20} />
                <span className="font-mono text-xs font-black uppercase tracking-widest">Drag to explore</span>
              </div>
            </div>

            {/* Drag Carousel - Fix Magic Numbers with useRef */}
            <motion.div ref={carouselRef} className="cursor-grab overflow-hidden active:cursor-grabbing">
              <motion.div
                drag={reduceMotion ? false : "x"}
                dragConstraints={{ right: 0, left: -carouselWidth }}
                dragElastic={0.1}
                className="flex w-max gap-6"
              >
                {projects.map((project) => {
                  const screenshot = project.screenshotsKey
                    ? PROJECT_SCREENSHOTS[project.screenshotsKey][0]
                    : IMAGE_ASSETS.workspace;

                  return (
                    <motion.article
                      key={project.slug}
                      whileHover={{ y: -8 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="group w-[300px] sm:w-[400px] overflow-hidden rounded-2xl border-2 border-[var(--border)] bg-[var(--card)] shadow-[6px_6px_0_var(--lime)]"
                    >
                      <div className="overflow-hidden border-b-2 border-[var(--border)]">
                        <ResponsiveImage
                          asset={screenshot}
                          language={language}
                          fallbackLabel={project.title}
                          className="aspect-video"
                          imgClassName="object-cover object-top transition duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-5">
                        <div className="flex items-center justify-between">
                          <h4 className="font-heading text-2xl font-black uppercase text-[var(--foreground)]">
                            {project.title}
                          </h4>
                          <div className="rounded-full bg-[var(--foreground)] p-2 text-[var(--background)] transition-transform group-hover:-rotate-45">
                            <ArrowRight size={18} strokeWidth={3} />
                          </div>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.stack.slice(0, 3).map((stack) => (
                            <span
                              key={stack}
                              className="rounded-full border border-[var(--border)]/20 bg-[var(--background)] px-3 py-1 font-mono text-[10px] font-bold uppercase text-[var(--foreground)]"
                            >
                              {stack}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
}