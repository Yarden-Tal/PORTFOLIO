import React, { createContext, useContext, useState } from "react";
import { ThemeContextType } from "../ts/interfaces";

const initialThemeContext: ThemeContextType = {
  isDarkMode: true,
  toggleTheme: () => {},
};

const DARK_MODE_KEY: string = "darkMode";

export const ThemeContext = createContext(initialThemeContext);

export const ThemeProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  // const storedDarkMode: string | null = localStorage.getItem(DARK_MODE_KEY);
  // const isDarkOnStorage: boolean = (storedDarkMode === "true");

  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  const toggleTheme = (): void => {
    const newDarkMode: boolean = !isDarkMode;
    setIsDarkMode(newDarkMode);
    // localStorage.setItem(DARK_MODE_KEY, String(newDarkMode));
  };

  const themeContextValue: ThemeContextType = {
    isDarkMode,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <div className={isDarkMode ? "dark-theme" : "light-theme"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => useContext(ThemeContext);
