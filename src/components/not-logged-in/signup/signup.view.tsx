'use client';

import { IntegrationFlow } from '@/types';
import { useState } from 'react';
import { Feedback } from '../feedback';
import { SignupForm } from './form';

export function SignupView() {
  const [flowError, setFlowError] = useState<IntegrationFlow | null>(null);

  if (flowError) {
    return <Feedback {...flowError} className="flex-1" />;
  }

  return <SignupForm onSignupSubmit={setFlowError} className="flex-1" />;
}
