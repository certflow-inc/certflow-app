'server only';

import { StatusCodes } from 'http-status-codes';
import { API_COMMON_RESPONSE_ERROR } from '../constants';
import { Auth } from '../domain/auth';
import { ApiError, ApiResponse } from '../types';

export async function signout(
  refreshToken: string
): Promise<ApiResponse<Auth>> {
  try {
    const response = await fetch(`${process.env.API_URL}/sign-out`, {
      method: 'POST',
      headers: {
        'Content-Type': '*/*',
        'refresh-token': refreshToken
      },
      next: {
        revalidate: 0
      }
    });

    if (
      !response.ok &&
      [StatusCodes.NOT_FOUND, StatusCodes.INTERNAL_SERVER_ERROR].includes(
        response.status
      )
    ) {
      throw new Error();
    }

    if (response.ok) {
      return {
        ok: true
      };
    }

    const dataError: ApiError = await response.json();

    return {
      ok: false,
      dataError
    };
  } catch (_error: unknown) {
    throw new Error(API_COMMON_RESPONSE_ERROR.API_SERVER_ERROR);
  }
}
