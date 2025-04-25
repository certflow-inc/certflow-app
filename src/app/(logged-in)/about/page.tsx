import { LoggedIn } from '@/components';

export default async function AboutPage() {
  return (
    <LoggedIn.Container>
      <div className="flex h-full flex-1 flex-col gap-4 p-2">Sobre</div>
    </LoggedIn.Container>
  );
}
