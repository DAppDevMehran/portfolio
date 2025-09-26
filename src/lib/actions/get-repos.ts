import { cache } from 'react';
import { RepoItem } from '../types/repo';

interface getReposProps {
  order?: string;
  languages?: string | string[];
  stars?: boolean;
  page?: number;
  limit?: number;
}

export const getRepos = cache(async () => {
  const res = await fetch('https://api.github.com/users/DAppDevMehran/repos', {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    return;
  }
  const repos = await res.json();

  return repos;
});

export async function getFilteredRepos(
  repos: any[],
  { order, languages, stars, page, limit }: getReposProps
): Promise<{ filteredRepos: RepoItem[]; pageCount: number }> {
  let filteredPosts: RepoItem[] = [...repos];

  if (languages && languages !== 'all') {
    filteredPosts = filteredPosts.filter((post) =>
      languages.includes(post.language)
    );
  }

  if (stars) {
    filteredPosts.sort((a, b) => {
      return b.stargazers_count - a.stargazers_count;
    });
  } else if (order) {
    if (order === 'newest') {
      filteredPosts.sort((a, b) => {
        const dateB = new Date(b.updated_at).getTime();
        const dateA = new Date(a.updated_at).getTime();
        return dateB - dateA; // Changed from dateA - dateB to dateB - dateA
      });
    } else if (order === 'oldest') {
      filteredPosts.sort((a, b) => {
        const dateB = new Date(b.updated_at).getTime();
        const dateA = new Date(a.updated_at).getTime();
        return dateA - dateB; // Oldest first (ascending order)
      });
    }
  }

  if (!page || !limit) {
    return {
      filteredRepos: filteredPosts,
      pageCount: 1,
    };
  }

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  return {
    filteredRepos: filteredPosts.slice(startIndex, endIndex),
    pageCount: Math.ceil(filteredPosts.length / limit),
  };
}
