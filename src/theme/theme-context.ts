import { createContext } from "react";

export type ThemeName = "editorial" | "signal";

export interface ThemeContextValue {
  theme: ThemeName;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);
