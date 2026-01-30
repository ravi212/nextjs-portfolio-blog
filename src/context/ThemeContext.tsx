"use client";
import React, { createContext, useEffect, useState } from "react";
export const ThemeContext = createContext({} as ThemeContextProps);

// A Context provider for theme
const ThemeContextProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  if (!mounted) return null; // prevents mismatch
  return (
    <ThemeContext.Provider value={{ theme,  switchThemeTo: setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
