import { LoggedIn } from '@/components';

export default function Page() {
  return (
    <LoggedIn.Container
      breadcrumb={[{ label: 'Geral' }, { label: 'Dashboard' }]}
    >
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-blue-100" />
        <div className="aspect-video rounded-xl bg-blue-100" />
        <div className="aspect-video rounded-xl bg-blue-100" />
      </div>
      <div className="min-h-80 flex-1 rounded-xl bg-blue-100" />
    </LoggedIn.Container>
  );
}
