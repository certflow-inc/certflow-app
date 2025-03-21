import { createSession } from '@/lib/session';
import { ROUTES } from '@/routes';
import { SigninResponse } from '@/service/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { SIGNIN_FLOW } from '../signin.constants';
import { SIGNIN_FORM_SCHEMA } from './form.schema';
import {
  SigninFieldError,
  SigninFormData,
  UseSigninFormModelProps
} from './form.types';

export function useFormModel({
  action,
  onSigninSubmit
}: UseSigninFormModelProps) {
  const rotuer = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<
    SigninFieldError[] | undefined
  >();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    setFocus
  } = useForm<SigninFormData>({
    resolver: zodResolver(SIGNIN_FORM_SCHEMA),
    values: {
      email: 'ricardo.almendro.ruiz@gmail.com',
      password: 'Cf123456'
    }
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
      createSession(response.data.token, response.data.refreshToken);
      rotuer.push(ROUTES.DASHBOARD);
      return;
    }

    const signinFlow = SIGNIN_FLOW[response.dataError?.error as SigninResponse];

    if (signinFlow.flow) {
      onSigninSubmit(signinFlow);
      return;
    }

    if (signinFlow.toast) {
      toast(signinFlow.title, {
        type: 'error',
        position: 'bottom-center',
        closeOnClick: true
      });
      return;
    }

    if (signinFlow.field) {
      setFieldErrors([
        {
          field: signinFlow.field,
          message: signinFlow.title
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
