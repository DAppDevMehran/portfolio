import paths from '@/paths';
import H1 from '../common/h1';
import LinkPro from '../common/link-pro';
import DarkLight from './dark-light';

export default function Header() {
  return (
    <header className="flex flex-row justify-start items-center h-20 w-full mb-10">
      <div className="mr-12">
        <H1 href={paths.home()} classes="text-2xl">
          Mehran Salahi
        </H1>
      </div>
      <nav>
        <ul className="flex flex-row gap-5">
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
      <div className="ml-auto">
        <DarkLight />
      </div>
    </header>
  );
}
