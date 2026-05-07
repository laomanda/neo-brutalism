import type { Accent } from "../ui/Card";
import { Card } from "../ui/Card";

type ScreenshotPlaceholderGridProps = {
  projectTitle: string;
  labels: string[];
  emptyLabel: string;
  accent?: Accent;
};

export function ScreenshotPlaceholderGrid({
  projectTitle,
  labels,
  emptyLabel,
  accent = "default",
}: ScreenshotPlaceholderGridProps) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {labels.map((label, index) => (
        <Card key={label} accent={accent} className="overflow-hidden p-0" interactive>
          <div className="flex gap-2 border-b-[3px] border-[var(--border)] p-3">
            <span className="h-3 w-3 rounded-full bg-[var(--orange)]" />
            <span className="h-3 w-3 rounded-full bg-[var(--lime)]" />
            <span className="h-3 w-3 rounded-full bg-[var(--primary)]" />
          </div>
          <div className="min-h-56 bg-[var(--background)] p-4">
            <div className="flex h-48 flex-col justify-between rounded-2xl border-[3px] border-dashed border-[var(--border)] bg-[var(--card)] p-4">
              <p className="font-heading text-2xl font-extrabold">{label}</p>
              <div>
                <p className="text-xs font-extrabold uppercase text-[var(--foreground)]/60">{projectTitle}</p>
                <p className="mt-1 text-sm font-bold text-[var(--foreground)]/70">
                  {emptyLabel} #{index + 1}
                </p>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
