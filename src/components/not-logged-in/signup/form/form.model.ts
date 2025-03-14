import { PUBLIC_ROUTES } from '@/routes';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { PERSON_TYPES } from './form.constants';
import { SIGNUP_FORM_SCHEMA } from './form.schema';
import { PersonType, SignupFormData } from './form.types';

export function useSignupFormModel() {
  const router = useRouter();
  const [showCorporationInformations, setShowCorporationInformations] =
    useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    resetField,
    formState: { errors }
  } = useForm<SignupFormData>({
    resolver: zodResolver(SIGNUP_FORM_SCHEMA)
  });

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

  const handleSignupSubmit = handleSubmit((data: SignupFormData) => {
    console.log('data', data);
  });

  useEffect(() => {
    setValue('type', 'individual');
  }, [setValue]);

  return {
    register,
    handleSignupSubmit,
    errors,
    handleBackButtonClick,
    handleTypePersonChange,
    showCorporationInformations,
    PERSON_TYPES
  };
}
