'use server';

import { CertFlowServices } from '@/service/base';

export async function signupActivation(
  token: string
): Promise<ReturnType<typeof CertFlowServices.activate>> {
  return CertFlowServices.activate(token);
}
