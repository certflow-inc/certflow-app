import { LoggedIn } from '@/components';

export default function PaymentsPage() {
  return (
    <LoggedIn.Container>
      <LoggedIn.PaymentList />
    </LoggedIn.Container>
  );
}
