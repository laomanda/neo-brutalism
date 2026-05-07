import { Container } from "../components/common/Container";
import { SectionHeader } from "../components/common/SectionHeader";
import { StatCard } from "../components/common/StatCard";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { homepageCopy } from "../data/homepageCopy.data";
import { stats } from "../data/stats.data";
import { useLanguage } from "../hooks/useLanguage";
import { getText } from "../utils/getText";

const statsCopy = homepageCopy.stats;

const accents = ["blue", "orange", "lime", "purple"] as const;

export function StatsSection() {
  const { language } = useLanguage();

  return (
    <section id="stats" className="section-padding scroll-mt-28">
      <Container>
        <AnimatedSection>
          <SectionHeader
            eyebrow={getText(statsCopy.eyebrow, language)}
            title={getText(statsCopy.title, language)}
            description={getText(statsCopy.description, language)}
          />
        </AnimatedSection>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <AnimatedSection key={item.label.en} delay={index * 0.05}>
              <StatCard
                value={item.value}
                suffix={item.suffix}
                label={item.label}
                description={item.description}
                language={language}
                accent={accents[index]}
              />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
