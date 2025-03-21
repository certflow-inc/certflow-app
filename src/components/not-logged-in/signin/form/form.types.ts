import { ComponentProps } from 'react';
import { z } from 'zod';
import { signin } from '../signin.actions';
import { SigninFlow } from '../signin.types';
import { useFormModel } from './form.model';
import { SIGNIN_FORM_SCHEMA } from './form.schema';

export type SigninFormData = z.infer<typeof SIGNIN_FORM_SCHEMA>;

export type UseSigninFormModelProps = {
  action: typeof signin;
  onSigninSubmit: (data: SigninFlow | null) => void;
};

export type SigninFormViewProps = ComponentProps<'form'> & {
  model: ReturnType<typeof useFormModel>;
};

export type SigninFormViewModelProps = Omit<SigninFormViewProps, 'model'> & {
  onSigninSubmit: (data: SigninFlow | null) => void;
};

export type SigninFieldError = {
  field: string;
  message: string;
};
