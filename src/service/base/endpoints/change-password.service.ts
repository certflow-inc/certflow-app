'server only';

import { httpRequest } from '@/lib/fetch';
import { API_COMMON_RESPONSE_ERROR } from '@/service/base/constants';
import { ApiError, ApiResponse } from '@/service/base/types';
import { StatusCodes } from 'http-status-codes';
import { ChangePassword } from '../domain/auth';

export async function changePassword(
  data: ChangePassword,
  token: string
): Promise<ApiResponse<void>> {
  try {
    const response = await httpRequest(
      `${process.env.API_URL}/change-password/${token}`,
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

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

    const error: ApiError = await response.json();

    return {
      ok: false,
      dataError: error
    };
  } catch (_error: unknown) {
    throw new Error(API_COMMON_RESPONSE_ERROR.API_SERVER_ERROR);
  }
}
