import { LoggedIn } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conta'
};

export default async function AccountPage() {
  return (
    <LoggedIn.Container>
      <LoggedIn.Account />
    </LoggedIn.Container>
  );
}
