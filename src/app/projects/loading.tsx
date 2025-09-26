import H1 from '@/components/common/h1';
import LanguagesSkeleton from '@/components/skeleton/language-skeleton';
import OldNewSkeleton from '@/components/skeleton/old-new-skeleton';
import Skeleton from '@/components/skeleton/repo-skeleton';

export default function Loading() {
  return (
    <section>
      <H1>Projectst</H1>
      <div className="mt-4 mb-8 space-y-1.5">
        <OldNewSkeleton />
        <ul className="flex flex-row justify-start items-center flex-wrap gap-1 mt-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <LanguagesSkeleton key={i} />
          ))}
        </ul>
      </div>
      <ul className="mt-6 flex flex-row flex-wrap justify-between items-center gap-2.5">
        {Array.from({ length: 10 }).map((_, i) => (
          <Skeleton key={i} />
        ))}
      </ul>
    </section>
  );
}
