export type Account = {
  accountId: string;
  type: 'corporation' | 'individual';
  taxId: string;
  name: string;
  fantasy: string;
  services: Record<string, number>;
  modules: Record<string, boolean>;
  status: 'active' | 'suspended' | 'canceled' | 'trial';
};

export type Address = {
  address: string;
  number: string;
  complement: string;
  district: string;
  city: string;
  state: string;
  zip: string;
  country: string;
};
