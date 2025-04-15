import { LoggedIn } from '@/components';

export default async function AccountPage() {
  return (
    <LoggedIn.Container
      breadcrumb={[{ label: 'Configurações' }, { label: 'Conta' }]}
    >
      <LoggedIn.Account />
    </LoggedIn.Container>
  );
}
