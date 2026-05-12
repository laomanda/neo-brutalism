import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, type MouseEventHandler } from "react";
import { ArrowRight, ArrowLeft, Sparkles} from "lucide-react";
import { Container } from "../components/common/Container";
import { ResponsiveImage } from "../components/common/ResponsiveImage";
import { IMAGE_ASSETS } from "../data/assets.data";
import { homepageCopy } from "../data/homepageCopy.data";
import { useLanguage } from "../hooks/useLanguage";
import { getText } from "../utils/getText";

// Import new images
import hercules from "../assets/images/hercules.webp";
import sqAirlines from "../assets/images/sq-airlines.webp";
import phantom from "../assets/images/phantom.webp";
import dragon from "../assets/images/dragon.webp";

export function AboutSection() {
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

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
        <div className="relative z-10 grid gap-6 lg:grid-cols-3 lg:grid-rows-[auto_auto]">
          
          {/* Card 1: The Slider Container (Takes up 2 columns) */}
          <motion.div
            className="group relative min-h-[500px] overflow-hidden rounded-[2rem] border-[3px] border-[var(--border)] bg-[var(--card)] p-0 shadow-[8px_8px_0_var(--border)] lg:col-span-2"
            onMouseMove={handleMouseMove}
          >
            <motion.div className="pointer-events-none absolute inset-0" style={{ background: spotlightBackground }} />
            
            <div className="relative h-full w-full">
              <AnimatePresence mode="wait" initial={false}>
                {activeSlide === 0 ? (
                  /* SLIDE 1: Vision Statement */
                  <motion.div
                    key="vision-slide"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="flex h-full flex-col justify-between p-8"
                  >
                    <div>
                      <h2 className="max-w-[15ch] font-heading text-[clamp(2.5rem,6vw,5.5rem)] font-black uppercase leading-[0.9] text-[var(--foreground)]">
                        {getText(aboutCopy.bentoTitle, language)}
                      </h2>
                      <p className="mt-8 max-w-lg text-lg font-bold leading-relaxed text-[var(--foreground)]/70">
                        {getText(aboutCopy.bentoDescription, language)}
                      </p>
                    </div>

                    <button
                      onClick={() => setActiveSlide(1)}
                      className="group/btn mt-12 flex w-fit items-center gap-3 rounded-full border-[3px] border-black bg-[var(--lime)] px-6 py-3 font-black uppercase tracking-wider text-black shadow-[4px_4px_0_black] transition hover:-translate-y-1 hover:shadow-[6px_6px_0_black] active:translate-y-0 active:shadow-[2px_2px_0_black]"
                    >
                      {language === "id" ? "Kenali Jakkob" : "Know More"}
                      <ArrowRight size={20} strokeWidth={3} className="transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </motion.div>
                ) : (
                  /* SLIDE 2: Personal Branding */
                  <motion.div
                    key="personal-slide"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="flex h-full flex-col p-6 lg:p-8"
                  >
                    {/* TOP: Cinema Strip Header */}
                    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                      {[hercules, sqAirlines, phantom, dragon].map((img, i) => (
                        <div key={i} className="group/img relative aspect-video overflow-hidden rounded-xl border-2 border-black shadow-[4px_4px_0_black]">
                          <img 
                            src={img} 
                            alt={`Hobby ${i}`} 
                            className="h-full w-full object-cover transition-transform duration-500 group-hover/img:scale-110" 
                          />
                        </div>
                      ))}
                    </div>

                    {/* BOTTOM: Bio Content */}
                    <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.4fr] lg:items-end">
                      <div>
                        <div className="mb-4 flex items-center gap-3">
                          <div className="rounded-full bg-[var(--primary)]/10 p-2 text-[var(--primary)]">
                            <Sparkles size={22} strokeWidth={3} />
                          </div>
                          <span className="text-xs font-black uppercase tracking-[0.2em] text-[var(--foreground)]/50">
                            {language === "id" ? "Siapa saya?" : "Who am I?"}
                          </span>
                        </div>
                        
                        <h2 className="font-heading text-3xl font-black uppercase leading-tight lg:text-5xl">
                          {language === "id" ? "Bisa panggil saya Jakkob atau Kob." : "You can call me Jakkob or Kob."}
                        </h2>
                        
                        <p className="mt-6 max-w-3xl text-base font-bold leading-relaxed text-[var(--foreground)]/80 lg:text-lg">
                          {language === "id" 
                            ? "Di luar koding, saya seorang kolektor Hot Wheels dan penggemar Aviation—karena saya menyukai detail teknis. Saya juga suka masak, karena meracik bumbu itu sama seninya dengan meracik baris kode."
                            : "Outside of coding, I'm a Hot Wheels collector and an Aviation enthusiast—driven by my love for technical details. I also love cooking, as balancing flavors is just as much an art as balancing lines of code."
                          }
                        </p>
                      </div>

                      <div className="flex justify-start lg:justify-end">
                        <button
                          onClick={() => setActiveSlide(0)}
                          className="group/btn flex items-center gap-3 rounded-full border-[3px] border-black bg-[var(--card-2)] px-6 py-3 font-black uppercase tracking-wider text-black shadow-[4px_4px_0_black] transition hover:-translate-y-1 hover:shadow-[6px_6px_0_black] active:translate-y-0 active:shadow-[2px_2px_0_black]"
                        >
                          <ArrowLeft size={20} strokeWidth={3} className="transition-transform group-hover/btn:-translate-x-1" />
                          {language === "id" ? "Kembali" : "Back"}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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