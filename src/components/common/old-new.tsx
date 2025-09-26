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

  const active = (val: string) => {
    return `${val === currentOrder ? 'underline' : ''}`;
  };

  return (
    <div className="flex flex-row gap-2 *:text-sm text-gray-900 dark:*:text-gray-100 *:hover:underline">
      <Link className={active('oldest')} href={oldestUrl}>
        Oldest
      </Link>
      <Link className={active('newest')} href={newestUrl}>
        Newest
      </Link>
    </div>
  );
}
