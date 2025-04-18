import 'server-only';

import { httpRequest } from '@/lib/fetch';
import { StatusCodes } from 'http-status-codes';
import { API_COMMON_RESPONSE_ERROR } from '../constants';
import { Auth } from '../domain/auth';
import { ApiError, ApiResponse } from '../types';

export async function signin(
  email: string,
  password: string
): Promise<ApiResponse<Auth>> {
  try {
    const response = await httpRequest(`${process.env.API_URL}/sign-in`, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
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
      const data: Auth = await response.json();
      return {
        ok: true,
        data
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
