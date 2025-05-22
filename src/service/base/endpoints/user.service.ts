import 'server-only';

import { ForbiddenException } from '@/exceptions/ForbiddenException';
import { UnAuthorizedException } from '@/exceptions/UnAuthorizedException';
import { httpRequest } from '@/lib/fetch';
import { ROUTES } from '@/routes';
import { StatusCodes } from 'http-status-codes';
import { redirect } from 'next/navigation';
import { API_COMMON_RESPONSE_ERROR } from '../constants';
import { Me } from '../domain/me';
import { User } from '../domain/user';
import { ApiError, ApiResponse } from '../types';
import { FETCH_CACHE_TIME, FETCH_TAGS } from './endpoints.constants';

/**
 * Fetches a list of users from the server.
 *
 * @returns {Promise<ApiResponse<Me[]>>} A promise that resolves to an ApiResponse
 * containing the list of users if successful, or an error if the request fails.
 *
 * @throws Will redirect to the signout route if an UnAuthenticatedException occurs.
 * Will throw a generic server error if any other error occurs during the request.
 */
export async function getUsers(): Promise<ApiResponse<Me[]>> {
  try {
    const response = await httpRequest(`${process.env.API_AUTH_URL}/users`, {
      cache: 'force-cache',
      next: {
        revalidate: FETCH_CACHE_TIME.TWO_MINUTES,
        tags: [FETCH_TAGS.TAG_GET_USERS]
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
 * Creates a new user on the server.
 *
 * @param {User} user - The user data to be sent in the request.
 * @returns {Promise<ApiResponse<void>>} A promise that resolves to an ApiResponse
 * indicating the success or failure of the user creation operation.
 *
 * @throws Will redirect to the signout route if an UnAuthenticatedException occurs.
 * Will throw a generic server error if any other error occurs during the request.
 */

export async function createUser(
  user: Omit<User, 'userId' | 'status'>
): Promise<ApiResponse<void>> {
  try {
    const body = buildCreateUserPayload(user);

    const response = await fetch(`${process.env.API_AUTH_URL}/users`, {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      return {
        ok: true
      };
    }

    if (
      [StatusCodes.NOT_FOUND, StatusCodes.INTERNAL_SERVER_ERROR].includes(
        response.status
      )
    ) {
      throw new Error();
    }

    const dataError = await response.json();
    return {
      ok: false,
      dataError
    };
  } catch (_error) {
    throw new Error(API_COMMON_RESPONSE_ERROR.API_SERVER_ERROR);
  }
}

/**
 * Deletes a user from the server by userId.
 *
 * @param {string} userId - The ID of the user to be deleted.
 * @returns {Promise<ApiResponse<void>>} A promise that resolves to an ApiResponse
 * indicating the success or failure of the delete operation.
 *
 * @throws Will redirect to the signout route if an UnAuthenticatedException occurs.
 * Will throw a generic server error if any other error occurs during the request.
 */

export async function deleteUser(userId: string): Promise<ApiResponse<void>> {
  try {
    const response = await httpRequest(
      `${process.env.API_AUTH_URL}/users/${userId}`,
      {
        method: 'DELETE'
      }
    );

    if (!response.ok) {
      if (
        [StatusCodes.NOT_FOUND, StatusCodes.INTERNAL_SERVER_ERROR].includes(
          response.status
        )
      ) {
        throw new Error();
      }

      if (StatusCodes.FORBIDDEN === response.status) {
        throw new UnAuthorizedException('UnAuthenticatedException');
      }
    }
    if (response.ok) {
      return {
        ok: true
      };
    }
    const dataError = await response.json();
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

/**
 * Constructs a JSON string payload for creating a new user.
 *
 * @param {Omit<User, 'userId' | 'status'>} user - The user data, excluding 'userId' and 'status', to be formatted into a JSON string.
 * @returns {string} A JSON string representation of the user data with formatted taxId and mobilePhone fields.
 */

function buildCreateUserPayload(user: Omit<User, 'userId' | 'status'>): string {
  const { taxId, name, mobilePhone, email, picture, role } = user;

  return JSON.stringify({
    name,
    email,
    taxId: taxId.replaceAll('.', '').replaceAll('-', ''),
    mobilePhone: `+55${mobilePhone.replace(/\D/g, '')}`,
    ...(picture ? { picture } : {}),
    role
  });
}
