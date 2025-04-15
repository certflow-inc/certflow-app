import { LoggedIn } from '@/components';

export default function UsersListPage() {
  return (
    <LoggedIn.Container
      breadcrumb={[{ label: 'Configurações' }, { label: 'Usuários' }]}
    >
      <div>Users</div>
    </LoggedIn.Container>
  );
}
