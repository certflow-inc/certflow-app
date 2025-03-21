import { signupActivation } from './signup-activation.actions';

export type SignupActivationViewModelProps = {
  token: string;
};

export type SignupActivationViewProps = {
  action: () => ReturnType<typeof signupActivation>;
};

export type SignupActivationFlow = {
  title: string;
  description?: string;
  destination?: string;
  destinationLabel?: string;
};
