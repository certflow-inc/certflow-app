import { notFound } from 'next/navigation';
import { getPaymentsAction } from './payment-list.actions';
import { PaymentListView } from './payment-list.view';

export async function PaymentListViewModel() {
  const payments = await getPaymentsAction();

  if (!payments?.length) {
    return notFound();
  }

  return <PaymentListView data={payments} />;
}
