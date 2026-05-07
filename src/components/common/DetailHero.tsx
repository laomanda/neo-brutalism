import type { ReactNode } from "react";
import type { Accent } from "../ui/Card";
import { Card } from "../ui/Card";
import { AnimatedSection } from "../ui/AnimatedSection";
import { MetaPill } from "./MetaPill";

type MetaItem = {
  label: string;
  value?: string;
};

type DetailHeroProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  description: string;
  accent?: Accent;
  metaItems?: MetaItem[];
  actions?: ReactNode;
  rightContent?: ReactNode;
};

export function DetailHero({
  eyebrow,
  title,
  subtitle,
  description,
  accent = "default",
  metaItems = [],
  actions,
  rightContent,
}: DetailHeroProps) {
  return (
    <AnimatedSection>
      <Card accent={accent} className="grid gap-8 lg:grid-cols-[1fr_0.78fr]">
        <div>
          <MetaPill label={eyebrow} />
          <h1 className="text-balance-custom mt-6 text-4xl font-extrabold leading-tight sm:text-6xl">{title}</h1>
          {subtitle ? <p className="mt-4 text-xl font-extrabold text-[var(--primary)]">{subtitle}</p> : null}
          <p className="mt-5 max-w-3xl font-semibold leading-7 text-[var(--foreground)]/80">{description}</p>
          {metaItems.length > 0 ? (
            <div className="mt-6 flex flex-wrap gap-3">
              {metaItems.map((item) => (
                <MetaPill key={`${item.label}-${item.value ?? ""}`} label={item.label} value={item.value} />
              ))}
            </div>
          ) : null}
          {actions ? <div className="mt-8 flex flex-wrap gap-4">{actions}</div> : null}
        </div>
        <div>{rightContent}</div>
      </Card>
    </AnimatedSection>
  );
}
