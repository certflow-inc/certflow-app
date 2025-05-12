import { Account } from '@/service/base/domain/account';
import { Me } from '@/service/base/domain/me';
import { Plan } from '@/types';

export type CheckoutPaymentViewProps = {
  account: Account;
  plan: Plan;
};

export type CheckoutPaymentCreditsViewProps = {
  account: Account;
  plan: Plan;
};

export type CheckoutPaymentCurrencyViewProps = {
  me: Me;
  plan: Plan;
};
