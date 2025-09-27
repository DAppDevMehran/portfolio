interface ExperienceProps {
  experiences: string[];
}

export default function Experience({ experiences }: ExperienceProps) {
  return (
    <>
      {Array.from({ length: experiences.length }).map((_, i) => (
        <span
          key={i}
          className="bg-white dark:bg-gray-700 px-3 py-1 rounded-full text-sm border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300"
        >
          {experiences[i]}
        </span>
      ))}
    </>
  );
}
