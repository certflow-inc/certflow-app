'use server';

import { CertFlowServices } from '@/service/base';
import { ApiResponse } from '@/service/base/types';

export async function requestPasswordReset(
  email: string
): Promise<ApiResponse<void>> {
  try {
    return await CertFlowServices.passwordRecovery(email);
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
