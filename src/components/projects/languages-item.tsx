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
      className={`max-w-min min-w-min px-1.5 py-1 bg-blue-700 rounded-full shadow-2xl text-xs text-white hover:opacity-70 ${
        active ? 'opacity-70 shadow-none' : ''
      }`}
      href={href}
    >
      {language}
    </Link>
  );
}
