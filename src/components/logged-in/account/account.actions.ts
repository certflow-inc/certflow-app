'use server';

import { CertFlowServices } from '@/service/base';

export async function getAccount() {
  return CertFlowServices.getAccount();
}
