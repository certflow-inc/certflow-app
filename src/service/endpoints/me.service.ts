'use server';

import { UnAuthenticatedException } from '@/exceptions/UnAuthenticatedException';
import { httpRequest } from '@/lib/fetch';
import { ROUTES } from '@/routes';
import { redirect } from 'next/navigation';
import { API_COMMON_RESPONSE_ERROR } from '../constants';
import { Me } from '../domain/me';
import { ApiError, ApiResponse } from '../types';
import { FETCH_CACHE_TIME, FETCH_TAGS } from './endpoints.constants';

export async function getMe(): Promise<ApiResponse<Me>> {
  try {
    const response = await httpRequest(`${process.env.API_URL}/me`, {
      method: 'GET',
      next: {
        tags: [FETCH_TAGS.TAG_GET_ME],
        revalidate: FETCH_CACHE_TIME.ONE_DAY
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
