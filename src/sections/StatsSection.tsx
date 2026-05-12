import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Container } from "../components/common/Container";
import { SectionHeader } from "../components/common/SectionHeader";
import { StatCard } from "../components/common/StatCard";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { homepageCopy } from "../data/homepageCopy.data";
import { useLanguage } from "../hooks/useLanguage";
import { getText } from "../utils/getText";
import { SITE_CONFIG } from "../constants/site";

const statsCopy = homepageCopy.stats;
const accents = ["orange", "lime", "purple"] as const;

export function StatsSection() {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const username = SITE_CONFIG.github.split("/").pop() || "laomanda";

  const [githubData, setGithubData] = useState({
    repos: 0,
    contributions: 0,
    years: 0,
    loading: true
  });

  useEffect(() => {
    async function fetchStats() {
      try {
        // Fetch basic user data for Repos and Created Date
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        const userData = await userRes.json();
        
        // Fetch contribution data (using a public proxy service)
        const contribRes = await fetch(`https://github-contributions-api.deno.dev/${username}.json`);
        const contribData = await contribRes.json();
        
        const createdDate = new Date(userData.created_at);
        const now = new Date();
        const diffYears = now.getFullYear() - createdDate.getFullYear();
        
        setGithubData({
          repos: userData.public_repos || 0,
          contributions: contribData.totalContributions || 0,
          years: Math.max(diffYears, 1),
          loading: false
        });
      } catch (error) {
        console.error("Error fetching GitHub stats:", error);
        setGithubData(prev => ({ ...prev, loading: false }));
      }
    }
    
    fetchStats();
  }, [username]);

  const statsItems = [
    {
      value: githubData.contributions,
      suffix: "+",
      label: { id: "Kontribusi GitHub", en: "GitHub Contributions" },
      description: {
        id: "Total kontribusi saya di GitHub selama setahun terakhir.",
        en: "My total GitHub contributions over the past year."
      },
      accent: accents[0]
    },
    {
      value: githubData.repos,
      suffix: "",
      label: { id: "Public Repositories", en: "Public Repositories" },
      description: {
        id: "Jumlah repository publik yang saya kelola di GitHub.",
        en: "The number of public repositories I manage on GitHub."
      },
      accent: accents[1]
    },
    {
      value: githubData.years,
      suffix: " Tahun+",
      label: { id: "Pengalaman Coding", en: "Coding Experience" },
      description: {
        id: "Estimasi pengalaman sejak mulai aktif di platform GitHub.",
        en: "Estimated experience since starting on the GitHub platform."
      },
      accent: accents[2]
    }
  ];

  // Parallax Configuration
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={sectionRef} id="stats" className="relative overflow-hidden bg-[var(--background)] py-24 lg:py-32 scroll-mt-28">
      {/* Background Decorative Elements */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.02]" 
        style={{ backgroundImage: 'radial-gradient(currentColor 2px, transparent 2px)', backgroundSize: '24px 24px' }} 
      />
      
      {/* Applied Parallax to Decoration */}
      <motion.div 
        className="pointer-events-none absolute -right-20 top-40 hidden h-64 w-64 rounded-full border-[10px] border-[var(--border)] opacity-[0.03] lg:block" 
        style={{ y: yParallax }}
      />

      <Container className="relative z-10">
        <AnimatedSection>
          <div className="mb-16 max-w-2xl lg:mb-24">
            <SectionHeader
              eyebrow={getText(statsCopy.eyebrow, language)}
              title={getText(statsCopy.title, language)}
              description={getText(statsCopy.description, language)}
            />
          </div>
        </AnimatedSection>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {statsItems.map((item, index) => (
            <AnimatedSection key={item.label.en} delay={index * 0.1}>
              <StatCard
                value={githubData.loading ? "..." : item.value}
                suffix={githubData.loading ? "" : item.suffix}
                label={item.label}
                description={item.description}
                language={language}
                accent={item.accent}
              />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
