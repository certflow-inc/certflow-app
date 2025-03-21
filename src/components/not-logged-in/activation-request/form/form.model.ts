import { AccountVerificationResponse } from '@/service/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ACTIVATION_REQUEST_FLOW } from '../activation-request.constants';
import { ACTIVATION_REQUEST_FORM_SCHEMA } from './form.schema';
import {
  ActivationRequestFieldError,
  ActivatioRequestFormData,
  UseActivationRequestFormModelProps
} from './form.types';

export function useActivationRequestModel({
  action,
  onActivationRequestFormSubmit
}: UseActivationRequestFormModelProps) {
  const [fieldErrors, setFieldErrors] = useState<
    ActivationRequestFieldError[] | undefined
  >();
  const [isProcessing, setIsProcessing] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
    setFocus
  } = useForm<ActivatioRequestFormData>({
    resolver: zodResolver(ACTIVATION_REQUEST_FORM_SCHEMA)
  });

  const registeredFields = {
    email: register('email')
  };

  const handleActivationRequestSubmit = handleSubmit(
    async (data: ActivatioRequestFormData) => {
      setIsProcessing(true);
      const response = await action(data.email);
      setIsProcessing(false);

      if (response.ok)
        return onActivationRequestFormSubmit(ACTIVATION_REQUEST_FLOW.Ok);

      const error =
        ACTIVATION_REQUEST_FLOW[
          response.dataError?.error as AccountVerificationResponse
        ];

      if (!error.field) {
        onActivationRequestFormSubmit(error);
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
        setError(error.field as keyof ActivatioRequestFormData, {
          message: error.message
        });
      });
    }
  }, [fieldErrors, setError, setFocus]);

  return {
    errors,
    isValid,
    isProcessing,
    registeredFields,
    handleActivationRequestSubmit
  };
}
