'use client';

import { useState } from 'react';
import { Feedback } from '../feedback';
import { SigninForm } from './form';
import { SigninFlow } from './signin.types';

export function SigninView() {
  const [flowError, setFlowError] = useState<SigninFlow | null>(null);

  if (flowError) {
    return <Feedback {...flowError} className="flex-1" />;
  }

  return <SigninForm onSigninSubmit={setFlowError} className="flex-1" />;
}
