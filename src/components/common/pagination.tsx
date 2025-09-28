'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Pagination({ pageCount }: { pageCount: number }) {
  const pathName = usePathname();
  const searchParams = useSearchParams();

  if (pageCount === 0) {
    return null;
  }

  const createHref = (index: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', index.toString());
    return `${pathName}?${params.toString()}`;
  };

  const currentPage = parseInt(searchParams.get('page') || '1');

  return (
    <div className="flex flex-row items-center justify-center gap-2 mt-12">
      {Array.from({ length: pageCount }).map((_, i) => {
        const pageNumber = i + 1;
        const active = currentPage === pageNumber;

        return (
          <Link
            key={i}
            href={createHref(pageNumber)}
            className={`
              flex items-center justify-center min-w-12 h-12 rounded-lg font-semibold transition-all duration-200
              border hover:scale-105 active:scale-95
              ${
                active
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg border-transparent scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md'
              }
            `}
          >
            {pageNumber}
          </Link>
        );
      })}
    </div>
  );
}
