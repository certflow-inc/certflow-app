import { LoggedIn } from '@/components';
import { Skeleton } from '@/components/ui/skeleton';

export default function PlansLoagingPage() {
  return (
    <LoggedIn.Container>
      <div className="flex h-full flex-col items-center gap-6 p-2">
        <Skeleton className="h-25 w-10/12" />
        <Skeleton className="h-12 w-1/3" />

        <div className="grid max-w-[1650px] grid-cols-1 gap-10 min-[1000px]:grid-cols-2 min-[1400px]:grid-cols-3 min-[1650px]:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex justify-center">
              <Skeleton className="min-h-[500px] w-[350px]" />
            </div>
          ))}
        </div>
      </div>
    </LoggedIn.Container>
  );
}
