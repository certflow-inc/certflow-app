'use client';

import { SignupResponse } from '@/service/signup/signup.types';
import { Register } from '@/types/register';
import { useState } from 'react';
import { Feedback } from '../feedback';
import { SignupForm } from './form';
import { SIGNUP_FLOW } from './signup.constants';
import { SignupFieldError, SignupFlow, SignupViewProps } from './signup.types';

export function SignupView({ action }: SignupViewProps) {
  const [fieldErrors, setFieldErrors] = useState<
    SignupFieldError[] | undefined
  >();
  const [flowError, setFlowError] = useState<SignupFlow | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSignupSubmit = async (data: Register) => {
    setIsProcessing(true);
    const response = await action(data);
    setIsProcessing(false);

    if (response.ok) return setFlowError(SIGNUP_FLOW.Ok);

    const error = SIGNUP_FLOW[response.dataError?.error as SignupResponse];

    if (!error.field) {
      setFlowError(SIGNUP_FLOW[response.dataError?.error as SignupResponse]);
      return;
    }

    setFieldErrors([
      {
        field: error.field,
        message: error.title
      }
    ]);
  };

  if (flowError) {
    return <Feedback {...flowError} className="flex-1" />;
  }

  return (
    <SignupForm
      onSignupSubmit={handleSignupSubmit}
      isProcessing={isProcessing}
      fieldErrors={fieldErrors}
      className="flex-1"
    />
  );
}
