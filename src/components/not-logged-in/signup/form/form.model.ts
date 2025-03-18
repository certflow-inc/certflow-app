import { PUBLIC_ROUTES } from '@/routes';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Register } from '@/types/register';
import { PERSON_TYPES } from './form.constants';
import { SIGNUP_FORM_SCHEMA } from './form.schema';
import {
  PersonType,
  SignupFormData,
  UseSignupFormModelProps
} from './form.types';

export function useSignupFormModel({
  onSignupSubmit
}: UseSignupFormModelProps) {
  const router = useRouter();
  const [showCorporationInformations, setShowCorporationInformations] =
    useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    resetField,
    setFocus,
    formState: { errors }
  } = useForm<SignupFormData>({
    resolver: zodResolver(SIGNUP_FORM_SCHEMA)
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
    router.push(PUBLIC_ROUTES.SIGNIN);
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

  const handleSignupSubmit = handleSubmit((data: SignupFormData) =>
    onSignupSubmit(data as Register)
  );

  useEffect(() => {
    setValue('type', 'individual');
  }, [setValue]);

  useEffect(() => {
    setFocus('taxId');
  }, [setFocus]);

  return {
    errors,
    registeredFields,
    showCorporationInformations,
    handleSignupSubmit,
    handleBackButtonClick,
    handleTypePersonChange,
    PERSON_TYPES
  };
}
