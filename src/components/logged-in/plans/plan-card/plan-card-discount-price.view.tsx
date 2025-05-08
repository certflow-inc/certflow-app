import { formatCurrency } from '@/utils/number-format.utils';
import { PlanCardDiscountPriceViewProps } from './plan-card.types';

export function PlanCardDiscountPriceView({
  value,
  currency,
  discountPercentage
}: PlanCardDiscountPriceViewProps) {
  const isCertX = currency === 'CertX';
  const hasDiscount = discountPercentage > 0;

  return (
    <div
      data-visible={hasDiscount}
      className="hidden h-8 items-center gap-4 data-[visible=true]:flex"
    >
      <div
        data-visible={hasDiscount}
        className="invisible text-xs text-slate-500 line-through data-[visible=true]:visible"
      >
        {`${currency} ${!isCertX ? formatCurrency({ value, removeSymbol: true }) : value}`}
      </div>
      <div
        data-visible={hasDiscount}
        className="bg-primary-200 invisible flex h-8 items-center justify-center rounded-full px-4 text-sm font-semibold data-[visible=true]:visible"
      >
        ECONOMIZE {discountPercentage}%
      </div>
    </div>
  );
}
