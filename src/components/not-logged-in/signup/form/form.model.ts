import { ROUTES } from '@/routes';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { PersonType, Register } from '@/service/domain/register';
import { SignupResponse } from '@/service/types';
import { IntegrationFieldError } from '@/types';
import { toast } from 'react-toastify';
import { SIGNUP_FLOW } from '../signup.constants';
import { PERSON_TYPES } from './form.constants';
import { SIGNUP_FORM_SCHEMA } from './form.schema';
import { SignupFormData, UseSignupFormModelProps } from './form.types';

export function useSignupFormModel({
  action,
  onSignupSubmit
}: UseSignupFormModelProps) {
  const router = useRouter();
  const [showCorporationInformations, setShowCorporationInformations] =
    useState(false);

  const [fieldErrors, setFieldErrors] = useState<
    IntegrationFieldError[] | undefined
  >();
  const [isProcessing, setIsProcessing] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    resetField,
    setFocus,
    setError,
    formState: { errors }
  } = useForm<SignupFormData>({
    resolver: zodResolver(SIGNUP_FORM_SCHEMA)
    // values: {
    //   type: 'person',
    //   companyTaxId: '',
    //   companyName: '',
    //   name: 'Rick',
    //   taxId: '26852132870',
    //   email: 'ricardo.almendro.ruiz@gmail.com',
    //   mobilePhone: '(19) 99941-2206',
    //   password: 'Cf123456',
    //   confirmPassword: 'Cf123456'
    // }
  });

  const registeredFields = {
    type: register('type'),
    companyTaxId: register('companyTaxId'),
    companyName: register('companyName'),
    name: register('name'),
    taxId: register('taxId'),
    email: register('email'),
    mobilePhone: register('mobilePhone'),
    password: register('password'),
    confirmPassword: register('confirmPassword')
  };

  const handleBackButtonClick = () => {
    router.push(ROUTES.SIGNIN);
  };

  const handleTypePersonChange = (value: PersonType) => {
    const isCorporation = value === 'corporation';
    setValue('type', value);
    setShowCorporationInformations(isCorporation);

    if (!isCorporation) {
      resetField('companyTaxId');
      resetField('companyName');
    }
  };

  const handleSignupSubmit = handleSubmit(async (data: SignupFormData) => {
    setIsProcessing(true);
    const response = await action(data as Register);
    setIsProcessing(false);

    if (response.ok) return onSignupSubmit(SIGNUP_FLOW.Ok);

    const feedbackError =
      SIGNUP_FLOW[response.dataError?.error as SignupResponse];

    if (feedbackError.flow) {
      onSignupSubmit(feedbackError);
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
  });

  useEffect(() => {
    setValue('type', 'individual');
  }, [setValue]);

  useEffect(() => {
    setFocus('taxId');
  }, [setFocus]);

  useEffect(() => {
    if (fieldErrors) {
      fieldErrors.forEach((error) => {
        setError(error.field as keyof Register, { message: error.message });
      });
    }
  }, [fieldErrors, setError, setFocus]);

  return {
    errors,
    registeredFields,
    showCorporationInformations,
    isProcessing,
    handleSignupSubmit,
    handleBackButtonClick,
    handleTypePersonChange,
    PERSON_TYPES
  };
}
