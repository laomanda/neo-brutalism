import type { BilingualText, Language } from "../types/common.types";

export function getText(text: BilingualText | undefined | null, language: Language): string {
  if (!text) return "";
  return text[language] ?? text.id ?? "";
}

