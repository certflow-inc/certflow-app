import { Container } from '@/components/logged-in';

export default function Page() {
  return (
    <Container breadcrumb={[{ label: 'Geral' }, { label: 'Dashboard' }]}>
      <div className="flex flex-1 flex-col gap-4 bg-blue-100 p-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="aspect-video rounded-xl bg-blue-200" />
          <div className="aspect-video rounded-xl bg-blue-200" />
          <div className="aspect-video rounded-xl bg-blue-200" />
        </div>
        <div className="flex-1 rounded-xl bg-blue-200 md:min-h-min" />
      </div>
    </Container>
  );
}
