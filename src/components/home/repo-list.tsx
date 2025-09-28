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
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
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
    </div>
  );
}
