import { LoggedIn } from '@/components';
import { Skeleton } from '@/components/ui/skeleton';

export default function AccountLoadingPage() {
  return (
    <LoggedIn.Container
      breadcrumb={[{ label: 'Configurações' }, { label: 'Conta' }]}
    >
      <div className="flex h-full flex-col gap-4">
        <Skeleton className="h-12 w-2/3" />
        <Skeleton className="h-full w-full" />
      </div>
    </LoggedIn.Container>
  );
}
