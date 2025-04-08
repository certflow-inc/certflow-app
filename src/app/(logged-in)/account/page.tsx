import { LoggedIn } from '@/components';
import { Container } from '@/components/logged-in';

export default async function AccountPage() {
  return (
    <Container breadcrumb={[{ label: 'Configurações' }, { label: 'Conta' }]}>
      <div className="flex-1 rounded-xl bg-blue-100 p-2">
        <LoggedIn.Account />
      </div>
    </Container>
  );
}
