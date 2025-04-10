'use server';

import { CertFlowServices } from '@/service/base';

export async function updateAccountData(
  fantasy: string
): Promise<ReturnType<typeof CertFlowServices.updateAccount>> {
  try {
    return await CertFlowServices.updateAccount(fantasy);
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
