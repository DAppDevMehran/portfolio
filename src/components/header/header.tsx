import paths from '@/paths';
import H1 from '../common/h1';
import LinkPro from '../common/link-pro';
import DarkLight from './dark-light';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50">
      <div className="flex flex-row items-center justify-between h-16 lg:h-20 w-full py-4">
        {/* Logo/Name */}
        <div className="flex-shrink-0">
          <H1
            href={paths.home()}
            classes="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Mehran Salahi
          </H1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex flex-row gap-1 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-1.5 border border-gray-200/50 dark:border-gray-700/50 shadow-sm">
            <li>
              <LinkPro href={paths.about()} label="About" />
            </li>
            <li>
              <LinkPro href={paths.projects()} label="Projects" />
            </li>
            <li>
              <LinkPro href={paths.photos()} label="Photos" />
            </li>
            <li>
              <LinkPro href={paths.blog()} label="Blog" />
            </li>
          </ul>
        </nav>

        {/* Theme Toggle */}
        <div className="flex-shrink-0">
          <DarkLight />
        </div>
      </div>
    </header>
  );
}
