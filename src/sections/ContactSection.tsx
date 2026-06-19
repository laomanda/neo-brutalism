import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { Mail, MessageCircle, MapPin, Clock, Briefcase } from "lucide-react";
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
import { useIsMobile } from "../hooks/useIsMobile";
import { getText } from "../utils/getText";
import { cn } from "../utils/cn";

const contactCopy = homepageCopy.contact;

function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="font-mono text-xl font-black tabular-nums">
      {time.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZone: "Asia/Jakarta",
      })}
    </span>
  );
}

export function ContactSection() {
  const { language } = useLanguage();
  const isMobile = useIsMobile();

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
                className={cn(buttonVariants("primary", "md"), "whitespace-nowrap")}
                href={SITE_CONFIG.whatsapp}
                rel="noopener noreferrer"
                target="_blank"
              >
                <MessageCircle size={18} strokeWidth={3} aria-hidden="true" />
                {getText(contactCopy.whatsappCta, language)}
              </a>
              <a className={cn(buttonVariants("accent", "md"), "whitespace-nowrap")} href={`mailto:${SITE_CONFIG.email}`} target="_blank" rel="noopener noreferrer">
                <Mail size={18} strokeWidth={3} aria-hidden="true" />
                {getText(contactCopy.emailCta, language)}
              </a>
              <CvDownloadButton variant="outline" className="whitespace-nowrap" />
              <a
                className={cn(buttonVariants("outline", "md"), "bg-[#111111] !text-white hover:bg-[#222222] border-[#111111] whitespace-nowrap")}
                href={SITE_CONFIG.github}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon icon="simple-icons:github" className="h-[18px] w-[18px] !text-white" aria-hidden="true" />
                {getText(contactCopy.githubCta, language)}
              </a>
            </FinalCtaPanel>

            {/* New Informative Card below Main CTA */}
            <div className="mt-7">
              <AnimatedSection delay={0.1}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border-[3px] border-[var(--border)] bg-white p-5 shadow-[5px_5px_0_var(--border)]">
                    <div className="flex items-center gap-2 text-[var(--primary)] mb-2">
                      <MapPin size={18} strokeWidth={3} />
                      <span className="text-xs font-black uppercase tracking-widest">Base Location</span>
                    </div>
                    <p className="font-heading text-xl font-extrabold">Jakarta, Indonesia</p>
                    <div className="mt-3 flex items-center gap-2 border-t-2 border-dashed border-[var(--border)]/10 pt-3">
                      <Clock size={16} className="text-[var(--muted)]" />
                      <LiveClock />
                    </div>
                  </div>

                  <div className="rounded-2xl border-[3px] border-[var(--border)] bg-[var(--purple)] p-5 text-white shadow-[5px_5px_0_var(--border)]">
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase size={18} strokeWidth={3} />
                      <span className="text-xs font-black uppercase tracking-widest opacity-80">Work Inquiry</span>
                    </div>
                    <p className="font-heading text-xl font-extrabold">Remote / Hybrid</p>
                    <div className="mt-3 flex flex-wrap gap-2 pt-1">
                      {["Freelance", "Full-time"].map((tag) => (
                        <span key={tag} className="rounded-lg border-2 border-white/20 bg-white/10 px-2 py-0.5 text-[10px] font-black uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
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
                    initial={isMobile ? false : { opacity: 0, y: 16 }}
                    whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
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
