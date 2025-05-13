'use server';

import { CertFlowServices } from '@/service';
import { PaymentCreateRequest } from '@/service/base/domain/payment';
import { FETCH_TAGS } from '@/service/base/endpoints/endpoints.constants';
import { revalidateTag } from 'next/cache';

export async function createPaymentAction(
  payload: PaymentCreateRequest
): Promise<ReturnType<typeof CertFlowServices.createPayment>> {
  try {
    const reponse = await CertFlowServices.createPayment(payload);
    revalidateTag(FETCH_TAGS.TAG_GET_ACCOUNT);
    return reponse;
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
