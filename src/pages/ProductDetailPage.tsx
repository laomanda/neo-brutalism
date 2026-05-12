import { ArrowUpRight, MessageCircle, CheckCircle2, Sparkles } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { BackLink } from "../components/common/BackLink";
import { Container } from "../components/common/Container";
import { DetailHero } from "../components/common/DetailHero";
import { DetailSection } from "../components/common/DetailSection";
import { FeatureList } from "../components/common/FeatureList";
import { ProcessSteps } from "../components/common/ProcessSteps";
import { Badge } from "../components/ui/Badge";
import { buttonVariants } from "../components/ui/buttonVariants";
import { Card } from "../components/ui/Card";
import { SITE } from "../constants/site";
import { detailCopy } from "../data/detailCopy.data";
import { products } from "../data/products.data";
import { useLanguage } from "../hooks/useLanguage";
import { getList } from "../utils/getList";
import { getText } from "../utils/getText";
import { NotFoundPage } from "./NotFoundPage";

import { SEO } from "../components/common/SEO";
import { generateCreativeWorkSchema } from "../utils/seo";

const productCopy = detailCopy.product;

export function ProductDetailPage() {
  const { slug } = useParams();
  const { language } = useLanguage();
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return <NotFoundPage />;
  }

  const deliverables = getList(product.deliverables, language);
  const targetUsers = product.targetUsers ? getList(product.targetUsers, language) : [];
  const processSteps = getList(product.process ?? productCopy.fallbackProcess, language);
  const note = product.note ?? product.description;

  return (
    <section className="section-padding pt-6">
      <SEO
        title={`${getText(product.title, "id")} — Product / Service`}
        description={getText(product.description, "id")}
        path={`/products/${product.slug}`}
        type="article"
        schemas={[generateCreativeWorkSchema(getText(product.title, "id"), getText(product.description, "id"), `/products/${product.slug}`)]}
      />
      <Container>
        <div className="mb-8">
          <BackLink to="/#products">{getText(productCopy.backToProducts, language)}</BackLink>
        </div>

        <DetailHero
          eyebrow={getText(productCopy.productDetail, language)}
          title={getText(product.title, language)}
          description={getText(product.description, language)}
          accent={product.accent}
          actions={
            <>
              <a className={buttonVariants("secondary", "md")} href={SITE.whatsapp} rel="noopener noreferrer" target="_blank">
                {getText(productCopy.consultWhatsapp, language)} <MessageCircle size={18} strokeWidth={3} />
              </a>
            </>
          }
          rightContent={
            <div className="group relative h-full overflow-hidden rounded-[1.5rem] border-[3px] border-black bg-[var(--card-2)] p-8 shadow-[8px_8px_0_black] transition-transform hover:-translate-y-1">
              <div className="flex items-center justify-end">
                <div className="h-3 w-3 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_red]" />
              </div>
              
              <p className="mt-6 font-heading text-4xl font-black uppercase leading-tight">{getText(product.title, language)}</p>
              
              <div className="mt-8 space-y-4">
                <p className="text-xs font-black uppercase tracking-widest text-black/40">Includes:</p>
                <FeatureList items={deliverables} maxItems={4} />
              </div>

              <div className="mt-10 flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-10 w-10 rounded-full border-2 border-black bg-[var(--background)] flex items-center justify-center font-bold text-xs shadow-[2px_2px_0_black]">
                      JP
                    </div>
                  ))}
                </div>
                <p className="text-[10px] font-bold uppercase leading-tight opacity-60">Trusted by<br/>Developers</p>
              </div>

              {/* Price Tag Mockup */}
              <div className="absolute -bottom-2 -right-2 rotate-[-5deg] rounded-xl border-[3px] border-black bg-[var(--lime)] px-6 py-3 font-heading text-2xl font-black shadow-[4px_4px_0_black]">
                PREMIUM
              </div>
            </div>
          }
        />

        <DetailSection title={getText(productCopy.whatItIs, language)}>
          <div className="grid gap-5 lg:grid-cols-[0.55fr_0.45fr]">
            <Card>
              <p className="font-semibold leading-7 text-[var(--foreground)]/80">{getText(product.description, language)}</p>
            </Card>
            <Card accent={product.accent}>
              <p className="font-semibold leading-7 text-[var(--foreground)]/80">{getText(note, language)}</p>
            </Card>
          </div>
        </DetailSection>

        <DetailSection title={getText(productCopy.whoItIsFor, language)}>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {targetUsers.map((target, idx) => (
              <Card key={target} accent={product.accent} className="flex items-center gap-4 p-5" interactive>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-black bg-white shadow-[2px_2px_0_black]">
                  <CheckCircle2 size={18} className="text-[var(--primary)]" />
                </div>
                <p className="text-sm font-bold leading-tight">{target}</p>
              </Card>
            ))}
          </div>
        </DetailSection>

        <DetailSection title={getText(productCopy.whatYouGet, language)}>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {deliverables.map((item, index) => (
              <Card key={item} accent={product.accent} className="group/item relative overflow-hidden p-6" interactive>
                <div className="flex items-start justify-between">
                  <div className="rounded-xl bg-black/5 p-2 transition-colors group-hover/item:bg-white/20">
                    <Sparkles size={20} className="text-[var(--primary)]" />
                  </div>
                  <span className="font-heading text-2xl font-black opacity-10 transition-opacity group-hover/item:opacity-30">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-black leading-tight tracking-tight">{item}</h3>
                
                {/* Decorative background element */}
                <div className="absolute -bottom-6 -right-6 h-20 w-20 rounded-full bg-black/5 blur-2xl transition-transform group-hover/item:scale-150" />
              </Card>
            ))}
          </div>
        </DetailSection>

        <DetailSection title={getText(productCopy.process, language)}>
          <ProcessSteps steps={processSteps} accent={product.accent} />
        </DetailSection>

        <DetailSection title={getText(productCopy.ctaTitle, language)} description={getText(productCopy.ctaDescription, language)}>
          <Card accent={product.accent} className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a className={buttonVariants("secondary", "md")} href={SITE.whatsapp} rel="noopener noreferrer" target="_blank">
              {getText(productCopy.consultWhatsapp, language)} <MessageCircle size={18} strokeWidth={3} />
            </a>
            <Link className={buttonVariants("outline", "md")} to="/#products">
              {getText(productCopy.backToProducts, language)} <ArrowUpRight size={18} strokeWidth={3} />
            </Link>
          </Card>
        </DetailSection>
      </Container>
    </section>
  );
}
