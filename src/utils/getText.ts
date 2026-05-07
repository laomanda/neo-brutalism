import type { BilingualText, Language } from "../types/common.types";

export function getText(text: BilingualText, language: Language) {
  return text[language] ?? text.id;
}
