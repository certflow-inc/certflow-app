import { Button, LoggedIn } from '@/components';
import Link from 'next/link';

export default function UsersListPage() {
  return (
    <LoggedIn.Container
      breadcrumb={[{ label: 'Configurações' }, { label: 'Usuários' }]}
    >
      <div>Users List</div>

      <Button asChild size="sm">
        <Link href="/users/create">Novo Usuário</Link>
      </Button>
    </LoggedIn.Container>
  );
}
