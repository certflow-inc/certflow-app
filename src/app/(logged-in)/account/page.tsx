import { Container } from '@/components/logged-in';

export default function AccountPage() {
  return (
    <Container breadcrumb={[{ label: 'Configurações' }, { label: 'Conta' }]}>
      <div className="flex-1 rounded-xl bg-blue-100">
        <p className="p-4">Conta</p>
      </div>
    </Container>
  );
}
