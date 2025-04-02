import { Container } from '@/components/logged-in';

export default async function AboutPage() {
  return (
    <Container breadcrumb={[{ label: 'Geral' }, { label: 'Sobre' }]}>
      <div className="flex-1 rounded-xl bg-blue-100">
        <p className="mb-[5000px] p-4">Sobre nós</p>
      </div>
    </Container>
  );
}
