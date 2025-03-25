'use client';

import { IntegrationFlow } from '@/types';
import { useState } from 'react';
import { Feedback } from '../feedback';
import { SigninForm } from './form';

export function SigninView() {
  const [flowError, setFlowError] = useState<IntegrationFlow | null>(null);

  if (flowError) {
    return <Feedback {...flowError} className="flex-1" />;
  }

  return <SigninForm onSigninSubmit={setFlowError} className="flex-1" />;
}
