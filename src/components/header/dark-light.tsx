'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/20/solid';

export default function DarkLight() {
  // const { theme, toggleTheme } = useDarkMode('dark');
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) return null;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="text-gray-900 dark:text-gray-100 hover:opacity-95 flex flex-row items-center justify-center gap-1.5"
    >
      {theme === 'light' ? (
        <>
          Dark <MoonIcon className="w-5 h-5" />
        </>
      ) : (
        <>
          Light <SunIcon className="w-5 h-5" />
        </>
      )}
    </button>
  );
}
