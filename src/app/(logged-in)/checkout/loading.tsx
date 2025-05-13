import { LoggedIn } from '@/components';
import { Skeleton } from '@/components/ui/skeleton';

export default function CheckoutLoadingPage() {
  return (
    <LoggedIn.Container>
      <div className="flex h-full flex-col-reverse gap-4 min-[1200px]:flex-row">
        <div className="flex flex-3/5 flex-col gap-4">
          <Skeleton className="flex h-96 gap-4 min-[1200px]:flex-2/5" />
          <Skeleton className="w-full flex-3/5" />
        </div>

        <div className="flex-0 min-[1200px]:flex-2/5">
          <Skeleton className="h-70 w-full" />
        </div>
      </div>
    </LoggedIn.Container>
  );
}
