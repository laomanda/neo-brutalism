import clsx from "clsx";
import { motion } from "motion/react";
import type { BilingualText, Language } from "../../types/common.types";
import type { ScreenshotAsset } from "../../types/asset.types";
import { getText } from "../../utils/getText";
import { ProjectScreenshotFrame } from "./ProjectScreenshotFrame";
import { AssetPlaceholder } from "./AssetPlaceholder";

type BrowserMockupProps = {
  language: Language;
  label: BilingualText;
  blocks?: string[];
  icons?: React.ElementType[];
  screenshot?: ScreenshotAsset;
  accent?: "blue" | "orange" | "lime" | "purple";
  priority?: boolean;
  className?: string;
};

export function BrowserMockup({
  language,
  label,
  blocks = [],
  icons = [],
  screenshot,
  accent = "blue",
  priority,
  className,
}: BrowserMockupProps) {
  return (
    <motion.div
      className={clsx(
        "rounded-[1.5rem] border-[3px] border-[var(--border)] bg-[var(--card)] flex flex-col overflow-hidden",
        className || "shadow-[6px_6px_0_var(--border)]"
      )}
    >
      <div className="flex items-center px-4 py-2 border-b-[3px] border-border bg-muted/50 relative min-h-[40px]">
        <div className="flex gap-1.5 absolute left-4">
          <span className="h-3 w-3 rounded-full border-[1.5px] border-black/20 bg-red-400" />
          <span className="h-3 w-3 rounded-full border-[1.5px] border-black/20 bg-amber-400" />
          <span className="h-3 w-3 rounded-full border-[1.5px] border-black/20 bg-green-400" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="border-2 border-border/40 bg-background px-4 py-0.5 rounded-full text-[10px] sm:text-xs font-mono font-semibold text-foreground/70 truncate max-w-[80%] lg:max-w-[60%]">
            {getText(label, language)}
          </div>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-4">
        <div className="relative overflow-hidden rounded-xl border-[3px] border-border bg-muted shadow-brutal-sm aspect-[4/3] md:aspect-video">
          {screenshot ? (
            <ProjectScreenshotFrame
              screenshot={screenshot}
              language={language}
              accent={accent}
              priority={priority}
              className="w-full h-full [&>div:first-child]:border-none [&>div:first-child]:shadow-none [&>div:first-child]:rounded-none [&>div:first-child>div:first-child]:hidden [&>div:last-child]:hidden"
            />
          ) : (
            <AssetPlaceholder
              label={getText(label, language)}
              accent={accent}
              className="w-full h-full border-none"
            />
          )}
        </div>

        {blocks.length > 0 && (
          <div className="grid gap-3 sm:grid-cols-2">
            {blocks.map((block, index) => {
              const Icon = icons[index] || null;
              const iconColors = [
                "bg-rose-300",
                "bg-amber-300",
                "bg-sky-300",
                "bg-emerald-300"
              ];
              const bgColor = iconColors[index % iconColors.length];

              return (
                <div
                  key={block}
                  className="rounded-2xl border-2 border-[var(--border)] bg-[var(--background)] p-4 flex items-center gap-4"
                >
                  {Icon && (
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2 border-[var(--border)] ${bgColor} text-[#09090b] shadow-[3px_3px_0_var(--border)]`}>
                      <Icon size={18} strokeWidth={2.5} />
                    </div>
                  )}
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase text-[var(--orange)] mb-1 leading-none">
                      Step 0{index + 1}
                    </span>
                    <span className="font-heading text-[1.1rem] font-extrabold leading-none text-[var(--foreground)]">
                      {block}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </motion.div>
  );
}
