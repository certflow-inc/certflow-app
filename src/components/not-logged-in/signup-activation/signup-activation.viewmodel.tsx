import { signupActivation } from './signup-activation.actions';
import { SignupActivationViewModelProps } from './signup-activation.types';
import { SignupActivationView } from './signup-activation.view';

export function SignupActivationViewModel({
  token
}: SignupActivationViewModelProps) {
  const action = signupActivation.bind(null, token);

  return <SignupActivationView action={action} />;
}
