import H1 from '@/components/common/h1';
import OldNew from '@/components/common/old-new';
import Pagination from '@/components/common/pagination';
import ReposList from '@/components/home/repo-list';
import LanguagesList from '@/components/projects/languages-list';
import { distinctLanguages, getRepos } from '@/lib/actions';
import { getFilteredRepos } from '@/lib/actions/get-repos';

export default async function ProjectstPage({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | undefined }>;
}) {
  const params = await searchParams;

  const order = params?.order ?? 'newest';
  const stars = params?.stars === 'true' ? true : false;
  const page = params?.page ?? '1';
  const limit = params?.limit ?? '4';

  let languages: string | string[] = 'all';

  if (params?.language) {
    languages = params.language.split(',');
  }

  const repos = await getRepos();
  const { filteredRepos, pageCount } = await getFilteredRepos(repos, {
    order,
    stars,
    languages,
    page: parseInt(page),
    limit: parseInt(limit),
  });
  const distinctLanguage = distinctLanguages({ repos });

  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <H1 classes="text-4xl font-bold mb-8 text-center">Projects</H1>
      <div className="mb-12 space-y-4 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
        <OldNew />
        <LanguagesList languages={distinctLanguage} />
      </div>
      <ReposList repos={filteredRepos} />
      <Pagination pageCount={pageCount} />
    </section>
  );
}
