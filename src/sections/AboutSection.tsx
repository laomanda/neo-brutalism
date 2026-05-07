import { Code2, Database, LayoutDashboard } from "lucide-react";
import { Container } from "../components/common/Container";
import { SectionHeader } from "../components/common/SectionHeader";
import { Badge } from "../components/ui/Badge";
import { Card } from "../components/ui/Card";
import { IconBox } from "../components/ui/IconBox";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { ResponsiveImage } from "../components/common/ResponsiveImage";
import { IMAGE_ASSETS } from "../data/assets.data";
import { homepageCopy } from "../data/homepageCopy.data";
import { useLanguage } from "../hooks/useLanguage";
import { getText } from "../utils/getText";

const cardIcons = [LayoutDashboard, Database, Code2];
const aboutCopy = homepageCopy.about;

export function AboutSection() {
  const { language } = useLanguage();

  return (
    <section id="about" className="section-padding">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <AnimatedSection>
            <div className="flex h-full flex-col gap-5">
              <Card accent="purple" className="flex-none">
                <SectionHeader
                  eyebrow={getText(aboutCopy.eyebrow, language)}
                  title={getText(aboutCopy.title, language)}
                  description={getText(aboutCopy.description, language)}
                  className="mb-7"
                />
                <div className="flex flex-wrap gap-3">
                  {aboutCopy.quickFacts.map((fact) => (
                    <Badge key={fact.en} variant="tech">
                      {getText(fact, language)}
                    </Badge>
                  ))}
                </div>
              </Card>
              <div className="relative hidden flex-1 overflow-hidden rounded-2xl border-[3px] border-[var(--border)] shadow-[6px_6px_0_var(--border)] lg:block min-h-[240px]">
                <ResponsiveImage
                  asset={IMAGE_ASSETS.about}
                  language={language}
                  fallbackLabel="WORKSPACE"
                  className="absolute inset-0"
                  accent="lime"
                />
              </div>
            </div>
          </AnimatedSection>

          <div className="grid gap-5">
            {aboutCopy.cards.map((card, index) => {
              const Icon = cardIcons[index];
              const accent = card.accent ?? "blue";

              return (
                <AnimatedSection key={card.title.en} delay={index * 0.05}>
                  <Card accent={accent} className="grid gap-5 sm:grid-cols-[auto_1fr]" interactive>
                    <IconBox accent={accent}>
                      <Icon size={24} strokeWidth={3} />
                    </IconBox>
                    <div>
                      <h3 className="text-2xl font-extrabold">{getText(card.title, language)}</h3>
                      <p className="mt-2 text-sm font-semibold leading-6 text-[var(--foreground)]/80">
                        {getText(card.description, language)}
                      </p>
                    </div>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
