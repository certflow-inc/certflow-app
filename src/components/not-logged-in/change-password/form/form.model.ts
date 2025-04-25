import { ROUTES } from '@/routes';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Register } from '@/service/base/domain/register';
import { ChangePasswordResponse } from '@/service/base/types';
import { IntegrationFieldError } from '@/types';
import { toast } from 'react-toastify';
import { CHANGE_PASSWORD_FLOW } from '../change-password.constants';
import { CHANGE_PASSWORD_FORM_SCHEMA } from './form.schema';
import {
  ChangePasswordFormData,
  UseChangePasswordFormModelProps
} from './form.types';

export function useSignupFormModel({
  action,
  onChangePasswordFormSubmit
}: UseChangePasswordFormModelProps) {
  const router = useRouter();

  const [fieldErrors, setFieldErrors] = useState<
    IntegrationFieldError[] | undefined
  >();
  const [isProcessing, setIsProcessing] = useState(false);

  const {
    register,
    handleSubmit,
    setFocus,
    setError,
    formState: { errors }
  } = useForm<ChangePasswordFormData>({
    mode: 'onChange',
    resolver: zodResolver(CHANGE_PASSWORD_FORM_SCHEMA)
  });

  const registeredFields = {
    password: register('password'),
    confirmPassword: register('confirmPassword')
  };

  const handleBackButtonClick = () => {
    router.push(ROUTES.SIGNIN.url);
  };

  const handleChangePasswordFormSubmit = handleSubmit(
    async (data: ChangePasswordFormData) => {
      setIsProcessing(true);
      const response = await action(data as Register);
      setIsProcessing(false);

      if (response.ok)
        return onChangePasswordFormSubmit(CHANGE_PASSWORD_FLOW.Ok);

      const feedbackError =
        CHANGE_PASSWORD_FLOW[
          response.dataError?.error as ChangePasswordResponse
        ];

      if (feedbackError.flow) {
        onChangePasswordFormSubmit(feedbackError);
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
