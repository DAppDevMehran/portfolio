import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/header/header';
import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = {
  title: 'Mehran Salahi',
  description: 'Personal portfolio and projects',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen flex flex-col">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex-1">
              <Header />
              <main className="flex-1">{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
