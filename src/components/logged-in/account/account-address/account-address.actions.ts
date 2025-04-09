'use server';

import { CertFlowServices } from '@/service';

export async function getAddress() {
  return CertFlowServices.getAddress();
}
