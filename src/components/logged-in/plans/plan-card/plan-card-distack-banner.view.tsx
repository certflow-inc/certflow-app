import { cn } from '@/lib/utils';
import { PlanCardDistackBannerProps } from './plan-card.types';

export function PlanCardDistackBannerView({
  isBestSeller
}: PlanCardDistackBannerProps) {
  return (
    <div
      data-isbestseller={isBestSeller}
      className={cn(
        'flex h-10 items-center justify-center rounded-t-lg bg-transparent text-lg font-semibold text-white',
        'data-[isbestseller=true]:bg-primary-500'
      )}
    >
      {isBestSeller && 'RECOMENDADO'}
    </div>
  );
}
