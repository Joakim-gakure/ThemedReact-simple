// src/components/ThemedComponent.tsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Theme } from '../themes';

const ThemedComponent: React.FC = () => {
  const { theme } = useTheme<Theme>();

  return (
    <div style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <p>This is a themed component!</p>
    </div>
  );
};

export default ThemedComponent;
