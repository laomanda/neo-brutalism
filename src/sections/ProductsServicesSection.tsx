import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Container } from "../components/common/Container";
import { ProductCard } from "../components/common/ProductCard";
import { SectionHeader } from "../components/common/SectionHeader";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { homepageCopy } from "../data/homepageCopy.data";
import { products } from "../data/products.data";
import { useLanguage } from "../hooks/useLanguage";
import { getText } from "../utils/getText";
import { cn } from "../utils/cn";

// Import the background image
import bgServices from "../assets/images/bg-services.webp";

const productsCopy = homepageCopy.products;

export function ProductsServicesSection() {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax Configuration
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Wow-factor translation: moves the background from -15% to 15% as user scrolls
  const yParallax = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={sectionRef} id="products" className="relative overflow-hidden bg-[var(--background)] py-24 lg:py-32">
      {/* Background Image with Premium Parallax */}
      <motion.div 
        className="pointer-events-none absolute inset-x-0 -top-[20%] z-0 h-[140%] bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: `url(${bgServices})`,
          y: yParallax
        }} 
      />
      
      {/* Smooth Gradient Transitions (Top and Bottom) */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 z-0 h-40 bg-gradient-to-b from-[var(--background)] to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-0 h-40 bg-gradient-to-t from-[var(--background)] to-transparent" />

      <Container className="relative z-10">
        <AnimatedSection>
          <div className="mb-16 max-w-2xl lg:mb-24">
            <SectionHeader
              eyebrow={getText(productsCopy.eyebrow, language)}
              title={getText(productsCopy.title, language)}
              description={getText(productsCopy.description, language)}
            />
          </div>
        </AnimatedSection>

        {/* Responsive Asymmetric Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {products.map((product, index) => {
            // Asymmetric rhythm: offset the middle card downwards on desktop
            const isMiddle = index === 1;
            
            return (
              <AnimatedSection 
                key={product.slug} 
                delay={index * 0.1}
                className={cn(
                  "h-full",
                  isMiddle && "lg:mt-16" // Creates the vertical staggered effect
                )}
              >
                <ProductCard product={product} language={language} className="h-full" />
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
