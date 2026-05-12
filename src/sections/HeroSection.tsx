import { ArrowDown, Download } from "lucide-react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, type ComponentProps, type MouseEventHandler, type Ref } from "react";
import { Link } from "react-router-dom";
import { BrutalMarquee } from "../components/common/BrutalMarquee";
import { Container } from "../components/common/Container";
import HeroBackground3D from "../components/common/HeroBackground3D";
import { ProfilePoster } from "../components/common/ProfilePoster";
import { Badge } from "../components/ui/Badge";
import { buttonVariants } from "../components/ui/buttonVariants";
import { SITE_CONFIG } from "../constants/site";
import { homepageCopy } from "../data/homepageCopy.data";
import { useLanguage } from "../hooks/useLanguage";
import { getText } from "../utils/getText";

const heroCopy = homepageCopy.hero;

const textEase = [0.22, 1, 0.36, 1] as const;
type MotionDivStyle = ComponentProps<typeof motion.div>["style"];

type HeroStageRefs = {
  background?: Ref<HTMLDivElement>;
  text?: Ref<HTMLDivElement>;
  poster?: Ref<HTMLDivElement>;
  marquee?: Ref<HTMLDivElement>;
};

type HeroStageContentProps = {
  animationRefs?: HeroStageRefs;
  backgroundStyle?: MotionDivStyle;
  heroContentStyle?: MotionDivStyle;
  posterStyle?: MotionDivStyle;
  marqueeStyle?: MotionDivStyle;
  onHeroMouseMove?: MouseEventHandler<HTMLDivElement>;
  onHeroMouseLeave?: MouseEventHandler<HTMLDivElement>;
};

function reveal(delay = 0) {
  return {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay, ease: textEase },
  };
}

export function HeroStageContent({
  animationRefs,
  backgroundStyle,
  heroContentStyle,
  posterStyle,
  marqueeStyle,
  onHeroMouseMove,
  onHeroMouseLeave,
}: HeroStageContentProps) {
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();

  return (
    <>
      <motion.div
        ref={animationRefs?.background}
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden will-change-transform"
        style={backgroundStyle}
      >
        <HeroBackground3D />
      </motion.div>

      <motion.div
        className="relative z-10 will-change-transform"
        style={heroContentStyle}
        onMouseMove={onHeroMouseMove}
        onMouseLeave={onHeroMouseLeave}
        data-cursor="ship"
      >
        <Container>
          <div className="grid gap-5 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,460px)] lg:items-center lg:gap-14">
            <div className="contents lg:block">
              <motion.div
                className="order-1"
                {...(reduceMotion ? {} : reveal(0))}
              >
                <div ref={animationRefs?.text} className="will-change-transform">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="category">{getText(heroCopy.eyebrow, language)}</Badge>
                    <span className="inline-flex max-w-full items-center gap-2 rounded-full border-2 border-[var(--border)] bg-[var(--card-2)] px-3 py-1 text-[11px] font-bold leading-5 text-[var(--foreground)] shadow-[2px_2px_0_var(--border)] sm:text-xs">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--lime)] ring-1 ring-[var(--border)]" aria-hidden="true" />
                      {getText(heroCopy.availability, language)}
                    </span>
                  </div>

                  <h1 className="text-balance-custom mt-5 max-w-[11ch] font-heading text-[clamp(2.25rem,9vw,3.8rem)] font-extrabold leading-[0.98] text-[var(--foreground)] sm:mt-6 sm:max-w-[12ch] lg:max-w-[10ch] lg:text-[clamp(3.5rem,5.8vw,6.2rem)] lg:leading-[0.95]">
                    {getText(heroCopy.title, language)}
                  </h1>

                  <p className="mt-5 max-w-[620px] text-[0.98rem] font-semibold leading-7 text-[var(--muted)] sm:text-lg">
                    {getText(heroCopy.description, language)}
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="order-3 mt-1 lg:hidden"
                {...(reduceMotion ? {} : reveal(0.08))}
              >
                <ProfilePoster language={language} />
              </motion.div>

              <motion.div
                className="order-4 mt-6 lg:order-none lg:mt-7"
                {...(reduceMotion ? {} : reveal(0.14))}
              >
                <div className="inline-flex max-w-[650px] items-center gap-2 rounded-xl border-2 border-[var(--border)] bg-[var(--card-2)] px-3 py-2 text-xs font-extrabold text-[var(--foreground)] shadow-[2px_2px_0_var(--border)] transition hover:-translate-y-0.5 hover:bg-[var(--card)] sm:text-sm">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--lime)] ring-1 ring-[var(--border)]" aria-hidden="true" />
                  {getText(heroCopy.roleNote, language)}
                </div>

                <div className="mt-6 grid gap-2.5 sm:flex sm:flex-wrap sm:items-center">
                  <Link className={buttonVariants("primary", "md", "w-full sm:w-auto")} to="/#featured">
                    {getText(heroCopy.primaryCta, language)} <ArrowDown size={18} strokeWidth={3} />
                  </Link>
                  {SITE_CONFIG.cvReady ? (
                    <a
                      className={buttonVariants("secondary", "sm", "w-full border-2 shadow-[3px_3px_0_var(--border)] hover:shadow-[5px_5px_0_var(--border)] sm:w-auto")}
                      href={SITE_CONFIG.cvPath}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {getText(heroCopy.downloadCta, language)}
                      <Download size={18} strokeWidth={3} aria-hidden="true" />
                    </a>
                  ) : (
                    <button
                      className={buttonVariants("secondary", "sm", "w-full border-2 shadow-[3px_3px_0_var(--border)] hover:shadow-[5px_5px_0_var(--border)] sm:w-auto")}
                      type="button"
                      disabled
                      aria-disabled="true"
                    >
                      {getText(heroCopy.cvPending, language)}
                      <Download size={18} strokeWidth={3} aria-hidden="true" />
                    </button>
                  )}
                </div>
              </motion.div>
            </div>

            <motion.div
              className="order-2 hidden lg:block"
              initial={reduceMotion ? false : { opacity: 0, y: 20, rotate: 0.8 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.58, delay: 0.16, ease: textEase }}
            >
              <motion.div
                ref={animationRefs?.poster}
                className="will-change-transform [transform-style:preserve-3d]"
                style={posterStyle}
              >
                <ProfilePoster language={language} />
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </motion.div>

      <motion.div
        ref={animationRefs?.marquee}
        className="relative z-10 will-change-transform"
        style={marqueeStyle}
        data-cursor="drag"
      >
        <BrutalMarquee />
      </motion.div>
    </>
  );
}

export function HeroSection() {
  const heroRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start 20%", "end 20%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 22,
    mass: 0.45,
  });

  const bgScale = useTransform(smoothProgress, [0, 0.45, 1], [1, 1.04, 1.18]);
  const bgY = useTransform(smoothProgress, [0, 0.45, 1], [0, -24, -92]);
  const bgOpacity = useTransform(smoothProgress, [0, 0.6, 1], [1, 0.92, 0.58]);

  const heroContentY = useTransform(smoothProgress, [0, 0.55, 1], [0, 0, -36]);
  const heroContentOpacity = useTransform(smoothProgress, [0, 0.7, 1], [1, 1, 0.78]);

  const posterY = useTransform(smoothProgress, [0, 0.45, 1], [0, -18, -72]);
  const posterScale = useTransform(smoothProgress, [0, 0.45, 1], [1, 1.025, 1.08]);
  const posterOpacity = useTransform(smoothProgress, [0, 0.72, 1], [1, 0.92, 0.72]);

  const marqueeY = useTransform(smoothProgress, [0, 0.55, 1], [0, -8, -34]);
  const marqueeOpacity = useTransform(smoothProgress, [0, 0.7, 1], [1, 0.86, 0.55]);

  const smoothMouseX = useSpring(mouseX, { stiffness: 120, damping: 18 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 120, damping: 18 });
  const posterRotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-5, 5]);
  const posterRotateX = useTransform(smoothMouseY, [-0.5, 0.5], [4, -4]);

  const handleHeroMouseMove: MouseEventHandler<HTMLDivElement> = (event) => {
    if (reduceMotion) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleHeroMouseLeave: MouseEventHandler<HTMLDivElement> = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section ref={heroRef} id="home" className="section-padding relative overflow-hidden pt-3 sm:pt-5">
      <HeroStageContent
        backgroundStyle={
          reduceMotion
            ? undefined
            : {
                scale: bgScale,
                y: bgY,
                opacity: bgOpacity,
              }
        }
        heroContentStyle={
          reduceMotion
            ? undefined
            : {
                y: heroContentY,
                opacity: heroContentOpacity,
              }
        }
        posterStyle={
          reduceMotion
            ? undefined
            : {
                y: posterY,
                scale: posterScale,
                opacity: posterOpacity,
                rotateX: posterRotateX,
                rotateY: posterRotateY,
              }
        }
        marqueeStyle={
          reduceMotion
            ? undefined
            : {
                y: marqueeY,
                opacity: marqueeOpacity,
              }
        }
        onHeroMouseMove={handleHeroMouseMove}
        onHeroMouseLeave={handleHeroMouseLeave}
      />
    </section>
  );
}
