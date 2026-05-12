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
        <h2 className="text-balance-custom font-heading text-4xl font-black uppercase tracking-tighter sm:text-6xl">
          <span className="inline-block bg-[var(--primary)] px-4 py-1 text-black shadow-[6px_6px_0_black] border-[3px] border-black -rotate-1">
            {title}
          </span>
        </h2>
        {description ? (
          <div className="mt-8 border-l-[4px] border-black pl-6">
            <p className="text-lg font-bold leading-relaxed text-[var(--foreground)]/80 italic">{description}</p>
          </div>
        ) : null}
      </div>
      {children}
    </AnimatedSection>
  );
}
