interface PProps {
  children: React.ReactNode;
  classes?: string;
}

export default function P({ children, classes = '' }: PProps) {
  return (
    <p className={`text-gray-900 dark:text-gray-100 ${classes}`}>{children}</p>
  );
}
