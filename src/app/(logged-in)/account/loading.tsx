import { LoggedIn } from '@/components';

export default function AccountLoadingPage() {
  return (
    <LoggedIn.Container
      breadcrumb={[{ label: 'Configurações' }, { label: 'Conta' }]}
    >
      <div className="flex flex-1 flex-col gap-4 rounded-xl bg-blue-100 p-2">
        <div className="h-12 w-2/3 animate-pulse rounded-lg bg-blue-50" />
        <div className="h-1/3 w-full animate-pulse rounded-lg bg-blue-50" />
      </div>
    </LoggedIn.Container>
  );
}
