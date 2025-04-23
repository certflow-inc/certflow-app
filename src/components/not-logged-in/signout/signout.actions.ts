'use server';

import { revalidateAllQueries } from '@/actions/revalidate-queries';
import { destroySession, getRefreshToken } from '@/lib/session';
import { ROUTES } from '@/routes';
import { CertFlowServices } from '@/service/base';
import { redirect } from 'next/navigation';

export async function signout(): Promise<void> {
  try {
    const refreshToken = await getRefreshToken();

    if (refreshToken) {
      await CertFlowServices.signout(refreshToken);
    }
  } finally {
    revalidateAllQueries();
    destroySession();
    redirect(ROUTES.SIGNIN);
  }
}
