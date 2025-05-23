import 'server-only';

import { ForbiddenException } from '@/exceptions/ForbiddenException';
import { UnAuthorizedException } from '@/exceptions/UnAuthorizedException';
import { httpRequest } from '@/lib/fetch';
import { ROUTES } from '@/routes';
import { StatusCodes } from 'http-status-codes';
import { redirect } from 'next/navigation';
import { API_COMMON_RESPONSE_ERROR } from '../constants';
import { Account } from '../domain/account';
import { ApiError, ApiResponse } from '../types';
import { FETCH_TAGS } from './endpoints.constants';

/**
 * Fetches the account details from the server.
 *
 * @returns {Promise<ApiResponse<Account>>} A promise that resolves to an ApiResponse
 * containing the account details if successful, or an error if the request fails.
 *
 * @throws Will redirect to the signout route if an UnAuthenticatedException occurs.
 * Will throw a generic server error if any other error occurs during the request.
 */

export async function getAccount(): Promise<ApiResponse<Account>> {
  try {
    const response = await httpRequest(`${process.env.API_URL}/account`, {
      method: 'GET',
      cache: 'force-cache',
      next: {
        tags: [FETCH_TAGS.TAG_GET_ACCOUNT]
      }
    });

    if (response.ok) {
      return {
        ok: true,
        data: await response.json()
      };
    }

    if (StatusCodes.UNAUTHORIZED === response.status) {
      throw new UnAuthorizedException('UnAuthenticatedException');
    }
    if (StatusCodes.FORBIDDEN === response.status) {
      throw new ForbiddenException('UnAuthenticatedException');
    }

    const dataError: ApiError = await response.json();
    return {
      ok: false,
      dataError
    };
  } catch (_error) {
    if (_error instanceof UnAuthorizedException) {
      redirect(ROUTES.SIGNOUT.url);
    }
    if (_error instanceof ForbiddenException) {
      redirect(ROUTES.DASHBOARD.url);
    }
    throw new Error(API_COMMON_RESPONSE_ERROR.API_SERVER_ERROR);
  }
}

/**
 * Updates the account details on the server.
 *
 * @param {string} fantasy The new fantasy name for the account.
 * @returns {Promise<ApiResponse<void>>} A promise that resolves to an ApiResponse
 * indicating the success or failure of the update operation.
 *
 * @throws Will redirect to the signout route if an UnAuthenticatedException occurs.
 * Will throw a generic server error if any other error occurs during the request.
 */
export async function updateAccount(
  fantasy: string
): Promise<ApiResponse<void>> {
  try {
    const response = await httpRequest(`${process.env.API_URL}/account`, {
      method: 'PUT',
      body: JSON.stringify({ fantasy }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

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
  } catch (_error) {
    if (_error instanceof UnAuthorizedException) {
      redirect(ROUTES.SIGNOUT.url);
    }
    throw new Error(API_COMMON_RESPONSE_ERROR.API_SERVER_ERROR);
  }
}
