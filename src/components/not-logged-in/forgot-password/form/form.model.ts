import { ROUTES } from '@/routes';
import { PasswordRecoveryResponse } from '@/service/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FORGOT_PASSWOR_FLOW } from '../forgot-password.constant';
import { FORGOT_PASSWORD_FORM_SCHEMA } from './form.schema';
import {
  ForgotPasswordFieldError,
  ForgotPasswordFormData,
  UseForgotPasswordFormModelProps
} from './form.types';

export function useForgotPasswordFormModel({
  action,
  onForgotPasswordSubmit
}: UseForgotPasswordFormModelProps) {
  const router = useRouter();
  const [fieldErrors, setFieldErrors] = useState<
    ForgotPasswordFieldError[] | undefined
  >();
  const [isProcessing, setIsProcessing] = useState(false);

  const {
    register,
    handleSubmit,
    setFocus,
    setError,
    formState: { errors }
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(FORGOT_PASSWORD_FORM_SCHEMA)
  });

  const registeredFields = {
    email: register('email')
  };

  const handleBackButtonClick = () => {
    router.push(ROUTES.SIGNIN);
  };

  const handleForgotPasswordSubmit = handleSubmit(
    async (data: ForgotPasswordFormData) => {
      setIsProcessing(true);
      const response = await action(data.email);
      setIsProcessing(false);

      if (response.ok) return onForgotPasswordSubmit(FORGOT_PASSWOR_FLOW.Ok);

      const error =
        FORGOT_PASSWOR_FLOW[
          response.dataError?.error as PasswordRecoveryResponse
        ];

      if (!error.field) {
        onForgotPasswordSubmit(error);
        return;
      }

      setFieldErrors([
        {
          field: error.field,
          message: error.title
        }
      ]);
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
