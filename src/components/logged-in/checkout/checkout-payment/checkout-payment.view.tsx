import { getMeDataAction } from '@/actions/me.action';
import { CURRENCIES } from '@/constants';
import { CircleDollarSign } from 'lucide-react';
import { notFound } from 'next/navigation';
import { CheckoutPaymentCredits } from './checkout-payment-credits';
import { CheckoutPaymentCurrency } from './checkout-payment-currency';
import { CheckoutPaymentViewProps } from './checkout-payment.types';

export async function CheckoutPaymentView({
  account,
  plan
}: CheckoutPaymentViewProps) {
  const isCreditsPlan = plan?.currency === CURRENCIES.credit;
  const me = await getMeDataAction();

  if (!me) {
    return notFound();
  }

  const props = {
    me,
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
        <CheckoutPaymentCredits {...props} />
      ) : (
        <CheckoutPaymentCurrency {...props} />
      )}
    </div>
  );
}
