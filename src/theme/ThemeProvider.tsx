import {
  type PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { ThemeContext, type ThemeName } from "./theme-context";

const STORAGE_KEY = "web-top-theme";

export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<ThemeName>(() => {
    if (typeof window === "undefined") {
      return "editorial";
    }

    const savedTheme = window.localStorage.getItem(STORAGE_KEY);
    return savedTheme === "editorial" || savedTheme === "signal"
      ? savedTheme
      : "editorial";
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "editorial" ? "signal" : "editorial"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
