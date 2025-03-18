import { Register } from '@/types/register';
import { signup } from './signup.actions';

export type UseSignupModelProps = {
  action: (regiser: Register) => Promise<string>;
};

export type SignupViewProps = {
  action: typeof signup;
};
