import Link from 'next/link';

interface H1Props {
  classes?: string;
  children: React.ReactNode;
  href?: string;
}

export default function H1({ classes = '', children, href }: H1Props) {
  const cls = `text-gray-900 dark:text-gray-100 hover:opacity-95 ${classes}`;

  if (href) {
    return (
      <h1 className={cls}>
        <Link href={href}>{children}</Link>
      </h1>
    );
  }
  return <h1 className={cls}>{children}</h1>;
}
