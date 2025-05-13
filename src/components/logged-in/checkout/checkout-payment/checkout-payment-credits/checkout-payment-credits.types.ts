import { Account } from '@/service/base/domain/account';
import { Plan } from '@/types';

export type CheckoutPaymentCreditsViewProps = {
  account: Account;
  plan: Plan;
};

export type UseCheckoutPaymentCreditsModelProps = {
  account: Account;
  plan: Plan;
};
