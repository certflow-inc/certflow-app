import { Me } from '@/service/base/domain/me';
import { Plan } from '@/types';

export type CheckoutPaymentCurrencyViewProps = {
  me: Me;
  plan: Plan;
};

export type UseCheckoutPaymentCurrencyModelProps = {
  me: Me;
  plan: Plan;
};
