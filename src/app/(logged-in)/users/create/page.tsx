import { LoggedIn } from '@/components';
import { UserForm } from '@/components/logged-in/users';
import { createUser } from '@/components/logged-in/users/users-actions';

export default function UserCreatePage() {
  return (
    <LoggedIn.Container
      breadcrumb={[{ label: 'Configurações' }, { label: 'Usuários' }]}
    >
      <UserForm action={createUser} />
    </LoggedIn.Container>
  );
}
