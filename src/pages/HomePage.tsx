import { AboutSection } from "../sections/AboutSection";
import { CaseStudySection } from "../sections/CaseStudySection";
import { ContactSection } from "../sections/ContactSection";
import { ExperienceTimelineSection } from "../sections/ExperienceTimelineSection";
import { FeaturedProjectSection } from "../sections/FeaturedProjectSection";
import { HeroSection } from "../sections/HeroSection";
import { ProductsServicesSection } from "../sections/ProductsServicesSection";
import { ProjectGallerySection } from "../sections/ProjectGallerySection";
import { StatsSection } from "../sections/StatsSection";
import { TechStackSection } from "../sections/TechStackSection";

import { SEO } from "../components/common/SEO";
import { LazySection } from "../components/common/LazySection";

export function HomePage() {
  return (
    <>
      <SEO path="/" />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      
      <LazySection id="stack" height="600px">
        <TechStackSection />
      </LazySection>
      
      <LazySection id="featured" height="800px">
        <FeaturedProjectSection />
      </LazySection>
      
      <LazySection id="case-study" height="800px">
        <CaseStudySection />
      </LazySection>
      
      <LazySection id="projects" height="800px">
        <ProjectGallerySection />
      </LazySection>
      
      <LazySection id="experience" height="900px">
        <ExperienceTimelineSection />
      </LazySection>
      
      <LazySection id="products" height="800px">
        <ProductsServicesSection />
      </LazySection>
      
      <LazySection id="contact" height="600px">
        <ContactSection />
      </LazySection>
    </>
  );
}
