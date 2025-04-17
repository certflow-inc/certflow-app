'use server';

import { destroySession, getRefreshToken } from '@/lib/session';
import { ROUTES } from '@/routes';
import { CertFlowServices } from '@/service/base';
import { FETCH_TAGS } from '@/service/base/endpoints/endpoints.constants';
import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

export async function signout(): Promise<void> {
  try {
    const refreshToken = await getRefreshToken();

    if (refreshToken) {
      await CertFlowServices.signout(refreshToken);
    }
  } finally {
    Object.keys(FETCH_TAGS).map((key) => {
      const query = FETCH_TAGS[key as keyof typeof FETCH_TAGS];
      revalidateTag(query);
    });

    destroySession();
    redirect(ROUTES.SIGNIN);
  }
}
