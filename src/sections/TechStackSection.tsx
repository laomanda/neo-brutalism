import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { motion } from "motion/react";
import { Container } from "../components/common/Container";
import OrbitingTech from "../components/ui/OrbitingTech";
import { homepageCopy } from "../data/homepageCopy.data";
import { techStack } from "../data/techStack.data";
import { useLanguage } from "../hooks/useLanguage";
import { getText } from "../utils/getText";

const stackCopy = homepageCopy.techStack;

export function TechStackSection() {
  const { language } = useLanguage();
  const [screenSize, setScreenSize] = useState({ baseWidth: 1600, radius: 650, itemSize: 130 });

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 1024;
      setScreenSize({
        baseWidth: isMobile ? 900 : 1600,
        radius: isMobile ? 380 : 650,
        itemSize: isMobile ? 140 : 130,
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderIcons = (items: typeof techStack) =>
    items.map((tech) => (
      <div
        key={tech.name}
        style={{ "--hover-bg": tech.color } as React.CSSProperties}
        className="group relative flex h-20 w-20 items-center justify-center rounded-[1.5rem] border-[3px] border-[var(--border)] bg-[var(--background)] p-4 shadow-[8px_8px_0_var(--border)] transition-all duration-500 hover:-translate-y-3 hover:rotate-2 hover:bg-[var(--hover-bg)] hover:shadow-[12px_12px_0_var(--border)] lg:h-24 lg:w-24"
      >
        {/* Subtle Luminous Aura */}
        <div className="absolute inset-0 rounded-[1.2rem] bg-white opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20" />
        
        <Icon 
          icon={tech.icon} 
          className="relative z-10 h-full w-full transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]" 
        />
        
        {/* Mature Tooltip */}
        <div 
          className="pointer-events-none absolute -bottom-14 left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-xl border-[3px] border-[var(--border)] px-5 py-2 text-[10px] font-black uppercase tracking-widest text-white opacity-0 shadow-[6px_6px_0_var(--border)] transition-all duration-300 group-hover:opacity-100"
          style={{ backgroundColor: tech.color }}
        >
          {tech.name}
        </div>
      </div>
    ));

  return (
    <section id="stack" className="relative overflow-hidden py-32 lg:py-48">
      {/* Cinematic Background Elements */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--lime)]/[0.03] blur-[180px]" />
        <div className="absolute inset-0 bg-[url(&quot;data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E&quot;)] opacity-[0.03] brightness-0 invert" />
      </div>

      <Container>
        <div className="relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 rounded-lg border-2 border-[var(--border)] bg-[var(--background)] px-3 py-1 text-[10px] font-bold uppercase tracking-widest shadow-[3px_3px_0_var(--border)]"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-[var(--lime)]" />
            Core Stack
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-8 font-heading text-[clamp(2.5rem,8vw,5.5rem)] font-black uppercase leading-[1.1] tracking-tight text-[var(--foreground)] lg:max-w-5xl"
          >
            {getText(stackCopy.title, language)}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base font-medium leading-relaxed text-[var(--foreground)]/70 lg:text-xl"
          >
            {getText(stackCopy.description, language)}
          </motion.p>
        </div>

        {/* Orbiting Tech Visualization */}
        <div className="relative mt-12 flex min-h-[600px] items-center justify-center overflow-hidden lg:mt-0 lg:min-h-[850px]">
          <OrbitingTech
            items={renderIcons(techStack)}
            shape="circle"
            baseWidth={screenSize.baseWidth}
            radius={screenSize.radius}
            duration={60}
            direction="normal"
            responsive
            className="absolute"
            itemSize={screenSize.itemSize}
            showPath={true}
            pathColor="var(--border)"
            pathWidth={2}
            centerContent={
              <motion.div 
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0, -5, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="relative flex h-32 w-32 items-center justify-center rounded-3xl border-[4px] border-[var(--border)] bg-[var(--lime)] shadow-[10px_10px_0_var(--border)] lg:h-48 lg:w-48"
              >
                <Icon 
                  icon="material-symbols:terminal-rounded" 
                  className="h-1/2 w-1/2 text-[var(--foreground)]" 
                />
                
                {/* Decorative scanning line */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <motion.div 
                    animate={{ y: ["-100%", "200%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="h-1/2 w-full bg-gradient-to-b from-transparent via-white/30 to-transparent"
                  />
                </div>
              </motion.div>
            }
          />
          
          {/* Decorative Inner Circle */}
          <div className="pointer-events-none absolute h-[300px] w-[300px] rounded-full border-2 border-dashed border-[var(--border)] opacity-10 lg:h-[600px] lg:w-[600px]" />
        </div>
      </Container>
    </section>
  );
}
