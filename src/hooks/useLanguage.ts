import { useCallback, useEffect, useState } from "react";
import type { Language } from "../types/common.types";

export type { Language } from "../types/common.types";

const STORAGE_KEY = "jakkob-language";
const LANGUAGE_CHANGE_EVENT = "jakkob-language-change";

function isLanguage(value: string | null): value is Language {
  return value === "id" || value === "en";
}

function readInitialLanguage(): Language {
  if (typeof window === "undefined") {
    return "id";
  }

  const storedLanguage = window.localStorage.getItem(STORAGE_KEY);
  return isLanguage(storedLanguage) ? storedLanguage : "id";
}

function persistLanguage(language: Language) {
  window.localStorage.setItem(STORAGE_KEY, language);
  window.dispatchEvent(new CustomEvent<Language>(LANGUAGE_CHANGE_EVENT, { detail: language }));
}

export function useLanguage() {
  const [language, setLanguageState] = useState<Language>(readInitialLanguage);

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    persistLanguage(nextLanguage);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(language === "id" ? "en" : "id");
  }, [language, setLanguage]);

  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY && isLanguage(event.newValue)) {
        setLanguageState(event.newValue);
      }
    };

    const handleCustomChange = (event: Event) => {
      const nextLanguage = (event as CustomEvent<Language>).detail;
      if (isLanguage(nextLanguage)) {
        setLanguageState(nextLanguage);
      }
    };

    window.addEventListener("storage", handleStorage);
    window.addEventListener(LANGUAGE_CHANGE_EVENT, handleCustomChange);

    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener(LANGUAGE_CHANGE_EVENT, handleCustomChange);
    };
  }, []);

  return {
    language,
    setLanguage,
    toggleLanguage,
  };
}
