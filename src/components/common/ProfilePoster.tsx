import { motion, useReducedMotion } from "motion/react";
import { IMAGE_ASSETS } from "../../data/assets.data";
import type { Language } from "../../types/common.types";
import { cn } from "../../utils/cn";
import { ResponsiveImage } from "./ResponsiveImage";

type ProfilePosterProps = {
  language: Language;
  className?: string;
};

export function ProfilePoster({ language, className }: ProfilePosterProps) {
  const reduceMotion = useReducedMotion();

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
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-3 w-3 rounded-full border-2 border-black bg-white" />
            <span className="h-3 w-3 rounded-full border-2 border-black bg-black" />
          </div>
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
        </div>
      </div>
    </motion.article>
  );
}
