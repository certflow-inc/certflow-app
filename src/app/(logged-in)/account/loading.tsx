import { LoggedIn } from '@/components';
import { Skeleton } from '@/components/ui/skeleton';

export default function AccountLoadingPage() {
  return (
    <LoggedIn.Container>
      <div className="flex h-full flex-col gap-6 p-2">
        <div className="flex items-center justify-between gap-2">
          <Skeleton className="h-12 w-1/4" />
        </div>
        <div className="flex h-full w-full flex-col gap-4">
          <Skeleton className="min-w-[1330px]:w-1/3 h-12 w-1/2" />
          <Skeleton className="h-full w-full" />
        </div>
      </div>
    </LoggedIn.Container>
  );
}
