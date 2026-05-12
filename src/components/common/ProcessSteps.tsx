import { ArrowRight, ArrowDown } from "lucide-react";
import { Card, type Accent } from "../ui/Card";

type ProcessStepsProps = {
  steps: string[];
  accent?: Accent;
};

export function ProcessSteps({ steps, accent = "default" }: ProcessStepsProps) {
  return (
    <div className="relative grid gap-8 md:grid-cols-2 xl:grid-cols-4">
      {/* Background Flow Line (Large Screens) */}
      <div className="absolute left-0 top-[60px] hidden h-[3px] w-full border-t-[3px] border-dashed border-black/20 xl:block" />

      {steps.map((step, index) => (
        <div key={step} className="relative">
          <Card accent={accent} className="relative z-10 h-full border-[3px] border-black bg-white p-8 shadow-[6px_6px_0_black] transition-transform hover:-translate-y-1" interactive>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border-[3px] border-black bg-[var(--card-2)] font-heading text-xl font-black shadow-[3px_3px_0_black]">
              0{index + 1}
            </div>
            <h3 className="mt-6 text-xl font-black leading-tight uppercase tracking-tight">{step}</h3>
          </Card>

          {/* Connectors */}
          {index < steps.length - 1 && (
            <div className="absolute -right-6 top-1/2 hidden -translate-y-1/2 xl:block z-20">
               <div className="flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-black bg-[var(--lime)] shadow-[3px_3px_0_black]">
                <ArrowRight size={20} strokeWidth={3} />
               </div>
            </div>
          )}

          {/* Mobile Connectors */}
          {index < steps.length - 1 && (
            <div className="flex justify-center py-2 xl:hidden">
               <div className="flex h-8 w-8 items-center justify-center rounded-full border-[3px] border-black bg-[var(--lime)] shadow-[3px_3px_0_black]">
                <ArrowDown size={16} strokeWidth={3} />
               </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
