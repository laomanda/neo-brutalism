import { Icon } from "@iconify/react";
import { homepageCopy } from "../../data/homepageCopy.data";
import type { TechStackItem } from "../../data/techStack.data";
import type { Language } from "../../types/common.types";
import { getText } from "../../utils/getText";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";
import { IconBox } from "../ui/IconBox";

type TechCardProps = {
  tech: TechStackItem;
  language: Language;
};

const categoryAccent = {
  frontend: "blue",
  backend: "orange",
  database: "purple",
  tools: "lime",
} as const;

export function TechCard({ tech, language }: TechCardProps) {
  return (
    <Card className="group flex min-h-48 flex-col gap-5" accent={categoryAccent[tech.category]} interactive>
      <div className="flex items-start justify-between gap-4">
        <IconBox
          accent={categoryAccent[tech.category]}
          className="bg-[var(--card)] text-[var(--foreground)] transition group-hover:-rotate-2 group-hover:scale-105"
        >
          <Icon icon={tech.icon} className="h-9 w-9 transition group-hover:scale-110" aria-hidden="true" />
        </IconBox>
        <Badge variant="category">{getText(homepageCopy.techStack.filterLabels[tech.category], language)}</Badge>
      </div>
      <div>
        <h3 className="text-2xl font-extrabold">{tech.name}</h3>
        <p className="mt-2 text-sm font-semibold leading-6 text-[var(--foreground)]/80">
          {getText(tech.description, language)}
        </p>
      </div>
    </Card>
  );
}
