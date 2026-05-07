import type { ReactNode } from "react";
import { cn } from "../../utils/cn";
import type { Accent } from "./Card";

type IconBoxProps = {
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

export function IconBox({ children, accent = "blue", className }: IconBoxProps) {
  return (
    <div
      className={cn(
        "inline-flex h-12 w-12 items-center justify-center rounded-xl border-[3px] border-[var(--border)] shadow-[4px_4px_0_var(--border)]",
        accentClass[accent],
        className,
      )}
      aria-hidden="true"
    >
      {children}
    </div>
  );
}
