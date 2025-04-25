import { ROUTES } from '@/routes';
import { PasswordRecoveryResponse } from '@/service/base/types';
import { IntegrationFieldError } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { FORGOT_PASSWOR_FLOW } from '../forgot-password.constant';
import { FORGOT_PASSWORD_FORM_SCHEMA } from './form.schema';
import {
  ForgotPasswordFormData,
  UseForgotPasswordFormModelProps
} from './form.types';

export function useForgotPasswordFormModel({
  action,
  onForgotPasswordSubmit
}: UseForgotPasswordFormModelProps) {
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
  } = useForm<ForgotPasswordFormData>({
    mode: 'onChange',
    resolver: zodResolver(FORGOT_PASSWORD_FORM_SCHEMA)
  });

  const registeredFields = {
    email: register('email')
  };

  const handleBackButtonClick = () => {
    router.push(ROUTES.SIGNIN.url);
  };

  const handleForgotPasswordSubmit = handleSubmit(
    async (data: ForgotPasswordFormData) => {
      setIsProcessing(true);
      const response = await action(data.email);
      setIsProcessing(false);

      if (response.ok) return onForgotPasswordSubmit(FORGOT_PASSWOR_FLOW.Ok);

      const feedbackError =
        FORGOT_PASSWOR_FLOW[
          response.dataError?.error as PasswordRecoveryResponse
        ];

      if (feedbackError.flow) {
        onForgotPasswordSubmit(feedbackError);
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
    setFocus('email');
  }, [setFocus]);

  useEffect(() => {
    if (fieldErrors) {
      fieldErrors.forEach((error) => {
        setError(error.field as keyof ForgotPasswordFormData, {
          message: error.message
        });
      });
    }
  }, [fieldErrors, setError, setFocus]);

  return {
    errors,
    registeredFields,
    isProcessing,
    handleBackButtonClick,
    handleForgotPasswordSubmit
  };
}
