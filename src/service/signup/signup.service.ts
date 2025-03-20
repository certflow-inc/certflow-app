'server only';

import { ApiError, ApiResponse } from '@/types/api';
import { Register } from '@/types/register';
import { StatusCodes } from 'http-status-codes';

/**
 * Sends a sign-up request to the API with the provided registration data.
 *
 * @param {Register} register - The registration data to be sent in the request.
 * @returns {Promise<ApiResponse<void>>} A promise that resolves to an ApiResponse
 * indicating the success or failure of the sign-up operation.
 *
 * @throws Will throw an error if the response status is NOT_FOUND or INTERNAL_SERVER_ERROR,
 * or if any other error occurs during the request.
 */

export async function signup(register: Register): Promise<ApiResponse<void>> {
  try {
    const response = await fetch(`${process.env.API_URL}/sign-up`, {
      method: 'POST',
      body: buildPayload(register),
      headers: buildHeaders()
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
    throw new Error('Internal server error');
  }
}

/**
 * Build the payload for the sign-up request.
 * @param {Register} register The register data.
 * @returns {string} The payload as a JSON string.
 */
function buildPayload(register: Register): string {
  const {
    type,
    taxId,
    name,
    mobilePhone,
    email,
    password,
    confirmPassword,
    companyName,
    companyTaxId
  } = register;

  return JSON.stringify({
    type,
    taxId: taxId.replaceAll('.', '').replaceAll('-', ''),
    name,
    mobilePhone: `+55${mobilePhone.replace(/\D/g, '')}`,
    email,
    password,
    confirmPassword,
    ...(companyTaxId
      ? {
          companyTaxId: companyTaxId.replaceAll('.', '').replaceAll('-', '')
        }
      : {}),
    ...(companyName ? { companyName: companyName } : {})
  });
}

/**
 * Build headers for the request.
 *
 * @returns {Record<string, string>} headers object
 */
function buildHeaders(): Record<string, string> {
  return {
    'Content-Type': 'application/json'
  };
}
