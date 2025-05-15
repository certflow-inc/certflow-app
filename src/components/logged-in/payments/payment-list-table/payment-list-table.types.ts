import { PaymentData } from '../payments.types';

export type PaymentListTableViewProps = {
  data: PaymentData[];
  onPaymentClick: (transactionId: string) => void;
};
