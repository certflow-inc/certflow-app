import { CURRENCIES } from '@/constants';
import { formatCurrency } from '@/utils/number-format.utils';
import { PlanCardEffectivePriceProps } from './plan-card.types';

export function PlanCardEffectivePriceView({
  value,
  currency,
  hasDiscount = false
}: PlanCardEffectivePriceProps) {
  const isCertX = currency === CURRENCIES.credit;

  return (
    <div
      data-has-discount={hasDiscount}
      className="flex items-end gap-[6px] data-[has-discount=false]:mt-4"
    >
      <div className="self-end text-left text-xs font-semibold">{currency}</div>
      <div className="text-[2.8rem]/10 font-semibold">
        {!isCertX ? formatCurrency({ value, removeSymbol: true }) : value}
      </div>
      <div
        data-iscertx={isCertX}
        className="hidden text-xs data-[iscertx=true]:block"
      >
        créditos
      </div>
    </div>
  );
}
