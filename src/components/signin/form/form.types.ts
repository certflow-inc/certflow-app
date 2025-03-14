import { ComponentProps } from 'react';
import { z } from 'zod';
import { useFormModel } from './form.model';
import { SIGNIN_FORM_SCHEMA } from './form.schema';

export type SigninFormData = z.infer<typeof SIGNIN_FORM_SCHEMA>;

export type SigninFormViewProps = ComponentProps<'form'> & {
  model: ReturnType<typeof useFormModel>;
};

export type SigninFormViewModelProps = Omit<SigninFormViewProps, 'model'>;
