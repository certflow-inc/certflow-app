'use server';

import { CertFlowServices } from '@/service/base';
import { FETCH_TAGS } from '@/service/base/endpoints/endpoints.constants';
import { revalidateTag } from 'next/cache';

export async function updateAccountData(
  fantasy: string
): Promise<ReturnType<typeof CertFlowServices.updateAccount>> {
  try {
    const response = await CertFlowServices.updateAccount(fantasy);
    revalidateTag(FETCH_TAGS.TAG_GET_ACCOUNT);

    return response;
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
