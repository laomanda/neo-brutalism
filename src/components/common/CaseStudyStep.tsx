import type { BilingualText, Language } from "../../types/common.types";
import { getText } from "../../utils/getText";
import { Icon } from "@iconify/react";

type Accent = "default" | "lime" | "blue" | "purple" | "orange";

type CaseStudyStepProps = {
  number: string;
  title: BilingualText;
  description: BilingualText;
  accent?: Accent;
  language: Language;
  icon: string;
};

export function CaseStudyStep({ number, title, description, accent = "default", language, icon }: CaseStudyStepProps) {
  const getAccentColor = (acc: string) => {
    switch (acc) {
      // Darkened the green background so the white text is clearly visible
      case "lime": return "bg-[#16a34a]";
      case "blue": return "bg-[var(--primary)]";
      case "purple": return "bg-[var(--purple)]";
      default: return "bg-[var(--orange)]";
    }
  };

  return (
    <div className="group flex h-full flex-col px-4 md:px-0">
      {/* 
        PREMIUM LIFT PHYSICS:
        Shadow grows from 8px to 16px (diff 8px). 
        Card translates exactly -8px (-translate-x-2 -translate-y-2) to anchor the shadow perfectly.
      */}
      <div className="relative flex h-full w-full flex-col justify-center border-[3px] border-[var(--border)] bg-[var(--card)] p-10 shadow-[8px_8px_0_var(--border)] transition-all duration-500 ease-out hover:-translate-x-2 hover:-translate-y-2 hover:shadow-[16px_16px_0_var(--border)] lg:p-16">
        
        {/* Floating Number Badge with Sub-interaction */}
        <div className={`absolute -left-4 -top-6 flex h-14 w-14 items-center justify-center rounded-xl border-[3px] border-[var(--border)] font-heading text-xl font-black text-[var(--background)] shadow-[4px_4px_0_var(--border)] transition-all duration-500 ease-out group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:-rotate-6 group-hover:shadow-[8px_8px_0_var(--border)] ${getAccentColor(accent)}`}>
          {number}
        </div>
        
        {/* Context-Aware Icon */}
        <div className="mb-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-[3px] border-[var(--border)] bg-[var(--background)] shadow-[4px_4px_0_var(--border)] transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-110">
          <Icon icon={icon} className="h-7 w-7 text-[var(--foreground)]" />
        </div>
        
        <h3 className="font-heading text-3xl font-black tracking-tight lg:text-5xl text-[var(--foreground)] leading-[1.1]">
          {getText(title, language)}
        </h3>
        
        <p className="mt-8 text-base font-medium leading-relaxed text-[var(--foreground)]/70 lg:text-xl lg:leading-relaxed max-w-3xl">
          {getText(description, language)}
        </p>
        
      </div>
    </div>
  );
}
