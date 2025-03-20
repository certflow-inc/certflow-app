'server only';

import { ApiError, ApiResponse } from '@/types/api';
import { API_COMMON_RESPONSE_ERROR } from '@/types/api/constants';
import { StatusCodes } from 'http-status-codes';

/**
 * Activates a user using the provided token.
 *
 * @param {string} token The activation token.
 * @returns {Promise<ApiResponse<void>>} A promise that resolves to an ApiResponse
 * indicating the success or failure of the activation operation.
 *
 * @throws Will throw an error if the response status is NOT_FOUND or INTERNAL_SERVER_ERROR,
 * or if any other error occurs during the request.
 */
export async function activate(token: string): Promise<ApiResponse<void>> {
  try {
    const response = await fetch(`${process.env.API_URL}/activate/${token}`, {
      method: 'POST'
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

    const error: ApiError = await response.json();

    return {
      ok: false,
      dataError: error
    };
  } catch (_error: unknown) {
    throw new Error(API_COMMON_RESPONSE_ERROR.API_SERVER_ERROR);
  }
}
