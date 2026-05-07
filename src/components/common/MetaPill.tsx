import { cn } from "../../utils/cn";

type MetaPillProps = {
  label: string;
  value?: string;
  className?: string;
};

export function MetaPill({ label, value, className }: MetaPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border-2 border-[var(--border)] bg-[var(--card)] px-3 py-1 text-xs font-extrabold uppercase shadow-[3px_3px_0_var(--border)]",
        className,
      )}
    >
      <span>{label}</span>
      {value ? <span className="text-[var(--primary)]">{value}</span> : null}
    </span>
  );
}
