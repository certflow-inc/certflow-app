'use client';

import { signup } from './signup.actions';
import { SignupView } from './signup.view';

export function SignupViewModel() {
  return <SignupView action={signup} />;
}
