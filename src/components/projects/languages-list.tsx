import LanguagesItem from './languages-item';

interface LanguagesList {
  languages: string[];
}

export default function LanguagesList({ languages }: LanguagesList) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
        Filter by Language
      </h3>
      <ul className="flex flex-row justify-start items-center flex-wrap gap-2">
        {languages.map((lan) => (
          <LanguagesItem key={lan} language={lan} />
        ))}
      </ul>
    </div>
  );
}
