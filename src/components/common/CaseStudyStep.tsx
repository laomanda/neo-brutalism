import type { BilingualText, Language } from "../../types/common.types";
import { getText } from "../../utils/getText";
import { Card, type Accent } from "../ui/Card";
import { SectionNumber } from "./SectionNumber";

type CaseStudyStepProps = {
  number: string;
  title: BilingualText;
  description: BilingualText;
  accent?: Accent;
  language: Language;
};

export function CaseStudyStep({ number, title, description, accent = "default", language }: CaseStudyStepProps) {
  return (
    <Card accent={accent} className="h-full" interactive>
      <SectionNumber value={number} />
      <h3 className="mt-5 text-2xl font-extrabold">{getText(title, language)}</h3>
      <p className="mt-3 text-sm font-semibold leading-6 text-[var(--foreground)]/80">
        {getText(description, language)}
      </p>
    </Card>
  );
}
