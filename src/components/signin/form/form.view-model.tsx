'use client';

import { useFormModel } from './form.model';
import { SigninFormViewModelProps } from './form.types';
import { SigninFormView } from './form.view';

export function SigninFormViewModel(props: SigninFormViewModelProps) {
  const model = useFormModel();
  return <SigninFormView model={model} {...props} />;
}
