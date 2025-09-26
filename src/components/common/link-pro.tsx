'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LinkProps {
  href: string;
  label: string;
  classes?: string;
}

export default function LinkPro({ href, label, classes = '' }: LinkProps) {
  const path = usePathname();

  const style = path.endsWith(label.toLowerCase());

  const baseStyles = `
    px-3 py-1.5 
    text-gray-900 hover:text-gray-100 hover:bg-gray-900
    dark:text-gray-100 dark:hover:text-gray-900 dark:hover:bg-gray-100
    `;

  const styledStyles = `
    px-3 py-1.5
    bg-gray-900 text-gray-100 hover:bg-gray-800
    dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200
    `;

  return (
    <Link
      href={href}
      className={`${style ? styledStyles : baseStyles} ${classes}`}
    >
      {label}
    </Link>
  );
}
