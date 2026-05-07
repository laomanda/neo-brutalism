import { cn } from "../../utils/cn";

type SectionNumberProps = {
  value: string;
  className?: string;
};

export function SectionNumber({ value, className }: SectionNumberProps) {
  return (
    <span
      className={cn(
        "inline-flex h-12 min-w-12 items-center justify-center rounded-2xl border-[3px] border-[var(--border)] bg-[var(--lime)] px-3 font-heading text-xl font-extrabold text-[#111111] shadow-[4px_4px_0_var(--border)]",
        className,
      )}
    >
      {value}
    </span>
  );
}
