import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, type MouseEventHandler } from "react";
import { Container } from "../components/common/Container";
import { ResponsiveImage } from "../components/common/ResponsiveImage";
import { IMAGE_ASSETS } from "../data/assets.data";
import { homepageCopy } from "../data/homepageCopy.data";

import { useLanguage } from "../hooks/useLanguage";
import { getText } from "../utils/getText";



export function AboutSection() {
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);


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
          </motion.div>

          {/* Card 3: Interactive Value Marquee (Spans full width) */}
          <div className="overflow-hidden rounded-[2rem] border-[3px] border-[var(--border)] bg-[var(--foreground)] shadow-[8px_8px_0_var(--border)] lg:col-span-3">
            <div className="p-6 pb-0 lg:p-10 lg:pb-0">
              <div className="mb-8 border-b-2 border-[var(--border)]/30 pb-6">
                <h3 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-black uppercase leading-none text-[var(--background)]">
                  {language === "id" ? "Nilai & Prinsip" : "Values & Principles"}
                </h3>
              </div>
            </div>

            <div className="relative w-full overflow-hidden pt-16 pb-10 lg:pt-20 lg:pb-14">
              {/* Cinematic Edge Fade Mask */}
              <div 
                className="pointer-events-none absolute inset-0 z-10"
                style={{
                  background: `linear-gradient(to right, var(--foreground) 0%, transparent 15%, transparent 85%, var(--foreground) 100%)`
                }}
              />

              <motion.div
                className="flex w-max gap-8 px-6 lg:px-10"
                animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
                transition={{ duration: 40, ease: "linear", repeat: Infinity }}
              >
                {[...homepageCopy.philosophy.cards, ...homepageCopy.philosophy.cards].map((value, index) => (
                  <motion.div
                    key={`${value.title.en}-${index}`}
                    whileHover={{ 
                      y: -24, 
                      scale: 1.05, 
                      rotate: -1.5,
                      backgroundColor: "var(--lime)",
                      zIndex: 50,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 12 }}
                    className="group w-[340px] shrink-0 cursor-pointer rounded-[2rem] bg-[var(--background)] p-8 text-[var(--foreground)] shadow-[8px_8px_0_rgba(182,255,59,0.5)] lg:w-[400px]"
                  >
                    <h4 className="font-heading text-xl font-black uppercase tracking-tight text-[var(--foreground)] transition-colors group-hover:text-[#111111] lg:text-2xl">
                      {getText(value.title, language)}
                    </h4>
                    <p className="mt-4 text-base font-bold leading-relaxed text-[var(--muted)] transition-colors group-hover:text-[#111111]/80">
                      {getText(value.description, language)}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}