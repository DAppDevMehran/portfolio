// types/repo.ts
export interface RepoItem {
  id: number;
  name: string;
  description: string | null;
  language: string;
  stargazers_count: number;
  updated_at: string;
  html_url: string;
  // Add other GitHub repo properties you need
}

export interface RepoListProps {
  repos: RepoItem[];
}
