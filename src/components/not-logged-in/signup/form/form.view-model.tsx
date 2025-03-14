'use client';

import { useSignupFormModel } from './form.model';
import { SignupFormViewModelProps } from './form.types';
import { SignupFormView } from './form.view';

export function SignupFormViewModel(props: SignupFormViewModelProps) {
  const model = useSignupFormModel();

  return <SignupFormView model={model} {...props} />;
}
