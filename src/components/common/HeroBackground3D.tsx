import { motion, useReducedMotion } from "motion/react";

type FloatAnimate = Partial<Record<"y" | "x" | "rotate" | "scale" | "opacity", number[]>>;
type StageStyle = {
  transformStyle: "preserve-3d";
  transform: string;
};

const codeRows = [
  { className: "w-full bg-[var(--primary)]/34", duration: 3 },
  { className: "w-[78%] bg-[var(--foreground)]/12", duration: 3.35 },
  { className: "w-[62%] bg-[var(--lime)]/26", duration: 3.7 },
  { className: "w-[88%] bg-[var(--foreground)]/10", duration: 4.05 },
  { className: "w-[46%] bg-[var(--orange)]/24", duration: 4.4 },
];

const floatTransition = (duration: number, delay = 0) => ({
  duration,
  delay,
  repeat: Infinity,
  repeatType: "mirror" as const,
  ease: "easeInOut" as const,
});

const mainStageStyle: StageStyle = {
  transformStyle: "preserve-3d",
  transform: "perspective(980px) rotateX(58deg) rotateY(-8deg) rotateZ(-18deg)",
};

const slabStageStyle: StageStyle = {
  transformStyle: "preserve-3d",
  transform: "perspective(760px) rotateX(54deg) rotateY(6deg) rotateZ(13deg)",
};

export default function HeroBackground3D() {
  const reduceMotion = useReducedMotion();

  const floating = (
    animate: FloatAnimate,
    duration: number,
    delay = 0,
  ) =>
    reduceMotion
      ? {}
      : {
          animate,
          transition: floatTransition(duration, delay),
        };

  return (
    <div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Back layer: one soft accent only; grid/glow already lives in MainLayout. */}
      <div className="absolute right-[7%] top-[12%] hidden h-40 w-40 rounded-full bg-[var(--primary)]/7 blur-2xl lg:block" />

      {/* Back/right layer: main pseudo-3D terminal board behind the poster area. */}
      <motion.div
        className="absolute right-[-3%] top-0 hidden h-[268px] w-[400px] opacity-75 lg:block xl:right-[1%] xl:w-[430px]"
        {...floating({ y: [-4, 4], x: [0, -3], scale: [1, 1.01] }, 11, 0.2)}
      >
        <div
          className="relative h-full w-full overflow-hidden rounded-2xl border-2 border-[var(--border)] bg-[var(--card)]/42 shadow-[4px_4px_0_var(--border)]"
          style={mainStageStyle}
        >
          <motion.div
            className="absolute left-0 right-0 top-0 h-px bg-[var(--lime)]/30"
            animate={reduceMotion ? {} : { y: [30, 205], opacity: [0, 0.36, 0] }}
            transition={{
              duration: 6.2,
              repeat: reduceMotion ? 0 : Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="absolute inset-x-4 top-4 flex items-center justify-between border-b-2 border-[var(--border)]/45 pb-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full border border-[var(--border)] bg-[var(--lime)]/55" />
              <span className="h-2.5 w-2.5 rounded-full border border-[var(--border)] bg-[var(--orange)]/45" />
              <span className="h-2.5 w-2.5 rounded-full border border-[var(--border)] bg-[var(--primary)]/45" />
              <span className="ml-2 font-mono text-[10px] font-black tracking-normal text-[var(--foreground)]/36">
                ui-stage.tsx
              </span>
            </div>
            <span className="h-2 w-16 rounded-full bg-[var(--foreground)]/10" />
          </div>

          <div className="absolute left-5 top-[4.25rem] flex gap-2">
            <span className="rounded-full border border-[var(--border)] bg-[var(--lime)]/36 px-2.5 py-1 font-mono text-[9px] font-black text-[var(--foreground)]/62 shadow-[2px_2px_0_var(--border)]">
              Frontend First
            </span>
            <span className="rounded-full border border-[var(--border)] bg-[var(--orange)]/28 px-2.5 py-1 font-mono text-[9px] font-black text-[var(--foreground)]/58 shadow-[2px_2px_0_var(--border)]">
              Laravel Flow
            </span>
          </div>

          <div className="absolute left-6 top-[7rem] grid w-[57%] gap-2">
            {codeRows.map((row, index) => (
              <motion.span
                key={row.className}
                className={`block h-2 rounded-full ${row.className}`}
                style={{ transformOrigin: "left" }}
                animate={
                  reduceMotion
                    ? {}
                    : {
                        scaleX: [1, 0.96, 1],
                        opacity: [0.7, 1, 0.7],
                      }
                }
                transition={{
                  duration: row.duration,
                  delay: index * 0.18,
                  repeat: reduceMotion ? 0 : Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <div
            className="absolute bottom-12 left-6 h-16 w-28 rounded-xl border-2 border-[var(--border)] bg-[var(--background)]/42 shadow-[3px_3px_0_var(--border)]"
            style={{ transform: "translateZ(16px)" }}
          >
            <div className="absolute left-3 top-3 h-2 w-12 rounded-full bg-[var(--orange)]/34" />
            <div className="absolute bottom-3 left-3 h-5 w-5 rounded-md border border-[var(--border)] bg-[var(--primary)]/30" />
          </div>

          <div
            className="absolute right-8 top-[5.5rem] h-14 w-14 rounded-xl border-2 border-[var(--border)] bg-[var(--lime)]/30 shadow-[3px_3px_0_var(--border)]"
            style={{ transform: "translateZ(20px)" }}
          />
          <div className="absolute inset-x-5 bottom-5 flex items-center justify-between rounded-xl border border-[var(--border)]/45 bg-[var(--card-2)]/36 px-3 py-2">
            <span className="flex items-center gap-2">
              <motion.span
                className="h-2.5 w-2.5 rounded-full border border-[var(--border)] bg-[var(--lime)]"
                animate={reduceMotion ? {} : { opacity: [1, 0.25, 1] }}
                transition={{
                  duration: 1.6,
                  repeat: reduceMotion ? 0 : Infinity,
                  ease: "easeInOut",
                }}
              />
              <span className="font-mono text-[9px] font-black tracking-normal text-[var(--foreground)]/48">
                Building Modern Web Interfaces
              </span>
            </span>
            <span className="h-2 w-10 rounded-full bg-[var(--purple)]/28" />
          </div>
        </div>
      </motion.div>

      {/* Lower-left layer: small layout slab kept away from the headline. */}
      <motion.div
        className="absolute bottom-[18%] left-[6%] hidden h-24 w-44 opacity-60 lg:block"
        {...floating({ y: [3, -3], x: [0, 2], scale: [1, 1.01] }, 10, 0.8)}
      >
        <div
          className="relative h-full w-full rounded-xl border-2 border-[var(--border)] bg-[var(--card-2)]/34 shadow-[4px_4px_0_var(--border)]"
          style={slabStageStyle}
        >
          <div className="absolute inset-x-4 top-4 h-2 rounded-full bg-[var(--orange)]/30" />
          <div className="absolute bottom-4 left-4 h-7 w-7 rounded-md border-2 border-[var(--border)] bg-[var(--background)]/45" />
          <div className="absolute bottom-5 right-4 h-3 w-16 rounded-full bg-[var(--primary)]/24" />
        </div>
      </motion.div>

      {/* Front-middle layer: compact wireframe cube on the safer right side. */}
      <motion.div
        className="absolute right-[14%] top-[44%] hidden h-11 w-11 rotate-[8deg] border-2 border-[var(--foreground)]/22 sm:block lg:right-[29%] lg:top-[32%]"
        {...floating({ y: [-3, 3], rotate: [8, 9.5] }, 9, 0.4)}
      >
        <div className="absolute -right-2 -top-2 h-11 w-11 border-2 border-[var(--foreground)]/10" />
        <div className="absolute left-0 top-0 h-11 w-11 border-2 border-[var(--foreground)]/10 [transform:skew(-6deg,-6deg)]" />
      </motion.div>

      {/* Front layer: sparse particles; mobile only keeps the small orange square. */}
      <motion.div
        className="absolute right-[10%] top-[58%] h-5 w-5 rotate-[3deg] rounded-md border-2 border-[var(--border)] bg-[var(--orange)]/42 shadow-[3px_3px_0_var(--border)] sm:right-[20%] sm:top-[52%]"
        {...floating({ y: [2, -3], rotate: [3, 4] }, 8, 0.5)}
      />
      <div className="absolute bottom-[16%] right-[34%] hidden h-4 w-14 rounded-full border-2 border-[var(--border)] bg-[var(--lime)]/34 shadow-[3px_3px_0_var(--border)] lg:block" />
      <div className="absolute right-[42%] top-[22%] hidden h-3 w-3 rounded-full border border-[var(--border)] bg-[var(--primary)]/42 sm:block" />
    </div>
  );
}
