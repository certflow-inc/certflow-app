'use server';

import { CertFlowServices } from '@/service';

export async function getAccount() {
  const response = await CertFlowServices.getAccount();

  return response;
}
