import { PaymentData } from '../payments.types';

export type PaymentListCardsViewProps = {
  data: PaymentData[];
  onPaymentClick: (transactionId: string) => void;
};
