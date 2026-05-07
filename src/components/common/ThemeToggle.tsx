import { Moon, Sun } from "lucide-react";
import { uiCopy } from "../../data/uiCopy.data";
import { useLanguage } from "../../hooks/useLanguage";
import { useTheme } from "../../hooks/useTheme";
import { getText } from "../../utils/getText";

export function ThemeToggle() {
  const { language } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      aria-label={getText(isDark ? uiCopy.themeLabels.light : uiCopy.themeLabels.dark, language)}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-[var(--border)] bg-[var(--card)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary)]"
      type="button"
      onClick={toggleTheme}
    >
      {isDark ? <Sun size={18} strokeWidth={3} aria-hidden="true" /> : <Moon size={18} strokeWidth={3} aria-hidden="true" />}
    </button>
  );
}
