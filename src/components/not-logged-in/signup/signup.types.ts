import { Register } from '@/types/register';
import { signup } from './signup.actions';

export type UseSignupModelProps = {
  action: (regiser: Register) => Promise<string>;
};

export type SignupViewProps = {
  action: typeof signup;
};

export type SignupFlow = {
  title: string;
  description: string;
  destination?: string;
  destinationLabel?: string;
  field?: string;
};

export type SignupFieldError = {
  field: string;
  message: string;
};
