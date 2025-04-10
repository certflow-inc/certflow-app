'use server';

import { UnAuthenticatedException } from '@/exceptions/UnAuthenticatedException';
import { httpRequest } from '@/lib/fetch';
import { ROUTES } from '@/routes';
import { StatusCodes } from 'http-status-codes';
import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';
import { API_COMMON_RESPONSE_ERROR } from '../constants';
import { Address } from '../domain/account';
import { ApiError, ApiResponse } from '../types';
import { FETCH_TAGS } from './endpoints.constants';

const RESOURCE = 'address';
const RESOURCE_PATH = `${process.env.API_URL}/${RESOURCE}`;

/**
 * Fetches the account address from the server.
 *
 * @returns {Promise<ApiResponse<Address>>} A promise that resolves to an ApiResponse
 * containing the account address if successful, or an error if the request fails.
 *
 * @throws Will redirect to the signout route if an UnAuthenticatedException occurs.
 * Will throw a generic server error if any other error occurs during the request.
 */
export async function getAddress(): Promise<ApiResponse<Address>> {
  try {
    const response = await httpRequest(RESOURCE_PATH, {
      method: 'GET',
      cache: 'force-cache',
      next: {
        tags: [FETCH_TAGS.TAG_GET_ADDRESS]
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

/**
 * Updates the account address on the server.
 *
 * @param {Address} address - The new account address.
 * @returns {Promise<ApiResponse<void>>} A promise that resolves to an ApiResponse
 * indicating the success or failure of the update operation.
 *
 * @throws Will redirect to the signout route if an UnAuthenticatedException occurs.
 * Will throw a generic server error if any other error occurs during the request.
 */
export async function updateAddress(
  address: Address
): Promise<ApiResponse<void>> {
  try {
    const response = await httpRequest(RESOURCE_PATH, {
      method: 'PUT',
      body: JSON.stringify(address),
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
      revalidateTag(FETCH_TAGS.TAG_GET_ADDRESS);
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
    if (_error instanceof UnAuthenticatedException) {
      redirect(ROUTES.SIGNOUT);
    }

    throw new Error(API_COMMON_RESPONSE_ERROR.API_SERVER_ERROR);
  }
}
