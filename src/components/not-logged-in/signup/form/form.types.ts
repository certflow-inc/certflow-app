import { ComponentProps } from 'react';
import { useSignupFormModel } from './form.model';
// import { z } from 'zod';
// import { useFormModel } from './form.model';
// import { SIGNIN_FORM_SCHEMA } from './form.schema';

// export type SigninFormData = z.infer<typeof SIGNIN_FORM_SCHEMA>;

export type SignupFormViewProps = ComponentProps<'form'> & {
  model: ReturnType<typeof useSignupFormModel>;
};

export type SignupFormViewModelProps = Omit<SignupFormViewProps, 'model'>;
