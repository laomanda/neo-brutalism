import { Card, type Accent } from "../ui/Card";
import type { LucideIcon } from "lucide-react";

type InfoGridItem = {
  label: string;
  value: string;
  icon?: LucideIcon;
  accent?: Accent;
};

type InfoGridProps = {
  items: InfoGridItem[];
};

export function InfoGrid({ items }: InfoGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, index) => {
        const accents: Accent[] = ["blue", "lime", "orange", "purple"];
        const Icon = item.icon;
        
        return (
          <Card 
            key={item.label} 
            accent={item.accent || accents[index % accents.length]} 
            className="group relative overflow-hidden p-6" 
            interactive
          >
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-widest text-black/40">{item.label}</p>
                <p className="font-heading text-lg font-black leading-tight tracking-tight">{item.value}</p>
              </div>
              {Icon && (
                <div className="rounded-xl border-2 border-black bg-white p-2 shadow-[2px_2px_0_black] transition-transform group-hover:rotate-12">
                  <Icon size={18} strokeWidth={3} />
                </div>
              )}
            </div>
            
            {/* Subtle background decoration */}
            <div className="absolute -bottom-2 -right-2 h-12 w-12 rounded-full bg-black/5 blur-xl" />
          </Card>
        );
      })}
    </div>
  );
}
