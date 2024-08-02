// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from './context/ThemeContext';
import ThemeSwitcher from './components/ThemeSwitcher';
import ThemedComponent from './components/ThemedComponent';

const App: React.FC = () => (
  <ThemeProvider>
    <ThemeSwitcher />
    <ThemedComponent />
  </ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
