'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export default function OldNew() {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const currentOrder = searchParams.get('order');

  const queryParamMaker = (val: string) => {
    const params = new URLSearchParams(searchParams);
    if (currentOrder === val) {
      params.delete('order');
    } else {
      params.set('order', val);
    }
    return `${pathName}?${params.toString()}`;
  };

  const oldestUrl = queryParamMaker('oldest');
  const newestUrl = queryParamMaker('newest');

  const isActive = (val: string) => currentOrder === val;

  return (
    <div className="flex flex-row gap-3 p-1 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 w-fit">
      <Link
        className={`
          px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
          ${
            isActive('oldest')
              ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm border border-gray-300 dark:border-gray-600'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-white/50 dark:hover:bg-gray-700/50'
          }
        `}
        href={oldestUrl}
      >
        Oldest
      </Link>
      <Link
        className={`
          px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
          ${
            isActive('newest')
              ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm border border-gray-300 dark:border-gray-600'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-white/50 dark:hover:bg-gray-700/50'
          }
        `}
        href={newestUrl}
      >
        Newest
      </Link>
    </div>
  );
}
