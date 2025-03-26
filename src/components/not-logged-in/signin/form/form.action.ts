'use server';

import {
  FormFieldsValidationException,
  validateFormFields
} from '@/helpers/form-validations';
import { createSession } from '@/lib/session';
import { CertFlowServices } from '@/service';
import { SigninResponse } from '@/service/types';
import { redirect } from 'next/navigation';
import { SIGNIN_FLOW } from '../signin.constants';
import { SIGNIN_FORM_SCHEMA } from './form.schema';
import { SigninFormData, SigninFormValidations } from './form.types';

export async function signinAction(
  _formState: SigninFormValidations,
  formData: FormData
): Promise<SigninFormValidations> {
  const data: SigninFormData = {
    email: formData.get('email') as string,
    password: formData.get('password') as string
  };

  try {
    validateFormFields<SigninFormData, SigninFormValidations>(
      formData,
      SIGNIN_FORM_SCHEMA
    );

    const response = await CertFlowServices.signin(data.email, data.password);

    if (!response.ok) {
      const feedbackError =
        SIGNIN_FLOW[response.dataError?.error as SigninResponse];

      if (feedbackError.flow || feedbackError.toast) {
        return {
          ok: false,
          data,
          integrationFlow: feedbackError
        };
      }

      if (feedbackError.field) {
        const fieldError = { [feedbackError.field]: [feedbackError.title] };
        return {
          ok: false,
          data,
          fieldErrors: { ...fieldError }
        };
      }
    }

    if (!response.data?.token || !response.data.refreshToken) {
      return {
        ok: false,
        data,
        message: 'Ocorreu um erro ao fazer o login. Tente novamente.'
      };
    }

    createSession(response.data!.token, response.data!.refreshToken);
  } catch (error: unknown) {
    if (error instanceof FormFieldsValidationException) {
      return {
        ok: false,
        data,
        fieldErrors: error.errors
      };
    }

    return {
      ok: false,
      data,
      message: 'Ocorreu um erro ao fazer o login. Tente novamente.'
    };
  }

  redirect('/');
}
