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

  const renderIcons = (items: typeof techStack) =>
    items.map((tech) => (
      <div
        key={tech.name}
        style={{ "--hover-bg": tech.color } as React.CSSProperties}
        className="group relative flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-[var(--border)] bg-[var(--background)] p-4 shadow-[6px_6px_0_var(--border)] transition-all duration-300 hover:rotate-6 hover:scale-110 hover:bg-[var(--hover-bg)] lg:h-24 lg:w-24"
      >
        {/* White Glow Background on Hover */}
        <div className="absolute inset-4 rounded-xl bg-white/40 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
        
        <Icon 
          icon={tech.icon} 
          className="relative z-10 h-full w-full transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" 
        />
        
        {/* Tooltip on hover */}
        <div 
          className="pointer-events-none absolute -bottom-14 left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-lg border-2 border-[var(--border)] px-4 py-1.5 text-xs font-black uppercase text-white opacity-0 shadow-[4px_4px_0_var(--border)] transition-all duration-300 group-hover:opacity-100"
          style={{ backgroundColor: tech.color }}
        >
          {tech.name}
        </div>
      </div>
    ));

  return (
    <section id="stack" className="relative overflow-hidden py-24 lg:py-48">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[800px] w-[800px] rounded-full bg-[var(--lime)]/5 blur-[150px]" />
      </div>

      <Container>
        <div className="relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-sm font-black uppercase tracking-[0.3em] text-[var(--lime)]"
          >
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 font-heading text-[clamp(3rem,10vw,7rem)] font-black uppercase leading-[0.8] text-[var(--foreground)]"
          >
            {getText(stackCopy.title, language)}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-8 max-w-2xl text-xl font-bold leading-relaxed text-[var(--foreground)]/60"
          >
            {getText(stackCopy.description, language)}
          </motion.p>
        </div>

        {/* Orbiting Tech Visualization */}
        <div className="relative mt-12 flex min-h-[700px] items-center justify-center lg:mt-0">
          {/* Unified Large Orbit */}
          <OrbitingTech
            items={renderIcons(techStack)}
            shape="circle"
            radius={window.innerWidth < 1024 ? 350 : 500}
            duration={50}
            direction="normal"
            responsive
            className="absolute"
            itemSize={window.innerWidth < 1024 ? 80 : 96}
            showPath={true}
            pathColor="var(--border)"
            pathWidth={3}
          />
        </div>

        {/* Decorative Grid Background for Orbit */}
        <div className="absolute inset-0 -z-20 [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]">
          <div className="h-full w-full bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:80px_80px] opacity-10" />
        </div>
      </Container>
    </section>
  );
}
