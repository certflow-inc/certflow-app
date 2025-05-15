import { PaymentData } from '../payments.types';

export type PaymentListRowViewProps = {
  data: PaymentData;
  expandedId: string | null;
  onExpandRow: (paymentId: string) => void;
  onPaymentClick: (transactionId: string) => void;
  isExpandOnRowClick?: boolean;
};
