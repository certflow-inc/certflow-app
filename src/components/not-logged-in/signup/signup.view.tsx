'use client';

import { useState } from 'react';
import { Feedback } from '../feedback';
import { SignupForm } from './form';
import { SignupFlow } from './signup.types';

export function SignupView() {
  const [flowError, setFlowError] = useState<SignupFlow | null>(null);

  if (flowError) {
    return <Feedback {...flowError} className="flex-1" />;
  }

  return <SignupForm onSignupSubmit={setFlowError} className="flex-1" />;
}
