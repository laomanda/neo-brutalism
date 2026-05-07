import type { BilingualText, Language } from "../../types/common.types";
import { getText } from "../../utils/getText";
import { Card, type Accent } from "../ui/Card";
import { CounterNumber } from "./CounterNumber";

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
    <Card accent={accent} className="min-h-52 overflow-hidden" interactive>
      <div className="mb-6 h-3 w-20 rounded-full border-2 border-[var(--border)] bg-[var(--card)] shadow-[3px_3px_0_var(--border)]">
        <span className={`block h-full w-2/3 rounded-full ${accent === "lime" ? "bg-[var(--lime)]" : accent === "orange" ? "bg-[var(--orange)]" : accent === "purple" ? "bg-[var(--purple)]" : "bg-[var(--primary)]"}`} />
      </div>
      <p className={`font-heading text-5xl font-extrabold leading-none sm:text-6xl ${valueColor[accent]}`}>
        <CounterNumber value={value} suffix={suffix} />
      </p>
      <h3 className="mt-3 text-xl font-extrabold">{getText(label, language)}</h3>
      {description ? (
        <p className="mt-2 text-sm font-semibold leading-6 text-[var(--foreground)]/80">
          {getText(description, language)}
        </p>
      ) : null}
    </Card>
  );
}
