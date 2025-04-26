import { Payment } from '@/service/base/domain/payment';

export type PaymentListTableViewProps = {
  data: Payment[];
};

export type PaymentListRowViewProps = {
  data: Payment;
  expandedId: string | null;
  onExpandRow: (paymentId: string) => void;
  isExpandOnRowClick?: boolean;
};
