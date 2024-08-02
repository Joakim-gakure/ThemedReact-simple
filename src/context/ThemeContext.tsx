// src/context/ThemeContext.tsx
import React, { createContext, useContext, useState, ReactNode, FC } from 'react';
import { Theme, lightTheme } from '../themes';

interface ThemeContextType<T> {
  theme: T;
  setTheme: (theme: T) => void;
}

// Create a context with a generic type
const ThemeContext = createContext<ThemeContextType<Theme> | undefined>(undefined);

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(lightTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Use a generic type for the useTheme hook
const useTheme = <T,>(): ThemeContextType<T> => {
  const context = useContext(ThemeContext) as ThemeContextType<T> | undefined;
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export { ThemeProvider, useTheme };
