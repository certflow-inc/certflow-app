export type Register = {
  type: 'individual' | 'corporation';
  taxId: string;
  name: string;
  companyTaxId?: string;
  companyName?: string;
  email: string;
  mobilePhone: string;
  password: string;
  confirmPassword: string;
};
