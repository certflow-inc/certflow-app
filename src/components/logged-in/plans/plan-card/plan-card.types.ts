import { CURRENCY, Plan, PlanItem } from '@/types';

export type PlanCardItemsViewProps = {
  items: PlanItem[];
};

export type PlanCardViewProps = Plan;

export type PlanCardDistackBannerProps = {
  isBestSeller?: boolean;
};

export type PlanCardEffectivePriceProps = {
  value: number;
  currency: CURRENCY;
  hasDiscount?: boolean;
};

export type PlanCardDiscountPriceViewProps = {
  value: number;
  currency: CURRENCY;
  discountPercentage: number;
};
