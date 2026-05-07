import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "../components/common/Container";
import { buttonVariants } from "../components/ui/buttonVariants";
import { Card } from "../components/ui/Card";
import { SITE } from "../constants/site";
import { detailCopy } from "../data/detailCopy.data";
import { useLanguage } from "../hooks/useLanguage";
import { getText } from "../utils/getText";

import { SEO } from "../components/common/SEO";

const notFoundCopy = detailCopy.notFound;

export function NotFoundPage() {
  const { language } = useLanguage();

  return (
    <section className="section-padding pt-6">
      <SEO 
        title="Page Not Found" 
        description="Halaman yang dibuka tidak tersedia atau datanya belum dibuat." 
        noIndex 
      />
      <Container>
        <Card accent="orange" className="mx-auto max-w-3xl text-center">
          <p className="font-heading text-7xl font-extrabold text-[var(--orange)]">404</p>
          <h1 className="mt-6 text-balance-custom text-4xl font-extrabold">{getText(notFoundCopy.title, language)}</h1>
          <p className="mx-auto mt-4 max-w-xl font-semibold leading-7 text-[var(--foreground)]/80">
            {getText(notFoundCopy.description, language)}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link className={buttonVariants("primary", "md")} to="/">
              <ArrowLeft size={18} strokeWidth={3} /> {getText(notFoundCopy.home, language)}
            </Link>
            <Link className={buttonVariants("outline", "md")} to="/#projects">
              {getText(notFoundCopy.projects, language)} <ArrowUpRight size={18} strokeWidth={3} />
            </Link>
          </div>
        </Card>
      </Container>
    </section>
  );
}
