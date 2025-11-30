'use client';

import { useEffect, useState, createContext } from "react";

type Theme = "light" | "dark";
type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      if (prevTheme === "light") {
        localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
        return "dark";
      }

      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      return "light";
    });
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme") as Theme | null;

    if (localTheme) {
      setTheme(localTheme);

      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
export { ThemeContext };
export type { ThemeContextType };