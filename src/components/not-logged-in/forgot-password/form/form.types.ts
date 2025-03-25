import { IntegrationFlow } from '@/types';
import { ComponentProps } from 'react';
import { z } from 'zod';
import { requestPasswordReset } from '../forgot-password.actions';
import { useForgotPasswordFormModel } from './form.model';
import { FORGOT_PASSWORD_FORM_SCHEMA } from './form.schema';

export type ForgotPasswordFormData = z.infer<
  typeof FORGOT_PASSWORD_FORM_SCHEMA
>;

export type UseForgotPasswordFormModelProps = {
  action: typeof requestPasswordReset;
  onForgotPasswordSubmit: (data: IntegrationFlow | null) => void;
};

export type ForgotPasswordFormViewProps = ComponentProps<'form'> & {
  model: ReturnType<typeof useForgotPasswordFormModel>;
};

export type ForgotPasswordFormViewModelProps = Omit<
  ForgotPasswordFormViewProps,
  'model'
> & {
  onForgotPasswordSubmit: (data: IntegrationFlow | null) => void;
};
