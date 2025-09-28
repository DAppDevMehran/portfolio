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
    <li className="group relative bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
      <Link
        href={html_url}
        className="h-full w-full p-6 flex flex-col justify-between"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex flex-col gap-3">
          <div className="flex flex-row justify-between items-start">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
              {name}
            </h2>
            <div className="flex items-center gap-1 bg-yellow-50 dark:bg-yellow-900/20 px-2 py-1 rounded-full">
              <span className="text-yellow-600 dark:text-yellow-400 text-sm">
                ⭐
              </span>
              <span className="text-sm font-semibold text-yellow-700 dark:text-yellow-300">
                {stargazers_count}
              </span>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-2">
            {description || 'No description provided'}
          </p>

          <div className="flex flex-row items-center justify-between mt-2">
            {language && (
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md">
                  {language}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-700">
          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
            Updated {formattedDate}
          </span>
        </div>
      </Link>
    </li>
  );
}
