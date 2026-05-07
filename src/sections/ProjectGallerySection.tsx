import { Container } from "../components/common/Container";
import { ProjectCard } from "../components/common/ProjectCard";
import { SectionHeader } from "../components/common/SectionHeader";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { homepageCopy } from "../data/homepageCopy.data";
import { projects } from "../data/projects.data";
import { useLanguage } from "../hooks/useLanguage";
import { getText } from "../utils/getText";

const galleryCopy = homepageCopy.projectGallery;

export function ProjectGallerySection() {
  const { language } = useLanguage();

  return (
    <section id="projects" className="section-padding">
      <Container>
        <AnimatedSection>
          <SectionHeader
            eyebrow={getText(galleryCopy.eyebrow, language)}
            title={getText(galleryCopy.title, language)}
            description={getText(galleryCopy.description, language)}
          />
        </AnimatedSection>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <AnimatedSection key={project.slug} delay={index * 0.05}>
              <ProjectCard project={project} language={language} />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
