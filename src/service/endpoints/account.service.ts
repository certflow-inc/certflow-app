'use server';

import { UnAuthenticatedException } from '@/exceptions/UnAuthenticatedException';
import { httpRequest } from '@/lib/fetch';
import { ROUTES } from '@/routes';
import { redirect } from 'next/navigation';
import { API_COMMON_RESPONSE_ERROR } from '../constants';
import { Account } from '../domain/account';
import { ApiError, ApiResponse } from '../types';
import { FETCH_TAGS } from './endpoints.constants';

export async function getAccount(): Promise<ApiResponse<Account>> {
  try {
    const response = await httpRequest(`${process.env.API_URL}/account`, {
      method: 'GET',
      next: {
        tags: [FETCH_TAGS.TAG_GET_ACCOUNT],
        revalidate: 60 * 60 * 24 // 1 day
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
