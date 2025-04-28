'use client';

import { redirectFromClient } from '@/actions/navigation';
import { BRAZILIAN_STATES } from '@/lib/common-constants';
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
  data,
  action,
  cepAction
}: UseAccountAddresModelProps) {
  const [selectedState, setSelectedState] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCepSearching, setIsCepSearching] = useState(false);
  const [previousCep, setPreviousCep] = useState('');
  const [fieldErrors, setFieldErrors] = useState<
    IntegrationFieldError[] | undefined
  >();

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    setError,
    setFocus,
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

      if (feedbackError.redirect) {
        redirectFromClient(feedbackError.redirect);
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

  const loadAddressByCep = useCallback(
    async (cep: string) => {
      try {
        if (cep.length === 9 && cep !== previousCep) {
          setIsCepSearching(true);
          const formattedCep = cep.replace(/[^0-9]/g, '');
          const response = await cepAction(formattedCep);

          if (!response.ok) {
            setValue('zip', previousCep);
            toast(response.error, {
              type: 'error',
              position: 'bottom-center',
              closeOnClick: true
            });
            return;
          }

          if (response.ok) {
            console.log('loadAddressByCep sucesso', response.data);
            const state = BRAZILIAN_STATES.find(
              (state) => state.key === response.data?.state
            );

            setValue('address', response.data?.street || '');
            setValue('city', response.data?.city || '');
            setValue('state', response.data?.state || '');
            setValue('district', response.data?.neighborhood || '');
            setValue('number', '');
            setValue('country', 'Brasil');
            handleBrazilianStateChange(state?.value || '');
            setFocus('number');
            setPreviousCep(cep);
          }
        }
      } catch (_error: unknown) {
        setValue('zip', previousCep);
        toast('Erro ao obter endereço do CEP', {
          type: 'error',
          position: 'bottom-center',
          closeOnClick: true
        });
      } finally {
        setIsCepSearching(false);
      }
    },
    [cepAction, handleBrazilianStateChange, previousCep, setFocus, setValue]
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

  useEffect(() => {
    setPreviousCep(getValues('zip'));
  }, [getValues]);

  return {
    errors,
    isValid,
    registeredFields,
    isProcessing,
    isCepSearching,
    selectedState,
    handleFormSubmit,
    handleBrazilianStateChange,
    loadAddressByCep
  };
}
