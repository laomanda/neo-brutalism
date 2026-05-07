import { useCallback, useEffect, useState } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "jakkob-theme";
const THEME_CHANGE_EVENT = "jakkob-theme-change";

function isTheme(value: string | null): value is Theme {
  return value === "light" || value === "dark";
}

function readInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = window.localStorage.getItem(STORAGE_KEY);
  return isTheme(storedTheme) ? storedTheme : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

function persistTheme(theme: Theme) {
  applyTheme(theme);
  window.localStorage.setItem(STORAGE_KEY, theme);
  window.dispatchEvent(new CustomEvent<Theme>(THEME_CHANGE_EVENT, { detail: theme }));
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(readInitialTheme);

  const setTheme = useCallback((nextTheme: Theme) => {
    setThemeState(nextTheme);
    persistTheme(nextTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [theme, setTheme]);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY && isTheme(event.newValue)) {
        setThemeState(event.newValue);
        applyTheme(event.newValue);
      }
    };

    const handleCustomChange = (event: Event) => {
      const nextTheme = (event as CustomEvent<Theme>).detail;
      if (isTheme(nextTheme)) {
        setThemeState(nextTheme);
        applyTheme(nextTheme);
      }
    };

    window.addEventListener("storage", handleStorage);
    window.addEventListener(THEME_CHANGE_EVENT, handleCustomChange);

    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener(THEME_CHANGE_EVENT, handleCustomChange);
    };
  }, []);

  return {
    theme,
    setTheme,
    toggleTheme,
  };
}
