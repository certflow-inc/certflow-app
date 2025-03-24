'use client';

import { useState } from 'react';
import { Feedback } from '../feedback';
import { ForgotPasswordFlow } from './forgot-password.types';
import { ForgotPasswordForm } from './form';

export function ForgotPasswordView() {
  const [flowError, setFlowError] = useState<ForgotPasswordFlow | null>(null);

  if (flowError) {
    return <Feedback {...flowError} className="flex-1" />;
  }

  return <ForgotPasswordForm onForgotPasswordSubmit={setFlowError} />;
}
