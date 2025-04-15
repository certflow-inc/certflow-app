import { Button, LoggedIn } from '@/components';
import Link from 'next/link';

export default function UserCreatePage() {
  return (
    <LoggedIn.Container
      breadcrumb={[{ label: 'Configurações' }, { label: 'Usuários' }]}
    >
      <div>Users Create</div>

      <Button asChild size="sm">
        <Link href="/users">Voltar</Link>
      </Button>
    </LoggedIn.Container>
  );
}
