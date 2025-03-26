'use client';

import { useFormModel } from './form.model';
import { SigninFormViewModelProps } from './form.types';
import { SigninFormView } from './form.view';

export function SigninFormViewModel({
  onSigninSubmit,
  ...props
}: SigninFormViewModelProps) {
  const model = useFormModel({ onSigninSubmit });

  return <SigninFormView model={model} {...props} />;
}
