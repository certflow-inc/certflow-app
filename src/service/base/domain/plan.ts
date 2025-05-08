export type Plan = {
  planId: string;
  name: string;
  type: 'combo' | 'single' | 'starter' | 'promotion' | 'special';
  currency: 'real' | 'credit' | 'none';
  originalAmount: number;
  currentAmount: number;
  discountPercentage: number;
  services: Record<string, number>;
  modules: Record<string, boolean>;
  enabled: boolean;
  new: boolean;
  bestSeller: boolean;
};
