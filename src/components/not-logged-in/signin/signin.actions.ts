'use server';

import { CertFlowServices } from '@/service/base';

export async function signin(
  email: string,
  password: string
): Promise<ReturnType<typeof CertFlowServices.signin>> {
  try {
    return await CertFlowServices.signin(email, password);
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
