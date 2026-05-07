import { Container } from "../components/common/Container";
import { SectionHeader } from "../components/common/SectionHeader";
import { TimelineItem } from "../components/common/TimelineItem";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { homepageCopy } from "../data/homepageCopy.data";
import { timelineItems } from "../data/timeline.data";
import { useLanguage } from "../hooks/useLanguage";
import type { Accent } from "../components/ui/Card";
import { getText } from "../utils/getText";

const timelineCopy = homepageCopy.timeline;

const accents: Accent[] = ["blue", "orange", "purple"];

export function ExperienceTimelineSection() {
  const { language } = useLanguage();

  return (
    <section id="experience" className="section-padding">
      <Container>
        <AnimatedSection>
          <SectionHeader
            eyebrow={getText(timelineCopy.eyebrow, language)}
            title={getText(timelineCopy.title, language)}
            description={getText(timelineCopy.description, language)}
          />
        </AnimatedSection>
        <div className="relative">
          <div className="absolute left-0 right-0 top-8 hidden border-t-[3px] border-dashed border-[var(--border)] lg:block" />
          <div className="grid gap-5 lg:grid-cols-3">
            {timelineItems.map((item, index) => (
              <AnimatedSection key={item.title.en} delay={index * 0.05}>
                <div className="relative">
                  <span className="mb-4 hidden h-5 w-5 rounded-full border-[3px] border-[var(--border)] bg-[var(--lime)] shadow-[3px_3px_0_var(--border)] lg:block" />
                  <TimelineItem item={item} language={language} accent={accents[index] ?? "default"} />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
