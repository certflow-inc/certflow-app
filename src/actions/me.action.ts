'use server';

import { CertFlowServices } from '@/service';

export async function getMeDataAction() {
  const { data: me } = await CertFlowServices.getMe();
  return me;
}
