'server only';

import { UnAuthenticatedException } from '@/exceptions/UnAuthenticatedException';
import { httpRequest } from '@/lib/fetch';
import { ROUTES } from '@/routes';
import { StatusCodes } from 'http-status-codes';
import { redirect } from 'next/navigation';
import { API_COMMON_RESPONSE_ERROR } from '../constants';
import { Me } from '../domain/me';
import { ApiError, ApiResponse } from '../types';
import { FETCH_TAGS } from './endpoints.constants';

export async function getMe(): Promise<ApiResponse<Me>> {
  try {
    const response = await httpRequest(`${process.env.API_URL}/me`, {
      method: 'GET',
      cache: 'force-cache',
      next: {
        tags: [FETCH_TAGS.TAG_GET_ME]
      }
    });

    if (!response.ok) {
      if (
        [StatusCodes.NOT_FOUND, StatusCodes.INTERNAL_SERVER_ERROR].includes(
          response.status
        )
      ) {
        throw new Error();
      }

      if (StatusCodes.FORBIDDEN === response.status) {
        throw new UnAuthenticatedException('UnAuthenticatedException');
      }
    }

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
