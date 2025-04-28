import { Payment } from '@/service/base/domain/payment';

export type PaymentData = Omit<Payment, 'amount' | 'createdAt'> & {
  amount: string;
  createdAt: string;
};
