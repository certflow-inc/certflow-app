'use client';

import { useSignupFormModel } from './form.model';
import { SignupFormViewModelProps } from './form.types';
import { SignupFormView } from './form.view';

export function SignupFormViewModel({
  onSignupSubmit,
  ...props
}: SignupFormViewModelProps) {
  const signupFormViewModel = useSignupFormModel({ onSignupSubmit });

  return <SignupFormView model={signupFormViewModel} {...props} />;
}
