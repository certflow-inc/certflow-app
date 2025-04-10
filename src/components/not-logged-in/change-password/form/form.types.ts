import { ChangePassword } from '@/service/base/domain/auth';
import { ApiResponse } from '@/service/base/types';
import { IntegrationFlow } from '@/types';
import { ComponentProps } from 'react';
import { z } from 'zod';
import { useSignupFormModel } from './form.model';
import { CHANGE_PASSWORD_FORM_SCHEMA } from './form.schema';

export type UseChangePasswordFormModelProps = {
  action: (data: ChangePassword) => Promise<ApiResponse<void>>;
  onChangePasswordFormSubmit: (data: IntegrationFlow | null) => void;
};

export type ChangePasswordFormData = z.infer<
  typeof CHANGE_PASSWORD_FORM_SCHEMA
>;

export type ChangePasswordFormViewProps = ComponentProps<'form'> & {
  model: ReturnType<typeof useSignupFormModel>;
};

export type ChangePasswordFormViewModelProps = Omit<
  ChangePasswordFormViewProps,
  'model'
> & {
  onChangePasswordFormSubmit: (data: IntegrationFlow | null) => void;
};
