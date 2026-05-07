import { Card, type Accent } from "../ui/Card";
import { SectionNumber } from "./SectionNumber";

type ProcessStepsProps = {
  steps: string[];
  accent?: Accent;
};

export function ProcessSteps({ steps, accent = "default" }: ProcessStepsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {steps.map((step, index) => (
        <Card key={step} accent={accent} className="h-full" interactive>
          <SectionNumber value={`0${index + 1}`} />
          <h3 className="mt-5 text-xl font-extrabold">{step}</h3>
        </Card>
      ))}
    </div>
  );
}
