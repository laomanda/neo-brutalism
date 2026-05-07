import { useEffect } from "react";
import { SITE_CONFIG } from "../constants/site";
import { AboutSection } from "../sections/AboutSection";
import { CaseStudySection } from "../sections/CaseStudySection";
import { ContactSection } from "../sections/ContactSection";
import { DevelopmentPhilosophySection } from "../sections/DevelopmentPhilosophySection";
import { ExperienceTimelineSection } from "../sections/ExperienceTimelineSection";
import { FeaturedProjectSection } from "../sections/FeaturedProjectSection";
import { HeroSection } from "../sections/HeroSection";
import { ProductsServicesSection } from "../sections/ProductsServicesSection";
import { ProjectGallerySection } from "../sections/ProjectGallerySection";
import { StatsSection } from "../sections/StatsSection";
import { TechStackSection } from "../sections/TechStackSection";

import { SEO } from "../components/common/SEO";

export function HomePage() {
  return (
    <>
      <SEO path="/" />
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <FeaturedProjectSection />
      <CaseStudySection />
      <ProjectGallerySection />
      <ExperienceTimelineSection />
      <ProductsServicesSection />
      <DevelopmentPhilosophySection />
      <StatsSection />
      <ContactSection />
    </>
  );
}
