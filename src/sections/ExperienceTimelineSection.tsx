import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
} from "motion/react";
import { Container } from "../components/common/Container";
import { SectionHeader } from "../components/common/SectionHeader";
import { TimelineItem } from "../components/common/TimelineItem";
import { homepageCopy } from "../data/homepageCopy.data";
import { timelineItems } from "../data/timeline.data";
import { useLanguage } from "../hooks/useLanguage";
import type { Accent } from "../components/ui/Card";
import { getText } from "../utils/getText";
import { cn } from "../utils/cn";

const timelineCopy = homepageCopy.timeline;
const accents: Accent[] = ["blue", "lime", "orange", "purple"];

const nodeColors: Record<Accent, string> = {
  default: "#111111",
  blue: "#2563EB",
  orange: "#FF6B35",
  lime: "#15803d",
  purple: "#8B5CF6",
};

const THRESHOLDS = [0.05, 0.28, 0.52, 0.75] as const;

/*
 * Each card sits in its own full-width row, pushed horizontally.
 * This prevents any vertical overlap.
 *
 *  Row 0:  [Card1]_______________
 *  Row 1:  _______[Card2]________
 *  Row 2:  _______________[Card3]
 *  Row 3:  ___[Card4]____________
 */
const CARD_HORIZONTAL = [
  "lg:ml-0",                  // Card 1: flush left
  "lg:ml-[32%]",              // Card 2: 32%
  "lg:ml-[55%]",              // Card 3: 55% (Fixed percentage, NOT ml-auto)
  "lg:ml-[8%]",               // Card 4: 8%
];



export function ExperienceTimelineSection() {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [paths, setPaths] = useState<string[]>([]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 28,
    restDelta: 0.001,
  });

  const [activeIndex, setActiveIndex] = useState(-1);

  useMotionValueEvent(smoothProgress, "change", (v) => {
    if (v < THRESHOLDS[0]) setActiveIndex(-1);
    else if (v < THRESHOLDS[1]) setActiveIndex(0);
    else if (v < THRESHOLDS[2]) setActiveIndex(1);
    else if (v < THRESHOLDS[3]) setActiveIndex(2);
    else setActiveIndex(3);
  });

  const seg1 = useTransform(smoothProgress, [0.02, 0.26], [0, 1]);
  const seg2 = useTransform(smoothProgress, [0.26, 0.50], [0, 1]);
  const seg3 = useTransform(smoothProgress, [0.50, 0.73], [0, 1]);
  const segProgresses = [seg1, seg2, seg3];

  const mobileLineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  // Calculate pixel-perfect coordinates for the SVG flow lines
  useEffect(() => {
    const updatePaths = () => {
      if (!containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const newPaths: string[] = [];

      for (let i = 0; i < timelineItems.length - 1; i++) {
        const node1 = nodeRefs.current[i];
        const node2 = nodeRefs.current[i + 1];
        if (!node1 || !node2) {
          newPaths.push("");
          continue;
        }

        const r1 = node1.getBoundingClientRect();
        const r2 = node2.getBoundingClientRect();

        // Calculate center points relative to the container
        const x1 = r1.left - containerRect.left + r1.width / 2;
        const y1 = r1.top - containerRect.top + r1.height / 2;

        const x2 = r2.left - containerRect.left + r2.width / 2;
        const y2 = r2.top - containerRect.top + r2.height / 2;

        // Create a smooth cubic bezier curve
        // Start moving down, curve horizontally, then move down again to the target
        const midY = (y1 + y2) / 2;
        const d = `M ${x1} ${y1} C ${x1} ${midY}, ${x2} ${midY}, ${x2} ${y2}`;
        newPaths.push(d);
      }
      setPaths(newPaths);
    };

    updatePaths();
    // Add event listeners for resize to recalculate paths
    window.addEventListener("resize", updatePaths);
    // Add a slight delay for initial layout shifts (fonts loading, etc)
    const timeoutId = setTimeout(updatePaths, 100);

    return () => {
      window.removeEventListener("resize", updatePaths);
      clearTimeout(timeoutId);
    };
  }, []);

  // Map accents for the segments
  const getSegmentColor = (index: number) => {
    const accent = accents[(index + 1) % accents.length] ?? "default";
    return nodeColors[accent];
  };

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative overflow-hidden bg-[var(--background)] py-24 lg:py-40"
    >
      {/* Header */}
      <Container>
        <div className="mb-16 lg:mb-24">
          <SectionHeader
            eyebrow={getText(timelineCopy.eyebrow, language)}
            title={getText(timelineCopy.title, language)}
            description={getText(timelineCopy.description, language)}
          />
        </div>
      </Container>

      {/* Timeline Area */}
      <Container>
        <div ref={containerRef} className="relative">

          {/* ═══ DYNAMIC PIXEL-PERFECT DESKTOP FLOW LINES ═══ */}
          <svg
            className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full lg:block"
          >
            {paths.map((d, i) => (
              <g key={i}>
                <path
                  d={d}
                  stroke="var(--border)"
                  strokeWidth="4"
                  strokeDasharray="8 8"
                  opacity="0.1"
                  fill="none"
                />
                <motion.path
                  d={d}
                  stroke={getSegmentColor(i)}
                  strokeWidth="5"
                  strokeLinecap="round"
                  style={{ pathLength: segProgresses[i] }}
                  opacity="0.8"
                  fill="none"
                />
              </g>
            ))}
          </svg>

          {/* ═══ MOBILE VERTICAL LINE ═══ */}
          <div className="pointer-events-none absolute left-5 top-0 bottom-0 w-[3px] lg:hidden">
            <div className="h-full w-full rounded-full bg-[var(--border)] opacity-10" />
            <motion.div
              className="absolute left-0 top-0 w-full rounded-full bg-[var(--border)]"
              style={{ height: mobileLineHeight }}
            />
          </div>

          {/* ═══ DESKTOP CARDS ═══ */}
          <div className="hidden lg:flex lg:flex-col lg:gap-40">
            {timelineItems.map((item, index) => {
              const isActive = index <= activeIndex;
              const accent = accents[index % accents.length] ?? "default";
              const color = nodeColors[accent];

              return (
                <div key={item.title.en} className="relative z-20 w-full">
                  <div
                    className={cn(
                      "relative lg:max-w-sm",
                      CARD_HORIZONTAL[index]
                    )}
                  >
                    {/* Node — We attach the ref here! */}
                    <div
                      ref={(el) => {
                        nodeRefs.current[index] = el;
                      }}
                      className="absolute -top-7 left-6 z-20"
                    >
                      <motion.div
                        animate={{
                          scale: isActive ? 1.15 : 0.9,
                          backgroundColor: isActive ? color : "var(--background)",
                        }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="h-5 w-5 rounded-full border-[3px] border-[var(--border)] shadow-[2px_2px_0_var(--border)]"
                      />
                    </div>

                    <motion.div
                      animate={{ y: isActive ? -6 : 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <TimelineItem
                        item={item}
                        language={language}
                        accent={accent}
                        isActive={isActive}
                        index={index}
                      />
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ═══ MOBILE CARDS — vertical stack ═══ */}
          <div className="flex flex-col gap-10 pl-14 lg:hidden">
            {timelineItems.map((item, index) => {
              const isActive = index <= activeIndex;
              const accent = accents[index % accents.length] ?? "default";
              const color = nodeColors[accent];

              return (
                <div key={item.title.en} className="relative">
                  <div className="absolute -left-[46px] top-6 z-20">
                    <motion.div
                      animate={{
                        scale: isActive ? 1.1 : 0.85,
                        backgroundColor: isActive ? color : "var(--background)",
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="h-5 w-5 rounded-full border-[3px] border-[var(--border)] shadow-[2px_2px_0_var(--border)]"
                    />
                  </div>
                  <motion.div
                    animate={{ x: isActive ? 0 : -4 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <TimelineItem
                      item={item}
                      language={language}
                      accent={accent}
                      isActive={isActive}
                      index={index}
                    />
                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>
      </Container>

      {/* Subtle decoration */}
      <div className="pointer-events-none absolute -right-16 top-1/3 -z-10 hidden opacity-[0.04] lg:block">
        <div className="h-56 w-56 rotate-45 border-[6px] border-[var(--border)]" />
      </div>
    </section>
  );
}
