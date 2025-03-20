'use server';

import { SignupService } from '@/service/signup';

export async function signupActivation(
  token: string
): Promise<ReturnType<typeof SignupService.activate>> {
  return SignupService.activate(token);
}
