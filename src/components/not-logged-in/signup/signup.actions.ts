'use server';

import { SignupService } from '@/service/signup';
import { Register } from '@/types/register';

export async function signup(
  register: Register
): Promise<ReturnType<typeof SignupService.signup>> {
  try {
    return SignupService.signup(register);

    //
  } catch (error: unknown) {
    const err = error as Error;

    return {
      ok: false,
      dataError: {
        error: err.message
      }
    };
  }
}
