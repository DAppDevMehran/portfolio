import { useState } from 'react';
import { useCookies } from 'react-cookie';

type Theme = 'dark' | 'light';

const useDarkMode = (defaultTheme: Theme = 'dark') => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [_, setCookie] = useCookies(['theme']);

  const setAndSaveTheme = (theme: Theme): void => {
    setTheme(theme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    setCookie('theme', theme);
  };

  const toggleTheme = (): void => {
    setAndSaveTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return { theme, toggleTheme };
};

export default useDarkMode;
