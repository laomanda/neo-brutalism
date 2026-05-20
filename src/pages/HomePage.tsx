import { lazy, Suspense } from "react";
import { HeroSection } from "../sections/HeroSection";
import { SEO } from "../components/common/SEO";
import { LazySection } from "../components/common/LazySection";

// Lazy-load ALL sections below the fold to minimize initial JS payload
const AboutSection = lazy(() =>
  import("../sections/AboutSection").then((m) => ({ default: m.AboutSection }))
);
const StatsSection = lazy(() =>
  import("../sections/StatsSection").then((m) => ({ default: m.StatsSection }))
);
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

function SectionFallback({ height = "600px" }: { height?: string }) {
  return <div style={{ minHeight: height }} className="bg-[var(--background)]" />;
}

export function HomePage() {
  return (
    <>
      <SEO path="/" />
      <HeroSection />

      <LazySection id="about" height="500px">
        <Suspense fallback={<SectionFallback height="500px" />}>
          <AboutSection />
        </Suspense>
      </LazySection>

      <LazySection id="stats" height="400px">
        <Suspense fallback={<SectionFallback height="400px" />}>
          <StatsSection />
        </Suspense>
      </LazySection>
      
      <LazySection id="stack" height="600px">
        <Suspense fallback={<SectionFallback />}>
          <TechStackSection />
        </Suspense>
      </LazySection>
      
      <LazySection id="featured" height="800px">
        <Suspense fallback={<SectionFallback height="800px" />}>
          <FeaturedProjectSection />
        </Suspense>
      </LazySection>
      
      <LazySection id="case-study" height="800px">
        <Suspense fallback={<SectionFallback height="800px" />}>
          <CaseStudySection />
        </Suspense>
      </LazySection>
      
      <LazySection id="projects" height="800px">
        <Suspense fallback={<SectionFallback height="800px" />}>
          <ProjectGallerySection />
        </Suspense>
      </LazySection>
      
      <LazySection id="experience" height="900px">
        <Suspense fallback={<SectionFallback height="900px" />}>
          <ExperienceTimelineSection />
        </Suspense>
      </LazySection>
      
      <LazySection id="products" height="800px">
        <Suspense fallback={<SectionFallback height="800px" />}>
          <ProductsServicesSection />
        </Suspense>
      </LazySection>
      
      <LazySection id="contact" height="600px">
        <Suspense fallback={<SectionFallback />}>
          <ContactSection />
        </Suspense>
      </LazySection>
    </>
  );
}
