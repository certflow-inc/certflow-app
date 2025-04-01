import { Container } from '@/components/logged-in';

export default async function AboutPage() {
  return (
    <Container breadcrumb={[{ label: 'Geral' }, { label: 'Sobre' }]}>
      <div className="flex flex-1 flex-col gap-4 bg-blue-100 p-4">
        <div className="flex-1 rounded-xl bg-blue-200 md:min-h-min" />
      </div>
    </Container>
  );
}
