import { RepoListProps } from '../types/repo';

export const distinctLanguages = ({ repos }: RepoListProps) => {
  const languages = repos.reduce((acc: string[], repo) => {
    if (repo.language && !acc.includes(repo.language)) {
      acc.push(repo.language);
    }
    return acc;
  }, []);

  return languages;
};
