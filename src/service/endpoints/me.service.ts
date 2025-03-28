'server only';

import { UnAuthenticatedException } from '@/exceptions/UnAuthenticatedException';
import { ROUTES } from '@/routes';
import { redirect } from 'next/navigation';
import { API_COMMON_RESPONSE_ERROR } from '../constants';
import { Me } from '../domain/me';
import { ApiError, ApiResponse } from '../types';
import { TIME_OUT } from './endpoints.constants';

export const TAG_GET_ME = 'getMe';

export async function getMe(): Promise<ApiResponse<Me>> {
  try {
    const response = await fetch(`${process.env.API_URL}/me`, {
      signal: AbortSignal.timeout(TIME_OUT),
      method: 'GET',
      next: {
        tags: [TAG_GET_ME]
        // revalidate: 60 * 60 * 24 // 1 day
      }
    });

    if (response.ok) {
      return {
        ok: true,
        data: await response.json()
      };
    }

    const dataError: ApiError = await response.json();

    return {
      ok: false,
      dataError
    };
  } catch (_error) {
    if (_error instanceof UnAuthenticatedException) {
      redirect(ROUTES.SIGNOUT);
    }

    throw new Error(API_COMMON_RESPONSE_ERROR.API_SERVER_ERROR);
  }
}
