// src/components/ThemeSwitcher.tsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Theme, lightTheme, darkTheme } from '../themes';

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme<Theme>();

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <button onClick={toggleTheme} style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      Toggle Theme
    </button>
  );
};

export default ThemeSwitcher;
