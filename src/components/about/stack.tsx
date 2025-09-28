interface StackProps {
  title: string;
  text: string;
}

export default function Stack({ title, text }: StackProps) {
  return (
    <div>
      <h4 className="font-medium text-gray-900 dark:text-white">{title}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{text}</p>
    </div>
  );
}
