import { motion } from "motion/react";
import { cn } from "../../utils/cn";

type SkillTagProps = {
  children: string;
  className?: string;
};

export function SkillTag({ children, className }: SkillTagProps) {
  return (
    <motion.span
      className={cn(
        "inline-flex rounded-full border-2 border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-extrabold shadow-[4px_4px_0_var(--border)]",
        className,
      )}
      whileHover={{ rotate: -2, scale: 1.04 }}
      transition={{ duration: 0.18 }}
    >
      {children}
    </motion.span>
  );
}
