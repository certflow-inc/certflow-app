import { LoggedIn } from '@/components';

export default async function AboutPage() {
  return (
    <LoggedIn.Container breadcrumb={[{ label: 'Geral' }, { label: 'Sobre' }]}>
      <p className="mb-[5000px]">Sobre nós</p>
    </LoggedIn.Container>
  );
}
