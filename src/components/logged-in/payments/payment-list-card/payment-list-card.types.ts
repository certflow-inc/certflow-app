import { PaymentData } from '../payments.types';

export type PaymentListCardViewProps = {
  data: PaymentData;
  onPaymentClick: (transactionId: string) => void;
};
