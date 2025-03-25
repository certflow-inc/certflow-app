'use client';

import { IntegrationFlow } from '@/types';
import { useState } from 'react';
import { Feedback } from '../feedback';
import { ActivationRequestForm } from './form';

export function ActivationRequestView() {
  const [flowError, setFlowError] = useState<IntegrationFlow | null>(null);

  if (flowError) {
    return <Feedback {...flowError} className="flex-1" />;
  }

  return <ActivationRequestForm onActivationRequestFormSubmit={setFlowError} />;
}
