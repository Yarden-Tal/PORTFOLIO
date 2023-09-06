import React, { createContext, useContext, useState } from "react";
import { ThemeContextType } from "../ts/interfaces";

const initialThemeContext: ThemeContextType = {
  isDarkMode: false,
  toggleTheme: () => { },
};

const DARK_MODE_KEY: string = "darkMode";

export const ThemeContext = createContext(initialThemeContext);

export const ThemeProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  
const storedDarkMode: string | null = localStorage.getItem(DARK_MODE_KEY);
const isDarkOnStorage: boolean = (storedDarkMode === "true");

  /**
   * Dark mode source-of-truth
   */
  const [isDarkMode, setIsDarkMode] = useState<boolean>(isDarkOnStorage);

  /**
   * Toggles between dark & light mode & saves choice in local-storage
   */
  const toggleTheme = (): void => {
    const newDarkMode: boolean = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem(DARK_MODE_KEY, String(newDarkMode));
  };

  const themeContextValue: ThemeContextType = {
    isDarkMode,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => useContext(ThemeContext);
