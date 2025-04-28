import { LoggedIn } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre'
};

export default async function AboutPage() {
  return (
    <LoggedIn.Container>
      <div className="flex h-full flex-1 flex-col gap-4 p-2">Sobre</div>
    </LoggedIn.Container>
  );
}
