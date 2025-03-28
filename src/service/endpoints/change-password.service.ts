'server only';

import { API_COMMON_RESPONSE_ERROR } from '@/service/constants';
import { ApiError, ApiResponse } from '@/service/types';
import { StatusCodes } from 'http-status-codes';
import { ChangePassword } from '../domain/auth';

export async function changePassword(
  data: ChangePassword,
  token: string
): Promise<ApiResponse<void>> {
  try {
    const response = await fetch(
      `${process.env.API_URL}/change-password/${token}`,
      {
        method: 'POST',
        body: JSON.stringify(data)
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
    console.log('🚀 ~ error:', error);

    return {
      ok: false,
      dataError: error
    };
  } catch (_error: unknown) {
    throw new Error(API_COMMON_RESPONSE_ERROR.API_SERVER_ERROR);
  }
}
