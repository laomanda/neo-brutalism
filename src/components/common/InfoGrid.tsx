import { Card } from "../ui/Card";

type InfoGridItem = {
  label: string;
  value: string;
};

type InfoGridProps = {
  items: InfoGridItem[];
};

export function InfoGrid({ items }: InfoGridProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <Card key={item.label} className="p-4" interactive>
          <p className="text-xs font-extrabold uppercase text-[var(--foreground)]/60">{item.label}</p>
          <p className="mt-2 font-heading text-xl font-extrabold">{item.value}</p>
        </Card>
      ))}
    </div>
  );
}
