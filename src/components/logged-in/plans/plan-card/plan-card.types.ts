import { Plan, PlanItem } from '@/types';

export type PlanCardItemsViewProps = {
  items: PlanItem[];
};

export type PlanCardViewProps = Plan;

export type PlanCardDistackBannerProps = {
  isBestSeller?: boolean;
};

export type PlanCardEffectivePriceProps = {
  value: number;
  currency: 'R$' | 'CertX';
  hasDiscount?: boolean;
};

export type PlanCardDiscountPriceViewProps = {
  value: number;
  currency: 'R$' | 'CertX';
  discountPercentage: number;
};
