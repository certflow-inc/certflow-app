import { LoggedIn } from '@/components';

export default function PaymentsPage() {
  return (
    <LoggedIn.Container>
      <div className="flex h-full flex-1 flex-col gap-4 p-2">Pagamentos</div>
    </LoggedIn.Container>
  );
}
