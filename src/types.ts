export type IntegrationFlow = {
  title: string;
  description: string;
  destination?: string;
  destinationLabel?: string;
  flow?: boolean;
  toast?: boolean;
  field?: string;
  redirect?: string;
};

export type IntegrationFieldError = {
  field: string;
  message: string;
};

export type PlanItem = {
  quantity: number;
  description: string;
};

export type CURRENCY = 'R$' | 'C$' | '';

export type Plan = {
  id: string;
  title: string;
  currency: CURRENCY;
  originalAmount: number;
  currentAmount: number;
  discountPercentage: number;
  items: PlanItem[];
  type?: 'combo' | 'single' | 'starter' | 'promotion' | 'special';
  isBestSeller?: boolean;
};
