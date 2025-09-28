'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LinkProps {
  href: string;
  label: string;
  classes?: string;
  mobile?: boolean;
}

export default function LinkPro({
  href,
  label,
  classes = '',
  mobile = false,
}: LinkProps) {
  const path = usePathname();
  const isActive = path === href || path.endsWith(label.toLowerCase());

  const baseStyles = `
    px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-200
    text-gray-600 dark:text-gray-400 
    hover:text-gray-900 dark:hover:text-gray-100 
    hover:bg-white/70 dark:hover:bg-gray-800/70
    hover:shadow-sm border border-transparent
    ${mobile ? 'w-full text-left' : ''}
  `;

  const activeStyles = `
    px-4 py-2.5 rounded-lg font-semibold text-sm
    bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30
    text-blue-700 dark:text-blue-300
    border border-blue-200 dark:border-blue-800
    shadow-sm
    ${mobile ? 'w-full text-left' : ''}
  `;

  return (
    <Link
      href={href}
      className={`${
        isActive ? activeStyles : baseStyles
      } ${classes} group relative overflow-hidden`}
    >
      {/* Active indicator */}
      {isActive && (
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500" />
      )}

      {/* Hover effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

      <span className="relative z-10">{label}</span>
    </Link>
  );
}
