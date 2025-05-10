import { CURRENCIES } from '@/constants';
import { CircleDollarSign } from 'lucide-react';
import { CheckoutPaymentCreditsView } from './checkout-payment-credits.view';
import { CheckoutPaymentCurrencyView } from './checkout-payment-currency.view';
import { CheckoutPaymentViewProps } from './checkout-payment.types';

export async function CheckoutPaymentView({
  account,
  plan
}: CheckoutPaymentViewProps) {
  const isCreditsPlan = plan?.currency === CURRENCIES.credit;

  const props = {
    account,
    plan
  };

  return (
    <div className="flex h-full flex-col gap-4 rounded-lg bg-white px-4 py-6">
      <div className="flex items-center gap-2">
        <CircleDollarSign size={24} />
        <h2 className="text-xl font-semibold">Pagamento</h2>
      </div>

      {isCreditsPlan ? (
        <CheckoutPaymentCreditsView {...props} />
      ) : (
        <CheckoutPaymentCurrencyView {...props} />
      )}
    </div>
  );
}
