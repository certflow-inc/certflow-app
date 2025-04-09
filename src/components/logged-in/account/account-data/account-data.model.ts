import { AccountUpdateResponse } from '@/service/types';
import { IntegrationFieldError } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { ACCOUNT_DATA_FLOW } from './account-data.constants';
import { ACCOUNT_DATA_SCHEMA } from './account-data.schema';
import {
  AccountDataFormData,
  UseAccountModelProps
} from './account-data.types';

export function useAccountDataModel({ data, action }: UseAccountModelProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<
    IntegrationFieldError[] | undefined
  >();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid }
  } = useForm<AccountDataFormData>({
    mode: 'onChange',
    resolver: zodResolver(ACCOUNT_DATA_SCHEMA)
  });

  const registeredFields = {
    fantasy: register('fantasy')
  };

  const handleFormSubmit = handleSubmit(async (data: AccountDataFormData) => {
    const { fantasy } = data;
    setFieldErrors(undefined);

    setIsProcessing(true);
    const response = await action(fantasy);
    setIsProcessing(false);

    if (response.ok) {
      toast('Dados atualizados com sucesso', {
        type: 'success',
        position: 'bottom-center',
        closeOnClick: true
      });
      return;
    }

    const feedbackError =
      ACCOUNT_DATA_FLOW[response.dataError?.error as AccountUpdateResponse];

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
    if (fieldErrors) {
      fieldErrors.forEach((error) => {
        setError(error.field as keyof AccountDataFormData, {
          message: error.message
        });
      });
    }
  }, [fieldErrors, setError]);

  return {
    data,
    errors,
    isValid,
    registeredFields,
    isProcessing,
    handleFormSubmit
  };
}
