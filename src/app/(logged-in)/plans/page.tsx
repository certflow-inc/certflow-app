import { LoggedIn } from '@/components';

export default function PlansPage() {
  return (
    <LoggedIn.Container>
      <div className="flex h-full flex-1 flex-col gap-4 p-2">Planos</div>
    </LoggedIn.Container>
  );
}
