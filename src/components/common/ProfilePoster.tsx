import { Icon } from "@iconify/react";
import { motion, useReducedMotion } from "motion/react";
import { IMAGE_ASSETS } from "../../data/assets.data";
import { homepageCopy } from "../../data/homepageCopy.data";
import type { Language } from "../../types/common.types";
import { cn } from "../../utils/cn";
import { ResponsiveImage } from "./ResponsiveImage";

type ProfilePosterProps = {
  language: Language;
  className?: string;
};

const badgeClass =
  "rounded-full border-2 border-black px-2 py-0.5 font-mono text-[9px] font-extrabold tracking-[0.08em] text-black shadow-[2px_2px_0_#111111] sm:px-2.5 sm:py-1 sm:text-[10px]";

export function ProfilePoster({ language, className }: ProfilePosterProps) {
  const reduceMotion = useReducedMotion();
  const heroCopy = homepageCopy.hero;
  const posterBadges = heroCopy.posterBadges.slice(0, 2);
  const posterStripText = heroCopy.posterStrip[language];

  return (
    <motion.article
      className={cn(
        "relative mx-auto w-full max-w-[20rem] overflow-visible sm:max-w-[23rem] lg:max-w-[460px]",
        className,
      )}
      whileHover={reduceMotion ? undefined : { y: -4, rotate: -0.4 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      <div className="relative overflow-hidden rounded-[1.25rem] border-[3px] border-[var(--border)] bg-[var(--card)] shadow-[5px_5px_0_var(--border)]">
        <div className="flex items-center justify-between border-b-[3px] border-[var(--border)] bg-[var(--orange)] px-3 py-2 text-black sm:px-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full border-2 border-black bg-[var(--lime)]" aria-hidden="true" />
            <span className="font-mono text-[9px] font-black uppercase tracking-[0.18em] sm:text-[10px]">
              Portfolio / 2026
            </span>
          </div>
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-3 w-3 rounded-full border-2 border-black bg-white" />
            <span className="h-3 w-3 rounded-full border-2 border-black bg-black" />
          </div>
        </div>

        <div className="flex gap-1.5 border-b-2 border-[var(--border)] bg-[var(--card-2)] px-3 py-2 lg:hidden">
          {posterBadges.map((badge, index) => (
            <span
              key={badge}
              className={cn(
                badgeClass,
                index === 0 ? "bg-[var(--lime)]" : "bg-[var(--primary)] text-white",
              )}
            >
              {badge}
            </span>
          ))}
        </div>

        <div className="relative overflow-hidden bg-[var(--background)]">
          <ResponsiveImage
            asset={IMAGE_ASSETS.profile}
            language={language}
            fallbackLabel="PROFILE_PHOTO"
            fallbackDescription={
              language === "id"
                ? "Foto profil Jakkob Panjaitan"
                : "Jakkob Panjaitan profile photo"
            }
            className="aspect-[4/4.05] max-h-[325px] sm:max-h-[375px] lg:aspect-[4/4.55] lg:max-h-[500px]"
            imgClassName="object-cover object-top"
            loading="eager"
            fetchPriority="high"
            accent="orange"
          />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />

          <motion.div
            className="absolute left-4 top-4 hidden max-w-[58%] flex-col items-start gap-1.5 lg:flex"
            initial={reduceMotion ? false : { opacity: 0, x: -12 }}
            animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.45, ease: "easeOut" }}
          >
            {posterBadges.map((badge, index) => (
              <motion.span
                key={badge}
                className={cn(
                  badgeClass,
                  index === 0 ? "bg-[var(--lime)]" : "ml-3 bg-[var(--primary)] text-white",
                )}
                whileHover={reduceMotion ? undefined : { x: 2 }}
              >
                {badge}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <div className="flex items-center gap-2 border-t-[3px] border-[var(--border)] bg-[var(--poster-strip)] px-3 py-2.5 sm:px-4">
          <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 border-[var(--border)] bg-[var(--lime)] text-black">
            <Icon icon="lucide:layout-dashboard" className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          <p className="min-w-0 truncate font-mono text-[9px] font-bold leading-4 tracking-[0.08em] text-[var(--foreground)]/90 sm:text-[10px]">
            {posterStripText}
          </p>
        </div>
      </div>
    </motion.article>
  );
}
