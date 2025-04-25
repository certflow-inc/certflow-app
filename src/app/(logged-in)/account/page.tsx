import { LoggedIn } from '@/components';

export default async function AccountPage() {
  return (
    <LoggedIn.Container>
      <LoggedIn.Account />
    </LoggedIn.Container>
  );
}
