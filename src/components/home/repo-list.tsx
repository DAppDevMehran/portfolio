import { getRepos } from '@/lib/actions';
import RepoItem from './repo-item';
import { RepoListProps } from '@/lib/types/repo';

interface RepoItemProps {
  name: string;
  description: string | null;
  language: string;
  stargazers_count: number;
  updated_at: string;
  html_url: string;
}

export default async function ReposList({ repos }: RepoListProps) {
  return (
    <ul className="mt-6 flex flex-row flex-wrap justify-between items-center gap-2.5">
      {repos.map((repo) => (
        <RepoItem
          key={repo.id}
          name={repo.name}
          description={repo.description}
          language={repo.language}
          stargazers_count={repo.stargazers_count}
          updated_at={repo.updated_at}
          html_url={repo.html_url}
        />
      ))}
    </ul>
  );
}
