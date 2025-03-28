import { AccountVerificationResponse } from '@/service/types';
import { IntegrationFieldError } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { ACTIVATION_REQUEST_FLOW } from '../activation-request.constants';
import { ACTIVATION_REQUEST_FORM_SCHEMA } from './form.schema';
import {
  ActivatioRequestFormData,
  UseActivationRequestFormModelProps
} from './form.types';

export function useActivationRequestModel({
  action,
  onActivationRequestFormSubmit
}: UseActivationRequestFormModelProps) {
  const [fieldErrors, setFieldErrors] = useState<
    IntegrationFieldError[] | undefined
  >();
  const [isProcessing, setIsProcessing] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
    setFocus
  } = useForm<ActivatioRequestFormData>({
    mode: 'onChange',
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

      const feedbackError =
        ACTIVATION_REQUEST_FLOW[
          response.dataError?.error as AccountVerificationResponse
        ];

      if (feedbackError.flow) {
        onActivationRequestFormSubmit(feedbackError);
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
