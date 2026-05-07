import type { BilingualList, BilingualText } from "./common.types";

export type ProjectStatus =
  | "Flagship Project"
  | "Live"
  | "Development"
  | "Demo"
  | "Archived";

export type Project = {
  slug: string;
  title: string;
  subtitle: BilingualText;
  description: BilingualText;
  overview?: BilingualText;
  problem?: BilingualText;
  role: string;
  stack: string[];
  features: BilingualList;
  responsibilities?: BilingualList;
  challenges?: BilingualList;
  results?: BilingualList;
  route: string;
  github?: string;
  liveUrl?: string;
  status: ProjectStatus | string;
  accent: "blue" | "orange" | "lime" | "purple";
  screenshotsKey?: "dpfWakaf" | "donetea" | "laundry";
};
