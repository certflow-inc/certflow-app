'use client';

import { useParams } from 'next/navigation';
import { changePassword } from '../change-password.actions';
import { useSignupFormModel } from './form.model';
import { ChangePasswordFormViewModelProps } from './form.types';
import { ChangePasswordFormView } from './form.view';

export function ChangePasswordFormViewModel({
  onChangePasswordFormSubmit
}: ChangePasswordFormViewModelProps) {
  const { token } = useParams<{ token: string }>();
  const changePasswordWithToken = changePassword.bind(null, token);

  const model = useSignupFormModel({
    action: changePasswordWithToken,
    onChangePasswordFormSubmit
  });

  return <ChangePasswordFormView model={model} />;
}
