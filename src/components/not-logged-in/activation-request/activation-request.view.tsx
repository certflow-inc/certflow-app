'use client';

import { useState } from 'react';
import { Feedback } from '../feedback';
import { ActivationRequestFlow } from './activation-request.types';
import { ActivationRequestForm } from './form';

export function ActivationRequestView() {
  const [flowError, setFlowError] = useState<ActivationRequestFlow | null>(
    null
  );

  if (flowError) {
    return <Feedback {...flowError} className="flex-1" />;
  }

  return <ActivationRequestForm onActivationRequestFormSubmit={setFlowError} />;
}
