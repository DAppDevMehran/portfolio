interface SectionProps {
  title: string;
  h2Orh3: boolean;
  classes: string;
  children: React.ReactNode;
}

export default function SectionCard({
  title,
  h2Orh3,
  classes,
  children,
}: SectionProps) {
  const titleToRender = h2Orh3 ? (
    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
      {title}
    </h2>
  ) : (
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
      {title}
    </h3>
  );

  return (
    <section
      className={`${classes} dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700`}
    >
      {titleToRender}
      {children}
    </section>
  );
}
