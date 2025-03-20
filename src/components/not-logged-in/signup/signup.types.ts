import { Register } from '@/service/domain/register';

export type UseSignupModelProps = {
  action: (regiser: Register) => Promise<string>;
};

export type SignupFlow = {
  title: string;
  description: string;
  destination?: string;
  destinationLabel?: string;
  field?: string;
};
