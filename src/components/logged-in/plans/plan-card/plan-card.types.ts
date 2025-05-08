export type PlanCardItem = {
  quantity: number;
  description: string;
};

export type PlanCardItemsViewProps = {
  items: PlanCardItem[];
};

export type PlanCardViewProps = {
  id: string;
  title: string;
  currency: 'R$' | 'CertX';
  originalAmount: number;
  currentAmount: number;
  discountPercentage: number;
  items: PlanCardItem[];
  onSelect: (id: string) => void;
  isBestSeller?: boolean;
};

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
