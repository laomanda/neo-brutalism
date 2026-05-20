import { lazy, Suspense } from "react";
import { HeroSection } from "../sections/HeroSection";
import { AboutSection } from "../sections/AboutSection";
import { StatsSection } from "../sections/StatsSection";
import { SEO } from "../components/common/SEO";
import { LazySection } from "../components/common/LazySection";

// Lazy-load off-screen components to remove them from the initial JS bundle payload
const TechStackSection = lazy(() =>
  import("../sections/TechStackSection").then((m) => ({ default: m.TechStackSection }))
);
const FeaturedProjectSection = lazy(() =>
  import("../sections/FeaturedProjectSection").then((m) => ({ default: m.FeaturedProjectSection }))
);
const CaseStudySection = lazy(() =>
  import("../sections/CaseStudySection").then((m) => ({ default: m.CaseStudySection }))
);
const ProjectGallerySection = lazy(() =>
  import("../sections/ProjectGallerySection").then((m) => ({ default: m.ProjectGallerySection }))
);
const ExperienceTimelineSection = lazy(() =>
  import("../sections/ExperienceTimelineSection").then((m) => ({ default: m.ExperienceTimelineSection }))
);
const ProductsServicesSection = lazy(() =>
  import("../sections/ProductsServicesSection").then((m) => ({ default: m.ProductsServicesSection }))
);
const ContactSection = lazy(() =>
  import("../sections/ContactSection").then((m) => ({ default: m.ContactSection }))
);

export function HomePage() {
  return (
    <>
      <SEO path="/" />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      
      <LazySection id="stack" height="600px">
        <Suspense fallback={<div className="h-[600px] bg-[var(--background)]" />}>
          <TechStackSection />
        </Suspense>
      </LazySection>
      
      <LazySection id="featured" height="800px">
        <Suspense fallback={<div className="h-[800px] bg-[var(--background)]" />}>
          <FeaturedProjectSection />
        </Suspense>
      </LazySection>
      
      <LazySection id="case-study" height="800px">
        <Suspense fallback={<div className="h-[800px] bg-[var(--background)]" />}>
          <CaseStudySection />
        </Suspense>
      </LazySection>
      
      <LazySection id="projects" height="800px">
        <Suspense fallback={<div className="h-[800px] bg-[var(--background)]" />}>
          <ProjectGallerySection />
        </Suspense>
      </LazySection>
      
      <LazySection id="experience" height="900px">
        <Suspense fallback={<div className="h-[900px] bg-[var(--background)]" />}>
          <ExperienceTimelineSection />
        </Suspense>
      </LazySection>
      
      <LazySection id="products" height="800px">
        <Suspense fallback={<div className="h-[800px] bg-[var(--background)]" />}>
          <ProductsServicesSection />
        </Suspense>
      </LazySection>
      
      <LazySection id="contact" height="600px">
        <Suspense fallback={<div className="h-[600px] bg-[var(--background)]" />}>
          <ContactSection />
        </Suspense>
      </LazySection>
    </>
  );
}
