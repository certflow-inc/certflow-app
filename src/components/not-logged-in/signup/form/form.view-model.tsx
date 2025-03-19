'use client';

import { signup } from '../signup.actions';
import { useSignupFormModel } from './form.model';
import { SignupFormViewModelProps } from './form.types';
import { SignupFormView } from './form.view';

export function SignupFormViewModel({
  onSignupSubmit,
  ...props
}: SignupFormViewModelProps) {
  const model = useSignupFormModel({
    action: signup,
    onSignupSubmit
  });

  return <SignupFormView model={model} {...props} />;
}
