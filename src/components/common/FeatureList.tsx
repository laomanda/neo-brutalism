import { Check, Square } from "lucide-react";
import { cn } from "../../utils/cn";

type FeatureListProps = {
  items: string[];
  maxItems?: number;
  variant?: "check" | "bullet";
  className?: string;
};

export function FeatureList({ items, maxItems = items.length, variant = "check", className }: FeatureListProps) {
  const visibleItems = items.slice(0, maxItems);
  const Icon = variant === "check" ? Check : Square;

  return (
    <ul className={cn("grid gap-2", className)}>
      {visibleItems.map((item) => (
        <li key={item} className="flex gap-2 text-sm font-bold leading-6 text-[var(--foreground)]/80">
          <Icon className="mt-1 h-4 w-4 shrink-0 text-[var(--orange)]" strokeWidth={3} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
