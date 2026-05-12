import type { TimelineItemData } from "../../data/timeline.data";
import type { Language } from "../../types/common.types";
import { getText } from "../../utils/getText";
import { Card, type Accent } from "../ui/Card";
import { cn } from "../../utils/cn";
import { Icon } from "@iconify/react";

/**
 * Maps accent names to actual CSS color values for the header strip.
 * Each card gets its own distinct accent — no shared lime.
 */
const accentHeaderBg: Record<Accent, string> = {
  default: "bg-[var(--muted)]",
  blue:    "bg-[#2563EB]",  // electric blue
  orange:  "bg-[#FF6B35]",  // orange
  lime:    "bg-[#15803d]",  // dark green for white text readability
  purple:  "bg-[#8B5CF6]",  // purple
};

const accentHeaderTextColor: Record<Accent, string> = {
  default: "text-[#111111]",
  blue:    "text-white",
  orange:  "text-white",
  lime:    "text-white",
  purple:  "text-white",
};

type TimelineItemProps = {
  item: TimelineItemData;
  language: Language;
  accent?: Accent;
  isActive?: boolean;
  index?: number;
};

export function TimelineItem({
  item,
  language,
  accent = "default",
  isActive = false,
}: TimelineItemProps) {
  const headerBg = accentHeaderBg[accent] ?? accentHeaderBg.default;
  const headerTextColor = accentHeaderTextColor[accent] ?? accentHeaderTextColor.default;

  return (
    <Card
      className={cn(
        "relative overflow-hidden p-0 transition-all duration-500 ease-out",
        isActive
          ? "translate-y-0 shadow-[6px_6px_0_var(--border)]"
          : "translate-y-1 opacity-75 shadow-[3px_3px_0_var(--border)]",
        accent === "lime" && "border-[#15803d]"
      )}
      accent={accent}
      interactive
    >
      {/* Header strip — uses card's own accent color */}
      <div
        className={cn(
          "relative flex items-center justify-between overflow-hidden border-b-[3px] border-[var(--border)] px-5 py-3 transition-all duration-500",
          isActive
            ? cn(headerBg, headerTextColor)
            : "bg-[var(--card-2)] text-[var(--foreground)]"
        )}
      >
        {/* Subtle diagonal stripe pattern overlay */}
        {isActive && (
          <div 
            className="pointer-events-none absolute inset-0 opacity-10" 
            style={{ backgroundImage: 'repeating-linear-gradient(45deg, currentColor 0, currentColor 2px, transparent 2px, transparent 8px)' }} 
          />
        )}

        <p className="relative z-10 flex items-center gap-2 font-heading text-lg font-extrabold tracking-tight">
          <Icon icon={isActive ? "lucide:calendar-check" : "lucide:calendar"} className="h-5 w-5 opacity-80" />
          {getText(item.period, language)}
        </p>

      </div>

      {/* Body */}
      <div className="relative p-5 sm:p-6">
        {/* Subtle dot grid background for the body */}
        <div 
          className="pointer-events-none absolute inset-0 opacity-[0.03]" 
          style={{ backgroundImage: 'radial-gradient(currentColor 1.5px, transparent 1.5px)', backgroundSize: '16px 16px' }} 
        />

        <h3 className="relative z-10 mb-4 font-heading text-xl font-black leading-tight sm:text-2xl">
          {getText(item.title, language)}
        </h3>

        <div className="relative z-10 ml-1 border-l-[3px] border-[var(--border)] pl-4">
          <p className="font-medium leading-relaxed text-[var(--muted-foreground)]">
            {getText(item.description, language)}
          </p>
        </div>
      </div>
    </Card>
  );
}
