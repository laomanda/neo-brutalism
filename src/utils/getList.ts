import type { BilingualList, Language } from "../types/common.types";

export function getList(list: BilingualList, language: Language) {
  return list[language] ?? list.id;
}
