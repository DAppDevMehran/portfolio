'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

interface LanguagesItemProps {
  language: string;
}

export default function LanguagesItem({ language }: LanguagesItemProps) {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const languages = searchParams.get('language');
  const params = new URLSearchParams(searchParams);

  const availableLanguages = languages ? languages.split(',') : [];

  const alreadySelected = availableLanguages.includes(language);

  let selectedLanguages: string[];

  if (alreadySelected) {
    selectedLanguages = availableLanguages.filter((lang) => lang !== language);
  } else {
    selectedLanguages = [...availableLanguages, language];
  }

  if (selectedLanguages.length > 0) {
    params.set('language', selectedLanguages.join(','));
  } else {
    params.delete('language');
  }

  const active = alreadySelected;
  const href = `${pathName}?${params.toString()}`;

  return (
    <Link
      className={`
        inline-flex items-center px-3 py-2 rounded-full text-sm font-medium transition-all duration-200
        border hover:scale-105 active:scale-95
        ${
          active
            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg border-transparent'
            : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md'
        }
      `}
      href={href}
    >
      {language}
    </Link>
  );
}
