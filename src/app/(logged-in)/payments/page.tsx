import { LoggedIn } from '@/components';
import { PaymentList } from '@/components/logged-in/payments/payment-list';

export default function PaymentsPage() {
  return (
    <LoggedIn.Container>
      <div className="flex h-full flex-1 flex-col gap-4 p-2">
        <PaymentList />
      </div>
    </LoggedIn.Container>
  );
}
