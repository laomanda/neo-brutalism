import { motion } from "motion/react";
import type { BilingualText, Language } from "../../types/common.types";
import type { ScreenshotAsset } from "../../types/asset.types";
import { getText } from "../../utils/getText";
import { Badge } from "../ui/Badge";
import { ProjectScreenshotFrame } from "./ProjectScreenshotFrame";
import { AssetPlaceholder } from "./AssetPlaceholder";

type BrowserMockupProps = {
  language: Language;
  label: BilingualText;
  blocks?: string[];
  screenshot?: ScreenshotAsset;
  accent?: "blue" | "orange" | "lime" | "purple";
  priority?: boolean;
};

export function BrowserMockup({
  language,
  label,
  blocks = [],
  screenshot,
  accent = "blue",
  priority,
}: BrowserMockupProps) {
  return (
    <motion.div
      className="rounded-[1.5rem] border-[3px] border-[var(--border)] bg-[var(--card)] shadow-[6px_6px_0_var(--border)] flex flex-col overflow-hidden"
      whileHover={{ scale: 1.015, y: -4 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between border-b-[3px] border-[var(--border)] p-4 bg-[var(--muted)]/50">
        <div className="flex gap-2">
          <span className="h-3.5 w-3.5 rounded-full border-2 border-[var(--border)] bg-red-400" />
          <span className="h-3.5 w-3.5 rounded-full border-2 border-[var(--border)] bg-amber-400" />
          <span className="h-3.5 w-3.5 rounded-full border-2 border-[var(--border)] bg-green-400" />
        </div>
        <Badge variant="tech">DPF WAKAF</Badge>
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
            {blocks.map((block, index) => (
              <div
                key={block}
                className="rounded-2xl border-2 border-[var(--border)] bg-[var(--background)] p-4 font-heading text-lg font-extrabold"
              >
                <span className="mr-2 text-[var(--orange)]">0{index + 1}</span>
                {block}
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
