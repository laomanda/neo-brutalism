import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn";

export type Accent = "default" | "blue" | "orange" | "lime" | "purple";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  accent?: Accent;
  interactive?: boolean;
};

const accentClass: Record<Accent, string> = {
  default: "border-[var(--border)]",
  blue: "border-[var(--primary)]",
  orange: "border-[var(--orange)]",
  lime: "border-[var(--lime)]",
  purple: "border-[var(--purple)]",
};

export function Card({
  children,
  className,
  accent = "default",
  interactive = false,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border-[3px] bg-[var(--card)] p-5 brutal-shadow",
        accentClass[accent],
        interactive && "brutal-shadow-hover",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
