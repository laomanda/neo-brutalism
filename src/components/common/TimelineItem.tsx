import type { TimelineItemData } from "../../data/timeline.data";
import type { Language } from "../../types/common.types";
import { getText } from "../../utils/getText";
import { Card, type Accent } from "../ui/Card";

type TimelineItemProps = {
  item: TimelineItemData;
  language: Language;
  accent?: Accent;
};

export function TimelineItem({ item, language, accent = "default" }: TimelineItemProps) {
  return (
    <Card className="relative overflow-hidden p-0" accent={accent} interactive>
      <div className="border-b-[3px] border-[var(--border)] bg-[var(--lime)] px-5 py-3 text-[#111111]">
        <p className="font-heading text-xl font-extrabold">{getText(item.period, language)}</p>
      </div>
      <div className="p-5">
        <h3 className="text-2xl font-extrabold">{getText(item.title, language)}</h3>
        <p className="mt-3 text-sm font-semibold leading-6 text-[var(--foreground)]/80">
          {getText(item.description, language)}
        </p>
      </div>
    </Card>
  );
}
