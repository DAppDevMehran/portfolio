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

  const baseStyles =
    'text-sm rounded-full p-2 text-gray-800 dark:text-gray-100 hover:bg-gray-800 hover:text-gray-100 hover:shadow dark:hover:bg-gray-100 dark:hover:text-gray-800';
  const styledStyles =
    'text-sm rounded-full p-2 text-gray-100 bg-gray-800 dark:text-gray-800 dark:bg-gray-100';

  return (
    <ul className={'my-8 flex flex-row items-center justify-center gap-3.5'}>
      {Array.from({ length: pageCount }).map((_, i) => {
        const pageNumber = i + 1;
        const active = currentPage === pageNumber;

        return (
          <li key={i}>
            <Link
              href={createHref(pageNumber)}
              className={active ? styledStyles : baseStyles}
            >
              {pageNumber}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
