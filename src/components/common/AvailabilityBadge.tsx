import { homepageCopy } from "../../data/homepageCopy.data";
import { useLanguage } from "../../hooks/useLanguage";
import { getText } from "../../utils/getText";

export function AvailabilityBadge() {
  const { language } = useLanguage();

  return (
    <div className="inline-flex max-w-full items-center gap-3 rounded-full border-[3px] border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-extrabold shadow-[4px_4px_0_var(--border)]">
      <span className="h-3 w-3 shrink-0 rounded-full border-2 border-[var(--border)] bg-[var(--lime)]" />
      <span className="min-w-0">{getText(homepageCopy.hero.availability, language)}</span>
    </div>
  );
}
