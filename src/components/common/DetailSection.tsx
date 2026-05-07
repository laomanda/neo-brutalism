import type { ReactNode } from "react";
import { cn } from "../../utils/cn";
import { Badge } from "../ui/Badge";
import { AnimatedSection } from "../ui/AnimatedSection";

type DetailSectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function DetailSection({ eyebrow, title, description, children, className }: DetailSectionProps) {
  return (
    <AnimatedSection className={cn("py-8", className)}>
      <div className="mb-6 max-w-3xl">
        {eyebrow ? (
          <div className="mb-4">
            <Badge variant="category">{eyebrow}</Badge>
          </div>
        ) : null}
        <h2 className="text-balance-custom text-3xl font-extrabold leading-tight sm:text-4xl">{title}</h2>
        {description ? (
          <p className="mt-3 font-semibold leading-7 text-[var(--foreground)]/80">{description}</p>
        ) : null}
      </div>
      {children}
    </AnimatedSection>
  );
}
