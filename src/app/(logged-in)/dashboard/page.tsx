import { LoggedIn } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard'
};

export default function Page() {
  return (
    <LoggedIn.Container>
      <div className="flex h-full flex-1 flex-col gap-4 p-2">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="aspect-video rounded-xl bg-blue-200" />
          <div className="aspect-video rounded-xl bg-blue-200" />
          <div className="aspect-video rounded-xl bg-blue-200" />
        </div>
        <div className="min-h-80 flex-1 rounded-xl bg-blue-200" />
      </div>
    </LoggedIn.Container>
  );
}
