import { LoggedIn } from '@/components';

export default function UsersListPage() {
  return (
    <LoggedIn.Container>
      <LoggedIn.UsersList />
    </LoggedIn.Container>
  );
}
