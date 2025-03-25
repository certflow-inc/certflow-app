'use client';

import { IntegrationFlow } from '@/types';
import { useState } from 'react';
import { Feedback } from '../feedback';
import { ChangePasswordForm } from './form';

export function ChangePasswordView({
  checkTokenResult
}: {
  checkTokenResult: IntegrationFlow | null;
}) {
  const [flowError, setFlowError] = useState<IntegrationFlow | null>(
    checkTokenResult
  );

  if (flowError) {
    return <Feedback {...flowError} className="flex-1" />;
  }

  return (
    <ChangePasswordForm
      onChangePasswordFormSubmit={setFlowError}
      className="flex-1"
    />
  );
}
