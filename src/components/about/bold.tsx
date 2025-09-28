interface BoldProps {
  text: string;
}

export default function Bold({ text }: BoldProps) {
  return <strong className="text-gray-900 dark:text-white">{text}</strong>;
}
