import { CURRENCIES } from '@/constants';
import { Plan } from '@/types';
import { formatCurrency } from '@/utils/number-format.utils';
import { Check, NotepadText } from 'lucide-react';
import { CheckoutSummaryViewProps } from './checkout-summary.types';

export async function CheckoutSummaryView({ plan }: CheckoutSummaryViewProps) {
  function getOriginalAmount(plan: Plan) {
    if (!!plan?.discountPercentage) {
      if (plan?.currency === CURRENCIES.real) {
        return formatCurrency({
          value: plan.originalAmount
        });
      }
      return `${CURRENCIES.credit} ${plan.originalAmount}`;
    }
    return '';
  }

  function getCurrentAmount(plan: Plan) {
    if (plan?.currency === CURRENCIES.real) {
      return formatCurrency({
        value: plan.currentAmount
      });
    }
    return `${CURRENCIES.credit} ${plan.currentAmount}`;
  }

  return (
    <div className="flex flex-col gap-4 rounded-lg bg-white px-4 py-6">
      <div className="flex items-center gap-2">
        <NotepadText size={24} />
        <h2 className="text-xl font-semibold">Resumo da compra</h2>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-base font-semibold">{plan?.title}</p>
        <ul className="pl-6">
          {plan?.items.map((item) => (
            <li key={item.description} className="flex items-center gap-3">
              <Check className="text-green-600" />
              <span className="font-semibold">{item.quantity}</span>
              <span>{item.description}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex justify-between border-t border-slate-400 pt-2">
          <span className="font-semibold">Total</span>
          <div className="flex gap-2">
            <span className="text-slate-400 line-through">
              {getOriginalAmount(plan)}
            </span>
            <span className="font-semibold">{getCurrentAmount(plan)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
