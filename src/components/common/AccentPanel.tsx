import type { ReactNode } from "react";
import { cn } from "../../utils/cn";
import type { Accent } from "../ui/Card";

type AccentPanelProps = {
  children: ReactNode;
  accent?: Exclude<Accent, "default">;
  className?: string;
};

const accentClass: Record<Exclude<Accent, "default">, string> = {
  blue: "bg-[var(--primary)] text-white",
  orange: "bg-[var(--orange)] text-[#111111]",
  lime: "bg-[var(--lime)] text-[#111111]",
  purple: "bg-[var(--purple)] text-white",
};

export function AccentPanel({ children, accent = "blue", className }: AccentPanelProps) {
  return (
    <div
      className={cn(
        "rounded-[1.5rem] border-[3px] border-[var(--border)] p-5 shadow-[6px_6px_0_var(--border)]",
        accentClass[accent],
        className,
      )}
    >
      {children}
    </div>
  );
}
