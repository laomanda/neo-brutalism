import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AccentPanel } from "../components/common/AccentPanel";
import { CaseStudyStep } from "../components/common/CaseStudyStep";
import { Container } from "../components/common/Container";
import { StackBadges } from "../components/common/StackBadges";
import { SectionHeader } from "../components/common/SectionHeader";
import { Badge } from "../components/ui/Badge";
import { buttonVariants } from "../components/ui/buttonVariants";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { homepageCopy } from "../data/homepageCopy.data";
import { projects } from "../data/projects.data";
import { useLanguage } from "../hooks/useLanguage";
import { getText } from "../utils/getText";

const caseStudyCopy = homepageCopy.caseStudy;

export function CaseStudySection() {
  const { language } = useLanguage();
  const project = projects.find((item) => item.slug === "dpf-wakaf") ?? projects[0];

  return (
    <section id="case-study" className="section-padding">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.36fr]">
          <div>
            <AnimatedSection>
              <SectionHeader
                eyebrow={getText(caseStudyCopy.eyebrow, language)}
                title={getText(caseStudyCopy.title, language)}
                description={getText(caseStudyCopy.description, language)}
              />
            </AnimatedSection>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {caseStudyCopy.steps.map((step, index) => (
                <AnimatedSection key={step.title.en} delay={index * 0.04}>
                  <CaseStudyStep
                    number={`0${index + 1}`}
                    title={step.title}
                    description={step.description}
                    accent={step.accent}
                    language={language}
                  />
                </AnimatedSection>
              ))}
            </div>
          </div>

          <AnimatedSection delay={0.08}>
            <AccentPanel accent="blue" className="sticky top-32">
              <Badge variant="status">{getText(caseStudyCopy.sideTitle, language)}</Badge>
              <h3 className="mt-5 font-heading text-4xl font-extrabold">{project.title}</h3>
              <p className="mt-3 font-bold">{project.role}</p>
              <div className="mt-5">
                <StackBadges stack={[...caseStudyCopy.sideTags]} max={6} />
              </div>
              <Link className={buttonVariants("secondary", "sm", "mt-7 w-fit")} to={project.route}>
                {getText(caseStudyCopy.detailCta, language)}
                <ArrowUpRight size={17} strokeWidth={3} />
              </Link>
            </AccentPanel>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
