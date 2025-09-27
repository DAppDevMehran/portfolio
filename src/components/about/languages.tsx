interface LanguagesProps {
  level: string;
  language: string;
  color: string;
  percent: string;
}

export default function Languages({
  level,
  language,
  color,
  percent,
}: LanguagesProps) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="font-medium text-gray-900 dark:text-white">
          {language}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {level}
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className={`${color} h-2 rounded-full`}
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}
