'use server';

import { CertFlowServices } from '@/service';

export async function getAccount() {
  return CertFlowServices.getAccount();
}
