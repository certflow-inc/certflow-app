import { PaymentListCard } from '../payment-list-card';
import { PaymentListCardsViewProps } from './payment-list-cards.types';

export function PaymentListCardsView({ data }: PaymentListCardsViewProps) {
  return (
    <div className="flex flex-col gap-8 min-[1130px]:hidden">
      {data.map((payment) => (
        <PaymentListCard key={payment.paymentId} data={payment} />
      ))}
    </div>
  );
}
