import { CheckCircle, Code2, Layers, MousePointerClick, Move } from "lucide-react";
import { Container } from "../components/common/Container";
import { SectionHeader } from "../components/common/SectionHeader";
import { Card, type Accent } from "../components/ui/Card";
import { IconBox } from "../components/ui/IconBox";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { homepageCopy } from "../data/homepageCopy.data";
import { useLanguage } from "../hooks/useLanguage";
import { getText } from "../utils/getText";

const philosophyCopy = homepageCopy.philosophy;
const icons = [Layers, Move, Code2, MousePointerClick];

export function DevelopmentPhilosophySection() {
  const { language } = useLanguage();

  return (
    <section id="philosophy" className="section-padding">
      <Container>
        <AnimatedSection>
          <SectionHeader
            eyebrow={getText(philosophyCopy.eyebrow, language)}
            title={getText(philosophyCopy.title, language)}
            description={getText(philosophyCopy.description, language)}
          />
        </AnimatedSection>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {philosophyCopy.cards.map((item, index) => {
            const Icon = icons[index];
            const accent = item.accent as Exclude<Accent, "default">;

            return (
              <AnimatedSection key={item.title.en} delay={index * 0.05}>
                <Card accent={accent} className="h-full" interactive>
                  <div className="flex items-start justify-between gap-4">
                    <IconBox accent={accent}>
                      <Icon size={24} strokeWidth={3} aria-hidden="true" />
                    </IconBox>
                    <CheckCircle className="h-6 w-6 text-[var(--primary)]" strokeWidth={3} aria-hidden="true" />
                  </div>
                  <p className="mt-6 font-heading text-sm font-extrabold text-[var(--foreground)]/60">
                    0{index + 1}
                  </p>
                  <h3 className="mt-2 text-2xl font-extrabold">{getText(item.title, language)}</h3>
                  <p className="mt-3 text-sm font-semibold leading-6 text-[var(--foreground)]/80">
                    {getText(item.description, language)}
                  </p>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
