import { createSession } from '@/lib/session';
import { ROUTES } from '@/routes';
import { SigninResponse } from '@/service/types';
import { IntegrationFieldError } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { SIGNIN_FLOW } from '../signin.constants';
import { SIGNIN_FORM_SCHEMA } from './form.schema';
import { SigninFormData, UseSigninFormModelProps } from './form.types';

export function useFormModel({
  action,
  onSigninSubmit
}: UseSigninFormModelProps) {
  const rotuer = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<
    IntegrationFieldError[] | undefined
  >();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    setFocus
  } = useForm<SigninFormData>({
    mode: 'onChange',
    resolver: zodResolver(SIGNIN_FORM_SCHEMA)
  });

  const registeredFields = {
    email: register('email'),
    password: register('password')
  };

  const handleSigninSubmit = handleSubmit(async (data: SigninFormData) => {
    const { email, password } = data;
    setFieldErrors(undefined);

    setIsProcessing(true);
    const response = await action(email, password);
    setIsProcessing(false);

    if (response.ok && response.data?.token) {
      await createSession(response.data.token, response.data.refreshToken);
      rotuer.replace(ROUTES.DASHBOARD);
      return;
    }

    const feedbackError =
      SIGNIN_FLOW[response.dataError?.error as SigninResponse];

    if (feedbackError.flow) {
      onSigninSubmit(feedbackError);
      return;
    }

    if (feedbackError.toast) {
      toast(feedbackError.title, {
        type: 'error',
        position: 'bottom-center',
        closeOnClick: true
      });
      return;
    }

    if (feedbackError.field) {
      setFieldErrors([
        {
          field: feedbackError.field,
          message: feedbackError.title
        }
      ]);
    }
  });

  useEffect(() => {
    setFocus('email');
  }, [setFocus]);

  useEffect(() => {
    if (fieldErrors) {
      fieldErrors.forEach((error) => {
        setError(error.field as keyof SigninFormData, {
          message: error.message
        });
      });
    }
  }, [fieldErrors, setError, setFocus]);

  return {
    rotuer,
    errors,
    isProcessing,
    registeredFields,
    handleSigninSubmit
  };
}
