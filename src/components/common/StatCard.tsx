import type { BilingualText, Language } from "../../types/common.types";
import { getText } from "../../utils/getText";
import { Card, type Accent } from "../ui/Card";
import { CounterNumber } from "./CounterNumber";
import { cn } from "../../utils/cn";

type StatCardProps = {
  value: number | string;
  suffix?: string;
  label: BilingualText;
  description?: BilingualText;
  language: Language;
  accent?: Exclude<Accent, "default">;
};

const valueColor: Record<Exclude<Accent, "default">, string> = {
  blue: "text-[var(--primary)]",
  orange: "text-[var(--orange)]",
  lime: "text-[var(--lime)]",
  purple: "text-[var(--purple)]",
};

export function StatCard({ value, suffix = "", label, description, language, accent = "blue" }: StatCardProps) {
  return (
    <Card accent={accent} className="group relative flex min-h-60 flex-col justify-between overflow-hidden p-6 sm:p-8" interactive>
      {/* Subtle dot grid background */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.03]" 
        style={{ backgroundImage: 'radial-gradient(currentColor 1.5px, transparent 1.5px)', backgroundSize: '16px 16px' }} 
      />

      <div className="relative z-10">
        <div className="mb-8 flex items-center gap-3">
           <div className="h-4 w-12 overflow-hidden rounded-full border-2 border-[var(--border)] bg-[var(--card)] shadow-[2px_2px_0_var(--border)]">
              <div 
                className={cn(
                  "h-full rounded-full transition-all duration-700",
                  accent === "lime" ? "bg-[var(--lime)]" : accent === "orange" ? "bg-[var(--orange)]" : accent === "purple" ? "bg-[var(--purple)]" : "bg-[var(--primary)]"
                )} 
                style={{ width: '70%' }}
              />
           </div>
           <span className="font-mono text-[10px] font-black uppercase tracking-wider opacity-40">
              Stat Point
           </span>
        </div>

        <p className={cn("mb-4 font-heading text-5xl font-black leading-none tracking-tighter sm:text-6xl", valueColor[accent])}>
          <CounterNumber value={value} suffix={suffix} />
        </p>
        
        <h3 className="text-xl font-black leading-tight sm:text-2xl">{getText(label, language)}</h3>
      </div>

      {description ? (
        <div className="relative z-10 mt-6 border-t-2 border-dashed border-[var(--border)]/10 pt-6">
          <p className="text-sm font-medium leading-relaxed text-[var(--muted-foreground)]">
            {getText(description, language)}
          </p>
        </div>
      ) : null}
    </Card>
  );
}
