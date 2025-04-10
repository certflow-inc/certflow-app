import { PersonType } from '@/service/base/domain/register';
import { IntegrationFlow } from '@/types';
import { ComponentProps } from 'react';
import { z } from 'zod';
import { signup } from '../signup.actions';
import { useSignupFormModel } from './form.model';
import { SIGNUP_FORM_SCHEMA } from './form.schema';

export type UseSignupFormModelProps = {
  action: typeof signup;
  onSignupSubmit: (data: IntegrationFlow | null) => void;
};

export type SignupFormData = z.infer<typeof SIGNUP_FORM_SCHEMA>;

export type SignupFormViewProps = ComponentProps<'form'> & {
  model: ReturnType<typeof useSignupFormModel>;
};

export type SignupFormViewModelProps = Omit<SignupFormViewProps, 'model'> & {
  onSignupSubmit: (data: IntegrationFlow | null) => void;
};

export type PersonTypeObject = {
  value: PersonType;
  label: string;
};
