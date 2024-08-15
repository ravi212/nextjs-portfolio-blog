"use client"
import React, { createContext, useState } from "react";
export const ThemeContext = createContext({} as ThemeContextProps);

// A Context provider for theme
const ThemeContextProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState("light");

  // fucntion to switch theme to light or dark
  const switchThemeTo = (theme: string) => {
    setTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, switchThemeTo }}>
      <body
        className={`${theme} anim `}
      >
        {children}
      </body>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
