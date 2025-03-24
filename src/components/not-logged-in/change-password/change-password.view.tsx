'use client';

import { useState } from 'react';
import { Feedback } from '../feedback';
import { ChangePasswordFlow } from './change-password.types';
import { ChangePasswordForm } from './form';

export function ChangePasswordView({
  checkTokenResult
}: {
  checkTokenResult: ChangePasswordFlow | null;
}) {
  const [flowError, setFlowError] = useState<ChangePasswordFlow | null>(
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
