import { Icon } from "@iconify/react";
import { ArrowUpRight } from "lucide-react";
import type { SocialLink } from "../../data/socialLinks.data";
import type { Language } from "../../types/common.types";
import { getText } from "../../utils/getText";
import { cn } from "../../utils/cn";

type SocialLinkCardProps = {
  item: SocialLink;
  language: Language;
  className?: string;
};

const brandConfig: Record<string, { bg: string; text: string }> = {
  Gmail: { bg: "bg-[#EA4335]", text: "text-white" },
  WhatsApp: { bg: "bg-[#22C55E]", text: "text-white" },
  GitHub: { bg: "bg-[#181717]", text: "text-white" },
  LinkedIn: { bg: "bg-[#0A66C2]", text: "text-white" },
  Instagram: { bg: "bg-[#E1306C]", text: "text-white" },
};

export function SocialLinkCard({ item, language, className }: SocialLinkCardProps) {
  const config = brandConfig[item.label] || { bg: "bg-[var(--lime)]", text: "text-[#111111]" };

  return (
    <a
      aria-label={item.label}
      className={cn(
        "group grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-2xl border-[3px] border-[var(--border)] bg-[var(--card)] p-4 shadow-[6px_6px_0_var(--border)] transition hover:-translate-y-0.5 hover:shadow-[10px_10px_0_var(--border)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary)]",
        className,
      )}
      href={item.href}
      rel={item.external ? "noopener noreferrer" : undefined}
      target={item.external ? "_blank" : undefined}
    >
      <span className={cn(
        "grid h-12 w-12 place-items-center rounded-xl border-[3px] border-[var(--border)] shadow-[4px_4px_0_var(--border)]",
        config.bg,
        config.text
      )}>
        <Icon icon={item.icon} className="h-6 w-6" aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className="block font-heading text-lg font-extrabold">{item.label}</span>
        <span className="block truncate text-sm font-bold text-[var(--foreground)]/70">
          {getText(item.displayText, language)}
        </span>
      </span>
      <ArrowUpRight className="h-5 w-5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={3} aria-hidden="true" />
    </a>
  );
}
