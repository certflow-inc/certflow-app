export type PersonType = 'individual' | 'corporation';
export type Register = {
  type: PersonType;
  taxId: string;
  name: string;
  companyTaxId?: string;
  companyName?: string;
  email: string;
  mobilePhone: string;
  password: string;
  confirmPassword: string;
};
