import { PaymentData } from '../payments.types';

export type PaymentListRowViewProps = {
  data: PaymentData;
  expandedId: string | null;
  onExpandRow: (paymentId: string) => void;
  isExpandOnRowClick?: boolean;
};
