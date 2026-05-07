import type { BilingualList, BilingualText } from "./common.types";

export type ProductService = {
  slug: string;
  title: BilingualText;
  description: BilingualText;
  route: string;
  deliverables: BilingualList;
  accent: "blue" | "orange" | "lime" | "purple";
  targetUsers?: BilingualList;
  process?: BilingualList;
  note?: BilingualText;
};
