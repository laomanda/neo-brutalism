import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn";

export type BadgeVariant = "role" | "tech" | "status" | "category";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  variant?: BadgeVariant;
};

const variantClass: Record<BadgeVariant, string> = {
  role: "bg-[var(--primary)] text-white",
  tech: "bg-[var(--card)] text-[var(--foreground)]",
  status: "bg-[var(--lime)] text-[#111111]",
  category: "bg-[var(--orange)] text-[#111111]",
};

export function Badge({ children, className, variant = "tech", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border-2 border-[var(--border)] px-3 py-1 text-xs font-extrabold uppercase tracking-normal",
        variantClass[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
