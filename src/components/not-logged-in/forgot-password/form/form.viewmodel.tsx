'use client';

import { requestPasswordReset } from '../forgot-password.actions';
import { useForgotPasswordFormModel } from './form.model';
import { ForgotPasswordFormViewModelProps } from './form.types';
import { ForgotPasswordFormView } from './form.view';

export function ForgotPasswordFormViewModel({
  onForgotPasswordSubmit
}: ForgotPasswordFormViewModelProps) {
  const model = useForgotPasswordFormModel({
    action: requestPasswordReset,
    onForgotPasswordSubmit
  });

  return <ForgotPasswordFormView model={model} className="flex-1" />;
}
