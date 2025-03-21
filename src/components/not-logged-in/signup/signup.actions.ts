'use server';

import { CertFlowServices } from '@/service';
import { Register } from '@/service/domain/register';

export async function signup(
  register: Register
): Promise<ReturnType<typeof CertFlowServices.signup>> {
  try {
    return await CertFlowServices.signup(register);
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
