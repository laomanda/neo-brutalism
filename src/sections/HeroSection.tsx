import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { BrutalMarquee } from "../components/common/BrutalMarquee";
import { Container } from "../components/common/Container";
import { ProfilePoster } from "../components/common/ProfilePoster";
import { SkillTag } from "../components/common/SkillTag";
import { Badge } from "../components/ui/Badge";
import { buttonVariants } from "../components/ui/buttonVariants";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { SITE_CONFIG } from "../constants/site";
import { homepageCopy } from "../data/homepageCopy.data";
import { useLanguage } from "../hooks/useLanguage";
import { getText } from "../utils/getText";

const heroCopy = homepageCopy.hero;

export function HeroSection() {
  const { language } = useLanguage();

  return (
    <section id="home" className="section-padding overflow-hidden pt-6">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-wrap gap-3">
              <Badge variant="category">{getText(heroCopy.eyebrow, language)}</Badge>
            </div>
            <h1 className="text-balance-custom mt-6 max-w-5xl text-4xl font-extrabold leading-[1.04] sm:text-5xl lg:text-7xl">
              {getText(heroCopy.title, language)}
            </h1>
            <p className="mt-6 max-w-3xl text-base font-semibold leading-7 text-[var(--foreground)]/80 sm:text-lg">
              {getText(heroCopy.description, language)}
            </p>
            <p className="mt-5 inline-flex rounded-full border-2 border-[var(--border)] bg-[var(--lime)] px-4 py-2 text-sm font-extrabold text-[#111111] shadow-[4px_4px_0_var(--border)]">
              {getText(heroCopy.roleNote, language)}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {heroCopy.skillTags.map((tag) => (
                <SkillTag key={tag}>{tag}</SkillTag>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link className={buttonVariants("primary", "md")} to="/#featured">
                {getText(heroCopy.primaryCta, language)} <ArrowDown size={18} strokeWidth={3} />
              </Link>
              <Link className={buttonVariants("outline", "md")} to="/#case-study">
                {getText(heroCopy.secondaryCta, language)} <ArrowUpRight size={18} strokeWidth={3} />
              </Link>
              {SITE_CONFIG.cvReady ? (
                <a className={buttonVariants("secondary", "md")} href={SITE_CONFIG.cvPath} rel="noopener noreferrer" target="_blank">
                  {getText(heroCopy.downloadCta, language)} <Download size={18} strokeWidth={3} aria-hidden="true" />
                </a>
              ) : (
                <button className={buttonVariants("secondary", "md")} type="button" disabled aria-disabled="true">
                  {getText(heroCopy.cvPending, language)} <Download size={18} strokeWidth={3} aria-hidden="true" />
                </button>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ rotate: -1, y: -5 }}
          >
            <ProfilePoster language={language} />
          </motion.div>
        </div>
      </Container>
      <BrutalMarquee />
    </section>
  );
}
