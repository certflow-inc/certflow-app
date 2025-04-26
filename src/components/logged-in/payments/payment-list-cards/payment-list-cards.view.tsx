import { PaymentListCard } from '../payment-list-card';

export function PaymentListCardsView() {
  return (
    <div className="flex flex-col gap-8 min-[1130px]:hidden">
      <PaymentListCard />
    </div>
  );
}
