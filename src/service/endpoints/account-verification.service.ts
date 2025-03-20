'server only';

import { StatusCodes } from 'http-status-codes';
import { API_COMMON_RESPONSE_ERROR } from '../constants';
import { ApiError } from '../types';

export async function accountVerification(email: string) {
  try {
    const response = await fetch(
      `${process.env.API_URL}/account-verification/${email}`,
      {
        method: 'POST'
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
