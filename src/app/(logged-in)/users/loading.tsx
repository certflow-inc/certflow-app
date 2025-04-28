import { LoggedIn } from '@/components';
import { Skeleton } from '@/components/ui/skeleton';

export default function UserListLoagingPage() {
  return (
    <LoggedIn.Container>
      <div className="flex h-full flex-col gap-6 p-2">
        <div className="flex items-center justify-between gap-2">
          <Skeleton className="h-12 w-2/3" />
          <Skeleton className="h-12 w-50" />
        </div>
        <Skeleton className="h-full w-full" />
      </div>
    </LoggedIn.Container>
  );
}
