import { ROUTES } from '@/routes';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Register } from '@/service/domain/register';
import { ChangePasswordResponse } from '@/service/types';
import { toast } from 'react-toastify';
import { CHANGE_PASSWORD_FLOW } from '../change-password.constants';
import { CHANGE_PASSWORD_FORM_SCHEMA } from './form.schema';
import {
  ChangePasswordFormData,
  SignupFieldError,
  UseChangePasswordFormModelProps
} from './form.types';

export function useSignupFormModel({
  action,
  onChangePasswordFormSubmit
}: UseChangePasswordFormModelProps) {
  const router = useRouter();

  const [fieldErrors, setFieldErrors] = useState<
    SignupFieldError[] | undefined
  >();
  const [isProcessing, setIsProcessing] = useState(false);

  const {
    register,
    handleSubmit,
    setFocus,
    setError,
    formState: { errors }
  } = useForm<ChangePasswordFormData>({
    resolver: zodResolver(CHANGE_PASSWORD_FORM_SCHEMA)
  });

  const registeredFields = {
    password: register('password'),
    confirmPassword: register('confirmPassword')
  };

  const handleBackButtonClick = () => {
    router.push(ROUTES.SIGNIN);
  };

  const handleChangePasswordFormSubmit = handleSubmit(
    async (data: ChangePasswordFormData) => {
      setIsProcessing(true);
      const response = await action(data as Register);
      setIsProcessing(false);

      if (response.ok)
        return onChangePasswordFormSubmit(CHANGE_PASSWORD_FLOW.Ok);

      const signupFlow =
        CHANGE_PASSWORD_FLOW[
          response.dataError?.error as ChangePasswordResponse
        ];

      if (signupFlow.flow) {
        onChangePasswordFormSubmit(signupFlow);
        return;
      }

      if (signupFlow.toast) {
        toast(signupFlow.title, {
          type: 'error',
          position: 'bottom-center',
          closeOnClick: true
        });
        return;
      }

      if (signupFlow.field) {
        setFieldErrors([
          {
            field: signupFlow.field,
            message: signupFlow.title
          }
        ]);
      }
    }
  );

  useEffect(() => {
    setFocus('password');
  }, [setFocus]);

  useEffect(() => {
    if (fieldErrors) {
      fieldErrors.forEach((error) => {
        setError(error.field as keyof ChangePasswordFormData, {
          message: error.message
        });
      });
    }
  }, [fieldErrors, setError, setFocus]);

  return {
    errors,
    registeredFields,
    isProcessing,
    handleChangePasswordFormSubmit,
    handleBackButtonClick
  };
}
