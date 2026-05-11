import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { CaseStudyStep } from "../components/common/CaseStudyStep";
import { SectionHeader } from "../components/common/SectionHeader";
import { homepageCopy } from "../data/homepageCopy.data";
import { useLanguage } from "../hooks/useLanguage";
import { getText } from "../utils/getText";
import bgImage from "../assets/images/bg.webp";

const caseStudyCopy = homepageCopy.caseStudy;

export function CaseStudySection() {
  const { language } = useLanguage();
  
  // Stable Architectural Measurement Refs
  const targetRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);

  // ResizeObserver guarantees perfectly accurate measurements even if fonts/layout load late
  useEffect(() => {
    const updateScrollRange = () => {
      if (trackRef.current) {
        setScrollRange(trackRef.current.scrollWidth - window.innerWidth);
      }
    };
    
    updateScrollRange();
    
    const observer = new ResizeObserver(updateScrollRange);
    if (trackRef.current) {
      observer.observe(trackRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Pure numeric interpolation guarantees zero layout-thrashing
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);
  
  // Immersive Zoom Effect (Premium Cinematic Depth)
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.98, 1]);

  return (
    <section id="case-study" className="relative bg-[var(--background)]">

      <div className="relative z-10">
        {/* MOBILE ARCHITECTURE: Premium Vertical Stack (Hidden on md+) */}
        <div 
          className="block px-6 py-24 md:hidden relative bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          {/* Smooth Top Transition from previous section */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[var(--background)] to-transparent z-0" />
          
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-[var(--background)]/80 z-0" />
          
          {/* Smooth Bottom Transition to next section */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--background)] to-transparent z-0" />
          
          <div className="relative z-10 mb-16">
            <SectionHeader
              eyebrow={getText(caseStudyCopy.eyebrow, language)}
              title={getText(caseStudyCopy.title, language)}
              description={getText(caseStudyCopy.description, language)}
              className="text-left"
            />
          </div>
          <div className="relative z-10 flex flex-col gap-12">
            {caseStudyCopy.steps.map((step, index) => (
              <div key={step.title.en} className="w-full">
                <CaseStudyStep
                  number={`0${index + 1}`}
                  title={step.title}
                  description={step.description}
                  accent={step.accent}
                  icon={step.icon}
                  language={language}
                />
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP ARCHITECTURE: Cinematic Horizontal Journey (Hidden on mobile) */}
        <div className="hidden md:block">
          <div ref={targetRef} className="relative h-[400vh]">
            {/* Use flex-col justify-center so the track is perfectly centered regardless of screen height */}
            <div 
              className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${bgImage})` }}
            >
              
              {/* Smooth Top Transition from previous section */}
              <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[var(--background)] to-transparent z-0" />
              
              {/* Overlay to ensure text readability against the background image */}
              <div className="absolute inset-0 z-0 bg-[var(--background)]/80" />
              
              {/* Smooth Bottom Transition to next section */}
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--background)] to-transparent z-0" />

              {/* Cinematic Background Grid */}
              <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.05]">
                <div className="absolute left-1/3 h-full w-px bg-[var(--border)]" />
                <div className="absolute left-2/3 h-full w-px bg-[var(--border)]" />
                <div className="absolute top-1/2 w-full h-px bg-[var(--border)]" />
              </div>

              {/* Mathematically Stable Horizontal Track with Immersive Zoom */}
              <motion.div 
                ref={trackRef}
                style={{ x, scale, willChange: "transform" }} 
                className="relative z-10 flex items-center pl-16 lg:pl-32"
              >
                
                {/* SLIDE 1: Intro Frame */}
                <div className="flex w-[80vw] shrink-0 flex-col justify-center pr-16 lg:w-[45vw] lg:pr-32">
                  <SectionHeader
                    eyebrow={getText(caseStudyCopy.eyebrow, language)}
                    title={getText(caseStudyCopy.title, language)}
                    description={getText(caseStudyCopy.description, language)}
                    className="text-left"
                  />
                </div>

                {/* SLIDE 2 - 6: Process Frames */}
                <div className="flex gap-16 lg:gap-32 pr-[10vw]">
                  {caseStudyCopy.steps.map((step, index) => (
                    <div key={step.title.en} className="w-[70vw] shrink-0 lg:w-[45vw]">
                      <CaseStudyStep
                        number={`0${index + 1}`}
                        title={step.title}
                        description={step.description}
                        accent={step.accent}
                        icon={step.icon}
                        language={language}
                      />
                    </div>
                  ))}
                </div>
                
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
