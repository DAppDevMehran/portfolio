import Link from 'next/link';

interface RepoItemProps {
  name: string;
  description: string | null;
  language: string;
  stargazers_count: number;
  updated_at: string;
  html_url: string;
}

export default function RepoItem({
  name,
  description,
  language,
  stargazers_count,
  updated_at,
  html_url,
}: RepoItemProps) {
  const formattedDate = new Date(updated_at).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <li className="rounded-sm border-[1px] border-gray-700 dark:border-gray-400 hover:shadow-gray-500 transition hover:shadow-sm dark:hover:shadow-gray-200 hover:opacity-95 w-[49%] min-h-min max-h-min h-40">
      <Link
        href={html_url}
        className="h-full w-full p-4 flex flex-col justify-between"
      >
        <div>
          <div className="flex flex-row justify-between">
            <h2 className="text-lg font-semibold text-blue-500">{name}</h2>
            <span className="text-gray-900 dark:text-gray-200">
              ⭐ {stargazers_count}
            </span>
          </div>
          <p className="mt-1 text-sm text-gray-700 dark:text-gray-600">
            {description || 'No description provided'}
          </p>
          <span className="flex flex-row items-center gap-2 text-gray-700 dark:text-gray-400 mt-4 text-sm">
            <span className="h-2 w-2 rounded-full bg-green-500" /> {language}
          </span>
        </div>
        <span className="text-gray-700 dark:text-gray-400 text-sm">
          Updated {formattedDate}
        </span>
      </Link>
    </li>
  );
}
