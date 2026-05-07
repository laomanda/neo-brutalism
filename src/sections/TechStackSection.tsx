import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import { Container } from "../components/common/Container";
import { SectionHeader } from "../components/common/SectionHeader";
import { TechCard } from "../components/common/TechCard";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { homepageCopy } from "../data/homepageCopy.data";
import { techStack, type TechCategory } from "../data/techStack.data";
import { useLanguage } from "../hooks/useLanguage";
import { cn } from "../utils/cn";
import { getText } from "../utils/getText";

type Filter = "all" | TechCategory;

const stackCopy = homepageCopy.techStack;

const filters: { value: Filter; label: { id: string; en: string } }[] = [
  { value: "all", label: stackCopy.filterLabels.all },
  { value: "frontend", label: stackCopy.filterLabels.frontend },
  { value: "backend", label: stackCopy.filterLabels.backend },
  { value: "database", label: stackCopy.filterLabels.database },
  { value: "tools", label: stackCopy.filterLabels.tools },
];

export function TechStackSection() {
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const filteredStack = useMemo(() => {
    return activeFilter === "all" ? techStack : techStack.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="stack" className="section-padding">
      <Container>
        <AnimatedSection>
          <SectionHeader
            eyebrow={getText(stackCopy.eyebrow, language)}
            title={getText(stackCopy.title, language)}
            description={getText(stackCopy.description, language)}
          />
        </AnimatedSection>
        <AnimatedSection className="mb-8 flex flex-wrap gap-3" delay={0.04}>
          {filters.map((filter) => {
            const active = activeFilter === filter.value;

            return (
              <button
                key={filter.value}
                aria-pressed={active}
                className={cn(
                  "rounded-full border-[3px] border-[var(--border)] px-4 py-2 text-sm font-extrabold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary)]",
                  active
                    ? "bg-[var(--orange)] text-[#111111] shadow-[4px_4px_0_var(--border)]"
                    : "bg-[var(--card)] hover:-translate-y-0.5 hover:bg-[var(--lime)] hover:text-[#111111] hover:shadow-[4px_4px_0_var(--border)]",
                )}
                type="button"
                onClick={() => setActiveFilter(filter.value)}
              >
                {getText(filter.label, language)}
              </button>
            );
          })}
        </AnimatedSection>
        <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filteredStack.map((tech) => (
              <motion.div
                key={tech.name}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.24, ease: "easeOut" }}
              >
                <TechCard tech={tech} language={language} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
