import { getPlansAction } from '@/actions/plans.action';
import { notFound } from 'next/navigation';
import { getAddress } from '../account/account-address/account-address.actions';
import { getAccount } from '../account/account.actions';
import { CheckoutAddress } from './checkout-address';
import { CheckoutPayment } from './checkout-payment';
import { CheckoutSummary } from './checkout-summary';
import { CheckoutViewProps } from './checkout.types';

export async function CheckoutView({ planId }: CheckoutViewProps) {
  const { data: accountData } = await getAccount();
  const { data: addressData } = await getAddress();
  const plans = await getPlansAction();
  const plan = plans.find((currentPlan) => currentPlan.id === planId);

  if (!accountData || !addressData || !plan) {
    return notFound();
  }

  return (
    <div className="flex h-full flex-col-reverse gap-4 min-[1000px]:flex-row">
      <div className="flex flex-3/5 flex-col gap-4">
        <CheckoutAddress account={accountData} address={addressData} />

        <div className="flex-1">
          <CheckoutPayment account={accountData} plan={plan} />
        </div>
      </div>

      <div className="flex-0 min-[1000px]:flex-2/5">
        <CheckoutSummary plan={plan} />
      </div>
    </div>
  );
}
