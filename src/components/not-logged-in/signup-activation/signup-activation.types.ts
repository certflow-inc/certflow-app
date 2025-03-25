import { signupActivation } from './signup-activation.actions';

export type SignupActivationViewModelProps = {
  token: string;
};

export type SignupActivationViewProps = {
  action: () => ReturnType<typeof signupActivation>;
};
