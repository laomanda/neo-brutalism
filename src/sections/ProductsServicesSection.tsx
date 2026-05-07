import { Container } from "../components/common/Container";
import { ProductCard } from "../components/common/ProductCard";
import { SectionHeader } from "../components/common/SectionHeader";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { Badge } from "../components/ui/Badge";
import { homepageCopy } from "../data/homepageCopy.data";
import { products } from "../data/products.data";
import { useLanguage } from "../hooks/useLanguage";
import { getText } from "../utils/getText";

const productsCopy = homepageCopy.products;

export function ProductsServicesSection() {
  const { language } = useLanguage();

  return (
    <section id="products" className="section-padding">
      <Container>
        <AnimatedSection>
          <SectionHeader
            eyebrow={getText(productsCopy.eyebrow, language)}
            title={getText(productsCopy.title, language)}
            description={getText(productsCopy.description, language)}
          />
        </AnimatedSection>
        <AnimatedSection className="mb-6">
          <Badge variant="status">{getText(productsCopy.notice, language)}</Badge>
        </AnimatedSection>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => (
            <AnimatedSection key={product.slug} delay={index * 0.05}>
              <ProductCard product={product} language={language} />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
