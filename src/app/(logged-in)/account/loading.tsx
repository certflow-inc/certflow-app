import { LoggedIn } from '@/components';

export default function AccountLoadingPage() {
  return (
    <LoggedIn.Container
      breadcrumb={[{ label: 'Configurações' }, { label: 'Conta' }]}
    >
      <div className="h-12 w-2/3 animate-pulse rounded-lg bg-blue-50" />
      <div className="h-1/3 w-full animate-pulse rounded-lg bg-blue-50" />
    </LoggedIn.Container>
  );
}
