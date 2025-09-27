import H1 from '@/components/common/h1';
import P from '@/components/common/p';
import { getRepos } from '@/lib/actions';
import paths from '@/paths';
import Link from 'next/link';

export default async function Home() {
  const styles =
    'border-b-[1px] border-gray-900 dark:border-gray-100 hover:opacity-90';
  const repos = await getRepos();
  console.log(repos[0]);
  return (
    <main>
      <section>
        <H1 classes="text-3xl">Welcome to my page!</H1>

        <P classes="mt-12">
          My name is Mehran, I am web developer.
          <br />
          Checkout my{' '}
          <Link href={paths.projects()} className={styles}>
            projects
          </Link>
          ,{' '}
          <Link href={paths.photos()} className={styles}>
            photos
          </Link>{' '}
          and{' '}
          <Link href={paths.blog()} className={styles}>
            blog
          </Link>
        </P>
      </section>

      <section className="mt-8">
        <H1>Latest on the blog</H1>
      </section>
    </main>
  );
}
