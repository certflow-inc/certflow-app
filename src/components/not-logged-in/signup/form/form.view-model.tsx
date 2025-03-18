'use client';

import { useSignupFormModel } from './form.model';
import { SignupFormViewModelProps } from './form.types';
import { SignupFormView } from './form.view';

export function SignupFormViewModel({
  onSignupSubmit,
  fieldErrors,
  isProcessing,
  ...props
}: SignupFormViewModelProps) {
  const model = useSignupFormModel({
    onSignupSubmit,
    isProcessing,
    fieldErrors
  });

  return <SignupFormView model={model} {...props} />;
}
