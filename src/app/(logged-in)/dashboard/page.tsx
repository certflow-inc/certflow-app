import { Container } from '@/components/logged-in';

export default function Page() {
  return (
    <Container breadcrumb={[{ label: 'Geral' }, { label: 'Dashboard' }]}>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-blue-100" />
        <div className="aspect-video rounded-xl bg-blue-100" />
        <div className="aspect-video rounded-xl bg-blue-100" />
      </div>
      <div className="flex-1 rounded-xl bg-blue-100" />
    </Container>
  );
}
