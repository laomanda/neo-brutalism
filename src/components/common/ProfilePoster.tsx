import clsx from "clsx";
import { IMAGE_ASSETS } from "../../data/assets.data";
import { ResponsiveImage } from "./ResponsiveImage";

type ProfilePosterProps = {
  language: "id" | "en";
  className?: string;
};

export const ProfilePoster = ({ language, className }: ProfilePosterProps) => {
  return (
    <div
      className={clsx(
        "relative w-full max-w-sm mx-auto sm:max-w-md lg:max-w-full lg:h-full lg:min-h-[500px]",
        "border-[3px] border-border bg-card shadow-brutal flex flex-col overflow-hidden",
        className
      )}
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b-[3px] border-border bg-orange-400">
        <span className="font-mono font-bold text-black text-sm tracking-widest">
          PORTFOLIO / 2026
        </span>
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full border-2 border-black bg-white" />
          <div className="w-3 h-3 rounded-full border-2 border-black bg-black" />
        </div>
      </div>

      {/* Image Area */}
      <div className="relative flex-1 bg-muted overflow-hidden">
        <ResponsiveImage
          asset={IMAGE_ASSETS.profile}
          language={language}
          fallbackLabel="PROFILE_PHOTO"
          fallbackDescription={
            language === "id"
              ? "Foto profil Jakkob Panjaitan"
              : "Jakkob Panjaitan Profile Photo"
          }
          className="w-full h-full min-h-[300px] lg:absolute lg:inset-0"
          imgClassName="object-cover object-center lg:object-top"
          loading="eager"
          fetchPriority="high"
          accent="orange"
        />

        {/* Floating Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <div className="px-3 py-1 bg-lime-400 border-2 border-black font-mono text-xs font-bold text-black shadow-brutal-sm rotate-[-2deg]">
            UI Engineering
          </div>
          <div className="px-3 py-1 bg-blue-400 border-2 border-black font-mono text-xs font-bold text-black shadow-brutal-sm ml-4 rotate-[1deg]">
            Fullstack Ready
          </div>
          <div className="px-3 py-1 bg-purple-400 border-2 border-black font-mono text-xs font-bold text-black shadow-brutal-sm rotate-[3deg]">
            RPL Fresh Graduate
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="p-4 border-t-[3px] border-border bg-card">
        <p className="font-mono text-xs font-semibold text-muted-foreground uppercase tracking-wider text-center">
          {language === "id"
            ? "Frontend Developer first, Fullstack-capable second."
            : "Frontend Developer first, Fullstack-capable second."}
        </p>
      </div>
    </div>
  );
};
