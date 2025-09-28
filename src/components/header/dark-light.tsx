'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/20/solid';

export default function DarkLight() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) {
    return (
      <div className="w-20 h-10 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center w-20 h-10 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 border border-gray-300 dark:border-gray-600 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 active:scale-95 group"
    >
      {/* Toggle switch */}
      <div
        className={`absolute left-1 w-8 h-8 rounded-full bg-white dark:bg-gray-900 shadow-lg transform transition-all duration-300 ease-in-out ${
          theme === 'dark' ? 'translate-x-9' : 'translate-x-0'
        }`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {theme === 'light' ? (
            <SunIcon className="w-4 h-4 text-yellow-500" />
          ) : (
            <MoonIcon className="w-4 h-4 text-blue-400" />
          )}
        </div>
      </div>

      {/* Labels */}
      <div className="flex justify-between items-center w-full px-3 text-xs font-medium">
        <span
          className={`transition-colors duration-200 ${
            theme === 'light' ? 'text-yellow-600' : 'text-gray-500'
          }`}
        >
          Light
        </span>
        <span
          className={`transition-colors duration-200 ${
            theme === 'dark' ? 'text-blue-400' : 'text-gray-500'
          }`}
        >
          Dark
        </span>
      </div>
    </button>
  );
}
