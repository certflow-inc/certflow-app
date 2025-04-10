'use client';

import { AccountAddressUpdateResponse } from '@/service/base/types';
import { IntegrationFieldError } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { ACCOUNT_ADDRESS_FLOW } from './account-address.constants';
import { ACCOUNT_ADDRESS_SCHEMA } from './account-address.schema';
import {
  AccountAddressFormData,
  UseAccountAddresModelProps
} from './account-address.types';

export function useAccountAddressModel({
  action,
  data
}: UseAccountAddresModelProps) {
  const [selectedState, setSelectedState] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<
    IntegrationFieldError[] | undefined
  >();

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    trigger,
    formState: { errors, isValid }
  } = useForm<AccountAddressFormData>({
    mode: 'onChange',
    resolver: zodResolver(ACCOUNT_ADDRESS_SCHEMA)
  });

  const registeredFields = {
    address: register('address'),
    city: register('city'),
    complement: register('complement'),
    district: register('district'),
    number: register('number'),
    state: register('state'),
    zip: register('zip'),
    country: register('country')
  };

  const handleFormSubmit = handleSubmit(
    async (data: AccountAddressFormData) => {
      setFieldErrors(undefined);

      const { complement, country, zip, ...address } = data;
      const controlledCountry =
        !country || country !== 'Brasil' ? 'Brasil' : country;
      const rawZip = zip.replace(/[^0-9]/g, '');

      const payload = {
        ...(complement ? { complement } : undefined),
        country: controlledCountry,
        zip: rawZip,
        ...address
      };

      setIsProcessing(true);
      const response = await action(payload);
      setIsProcessing(false);

      if (response.ok) {
        toast(ACCOUNT_ADDRESS_FLOW.Ok.title, {
          type: 'success',
          position: 'bottom-center',
          closeOnClick: true
        });
        return;
      }

      const feedbackError =
        ACCOUNT_ADDRESS_FLOW[
          response.dataError?.error as AccountAddressUpdateResponse
        ];

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

  const handleBrazilianStateChange = useCallback(
    (value: string) => {
      if (value) {
        setValue('state', value);
        setSelectedState(value);
        trigger();
      }
    },
    [setValue, trigger]
  );

  useEffect(() => {
    if (fieldErrors) {
      fieldErrors.forEach((error) => {
        setError(error.field as keyof AccountAddressFormData, {
          message: error.message
        });
      });
    }
  }, [fieldErrors, setError]);

  useEffect(() => {
    if (data?.state) {
      handleBrazilianStateChange(data.state);
    }
  }, [data?.state, handleBrazilianStateChange]);

  return {
    errors,
    isValid,
    registeredFields,
    isProcessing,
    selectedState,
    handleFormSubmit,
    handleBrazilianStateChange
  };
}
