'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ROUTES } from '@/routes';
import { useRouter } from 'next/navigation';
import { PlanCardDiscountPriceView } from './plan-card-discount-price.view';
import { PlanCardDistackBannerView } from './plan-card-distack-banner.view';
import { PlanCardEffectivePriceView } from './plan-card-effective-price.view';
import { PlanCardItemsView } from './plan-card-items.view';
import { PlanCardViewProps } from './plan-card.types';

export function PlanCardView({
  id,
  title,
  currency,
  originalAmount,
  currentAmount,
  discountPercentage,
  isBestSeller,
  type: _type,
  items: services
}: PlanCardViewProps) {
  const router = useRouter();

  return (
    <article
      data-isbestseller={isBestSeller}
      className={cn(
        'flex min-h-[500px] w-[350px]',
        'flex-col rounded-xl border-2 transition-all hover:scale-103 hover:shadow-2xl',
        'bg-primary-50 data-[isbestseller=true]:border-primary-500 border-primary-300',
        'shadow-primary-300 shadow-lg',
        'data-[isbestseller=true]:shadow-primary-600 data-[isbestseller=true]:shadow-2xl'
      )}
    >
      <PlanCardDistackBannerView isBestSeller={isBestSeller} />

      <div className="flex flex-1 flex-col gap-5 rounded-b-lg px-8 py-1">
        <div className="flex w-full flex-col gap-6">
          <h2 className="mt-1 text-2xl font-semibold">{title}</h2>

          <div className="flex flex-col gap-10">
            <PlanCardDiscountPriceView
              value={originalAmount}
              currency={currency}
              discountPercentage={discountPercentage}
            />
            <PlanCardEffectivePriceView
              value={currentAmount}
              currency={currency}
              hasDiscount={discountPercentage > 0}
            />
          </div>

          <Button
            data-isbestseller={isBestSeller}
            className={cn(
              'border-primary-400 text-primary-500 text-lg data-[isbestseller=true]:text-white',
              'hover:bg-primary-500 hover:text-white',
              'transition-all'
            )}
            variant={isBestSeller ? 'default' : 'outline'}
            size="lg"
            onClick={() => router.push(`${ROUTES.CHECKOUT.url}?plan=${id}`)}
          >
            Escolher Plano
          </Button>
        </div>

        <div className="h-[2px] w-full bg-slate-200" />

        <PlanCardItemsView items={services} />
      </div>
    </article>
  );
}
