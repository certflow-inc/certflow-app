import { LoggedIn } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Usuários'
};

export default function UsersListPage() {
  return (
    <LoggedIn.Container>
      <LoggedIn.UsersList />
    </LoggedIn.Container>
  );
}
