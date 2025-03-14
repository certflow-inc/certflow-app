import { ComponentProps } from 'react';
import { z } from 'zod';
import { useSignupFormModel } from './form.model';
import { SIGNUP_FORM_SCHEMA } from './form.schema';

export type SignupFormData = z.infer<typeof SIGNUP_FORM_SCHEMA>;

export type SignupFormViewProps = ComponentProps<'form'> & {
  model: ReturnType<typeof useSignupFormModel>;
};

export type SignupFormViewModelProps = Omit<SignupFormViewProps, 'model'>;

export type PersonType = 'individual' | 'corporation';
export type PersonTypeObject = {
  value: PersonType;
  label: string;
};
