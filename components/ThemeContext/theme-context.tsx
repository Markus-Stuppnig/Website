"use client";

import React, { useEffect, useState, createContext, useContext } from "react";

type Theme = "light" | "dark";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    console.log("only light theme available right now: theme-context.tsx")
    // if (theme === "light") {
    //   setThemeOnWindow("dark");
    // } else {
    //   setThemeOnWindow("light");
    // }
  };

  const setThemeOnWindow = (newTheme: string) => {
    if (newTheme === "dark") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }

  useEffect(() => {
    // const localTheme = window.localStorage.getItem("theme") as Theme | null;

    // if (localTheme) {
    //   setTheme(localTheme);
    //   alert(localTheme)

    //   if (localTheme === "dark") {
    //     document.documentElement.classList.add("dark");
    //   }
    // } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    //   setTheme("dark");
    //   document.documentElement.classList.add("dark");
    // }

    setThemeOnWindow("light");

  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }

  return context;
}
