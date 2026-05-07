import { cn } from "../../utils/cn";

export type ButtonVariant = "primary" | "secondary" | "outline" | "accent";
export type ButtonSize = "sm" | "md" | "lg";

const variantClass: Record<ButtonVariant, string> = {
  primary: "bg-[var(--primary)] text-white",
  secondary: "bg-[var(--lime)] text-[#111111]",
  outline: "bg-[var(--card)] text-[var(--foreground)]",
  accent: "bg-[var(--orange)] text-[#111111]",
};

const sizeClass: Record<ButtonSize, string> = {
  sm: "min-h-9 px-4 py-1.5 text-xs",
  md: "min-h-11 px-5 py-2.5 text-sm",
  lg: "min-h-12 px-6 py-3 text-base",
};

export function buttonVariants(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className?: string,
) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-2xl border-[3px] border-[var(--border)] font-extrabold brutal-shadow brutal-shadow-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary)] disabled:pointer-events-none disabled:translate-y-0 disabled:opacity-60 disabled:shadow-none",
    variantClass[variant],
    sizeClass[size],
    className,
  );
}
