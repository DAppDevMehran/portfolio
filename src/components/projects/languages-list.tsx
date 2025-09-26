import LanguagesItem from './languages-item';

interface LanguagesList {
  languages: string[];
}

export default function LanguagesList({ languages }: LanguagesList) {
  return (
    <ul className="flex flex-row justify-start items-center flex-wrap gap-1">
      {languages.map((lan) => (
        <LanguagesItem key={lan} language={lan} />
      ))}
    </ul>
  );
}
