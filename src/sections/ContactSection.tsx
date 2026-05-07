import { Icon } from "@iconify/react";
import { Mail, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { AvailabilityBadge } from "../components/common/AvailabilityBadge";
import { Container } from "../components/common/Container";
import { CvDownloadButton } from "../components/common/CvDownloadButton";
import { FinalCtaPanel } from "../components/common/FinalCtaPanel";
import { SocialLinkCard } from "../components/common/SocialLinkCard";
import { buttonVariants } from "../components/ui/buttonVariants";
import { Card } from "../components/ui/Card";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { SITE_CONFIG } from "../constants/site";
import { homepageCopy } from "../data/homepageCopy.data";
import { socialLinks } from "../data/socialLinks.data";
import { useLanguage } from "../hooks/useLanguage";
import { getText } from "../utils/getText";

const contactCopy = homepageCopy.contact;

export function ContactSection() {
  const { language } = useLanguage();

  return (
    <section id="contact" className="section-padding scroll-mt-28">
      <Container>
        <AnimatedSection>
          <div className="mb-6">
            <AvailabilityBadge />
          </div>
        </AnimatedSection>

        <div className="grid gap-7 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <AnimatedSection>
            <FinalCtaPanel language={language} title={contactCopy.title} description={contactCopy.description}>
              <a
                className={buttonVariants("primary", "md")}
                href={SITE_CONFIG.whatsapp}
                rel="noopener noreferrer"
                target="_blank"
              >
                <MessageCircle size={18} strokeWidth={3} aria-hidden="true" />
                {getText(contactCopy.whatsappCta, language)}
              </a>
              <a className={buttonVariants("accent", "md")} href={`mailto:${SITE_CONFIG.email}`}>
                <Mail size={18} strokeWidth={3} aria-hidden="true" />
                {getText(contactCopy.emailCta, language)}
              </a>
              <CvDownloadButton variant="outline" />
              <a
                className={buttonVariants("secondary", "md")}
                href={SITE_CONFIG.github}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon icon="simple-icons:github" className="h-[18px] w-[18px]" aria-hidden="true" />
                {getText(contactCopy.githubCta, language)}
              </a>
            </FinalCtaPanel>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <Card accent="orange" className="bg-[var(--card)]">
              <div className="mb-5">
                <span className="inline-flex rounded-full border-2 border-[var(--border)] bg-[var(--orange)] px-3 py-1 text-xs font-extrabold text-[#111111] shadow-[3px_3px_0_var(--border)]">
                  {getText(contactCopy.eyebrow, language)}
                </span>
                <h3 className="mt-4 font-heading text-2xl font-extrabold">
                  {getText(contactCopy.socialTitle, language)}
                </h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-[var(--foreground)]/75">
                  {getText(contactCopy.socialDescription, language)}
                </p>
              </div>
              <div className="grid gap-4">
                {socialLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
                  >
                    <SocialLinkCard item={link} language={language} />
                  </motion.div>
                ))}
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
