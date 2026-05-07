export const THEME_COLORS = {
  light: {
    background: "#F4F1E8",
    foreground: "#111111",
    card: "#FFFFFF",
    primary: "#2563EB",
    orange: "#FF6B35",
    lime: "#B6FF3B",
    purple: "#8B5CF6",
    border: "#111111",
  },
  dark: {
    background: "#111111",
    foreground: "#F4F1E8",
    card: "#1A1A1A",
    primary: "#60A5FA",
    orange: "#FF7A45",
    lime: "#C7FF4A",
    purple: "#A78BFA",
    border: "#F4F1E8",
  },
} as const;

export const SHADOWS = {
  default: "6px 6px 0 var(--border)",
  hover: "10px 10px 0 var(--border)",
} as const;
