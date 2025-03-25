'use client';

import { IntegrationFlow } from '@/types';
import { useState } from 'react';
import { Feedback } from '../feedback';
import { ForgotPasswordForm } from './form';

export function ForgotPasswordView() {
  const [flowError, setFlowError] = useState<IntegrationFlow | null>(null);

  if (flowError) {
    return <Feedback {...flowError} className="flex-1" />;
  }

  return <ForgotPasswordForm onForgotPasswordSubmit={setFlowError} />;
}
