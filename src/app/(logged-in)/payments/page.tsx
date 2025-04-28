import { LoggedIn } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pagamentos'
};

export default function PaymentsPage() {
  return (
    <LoggedIn.Container>
      <LoggedIn.PaymentList />
    </LoggedIn.Container>
  );
}
