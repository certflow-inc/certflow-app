import { Account } from '@/service/base/domain/account';
import { Plan } from '@/types';

export type CheckoutPaymentViewProps = {
  account: Account;
  plan: Plan;
};
