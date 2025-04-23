'use server';

import { revalidateAllQueries } from '@/actions/revalidate-queries';
import { CertFlowServices } from '@/service/base';

export async function signin(
  email: string,
  password: string
): Promise<ReturnType<typeof CertFlowServices.signin>> {
  try {
    const response = await CertFlowServices.signin(email, password);
    revalidateAllQueries();
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
