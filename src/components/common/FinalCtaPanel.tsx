import type { ReactNode } from "react";
import { uiCopy } from "../../data/uiCopy.data";
import type { Language, BilingualText } from "../../types/common.types";
import { getText } from "../../utils/getText";
import { Badge } from "../ui/Badge";

type FinalCtaPanelProps = {
  language: Language;
  title: BilingualText;
  description: BilingualText;
  children: ReactNode;
};

const labels: BilingualText[] = [
  { id: "Frontend Developer", en: "Frontend Developer" },
  { id: "React", en: "React" },
  { id: "Laravel", en: "Laravel" },
  uiCopy.available,
];

export function FinalCtaPanel({ language, title, description, children }: FinalCtaPanelProps) {
  return (
    <div className="rounded-[1.5rem] border-[3px] border-[var(--border)] bg-[var(--lime)] p-6 text-[#111111] shadow-[6px_6px_0_var(--border)] sm:p-8">
      <div className="flex flex-wrap gap-2">
        {labels.map((label) => (
          <Badge key={label.en} variant="tech" className="bg-white text-[#111111]">
            {getText(label, language)}
          </Badge>
        ))}
      </div>
      <h2 className="text-balance-custom mt-7 font-heading text-4xl font-extrabold leading-tight sm:text-5xl">
        {getText(title, language)}
      </h2>
      <p className="mt-5 max-w-2xl text-base font-bold leading-7 text-[#111111]/80">
        {getText(description, language)}
      </p>
      <div className="no-scrollbar -mx-2 mt-8 flex flex-nowrap items-center gap-3 overflow-x-auto px-2 pb-6 pt-2 sm:gap-4">
        {children}
      </div>
    </div>
  );
}
