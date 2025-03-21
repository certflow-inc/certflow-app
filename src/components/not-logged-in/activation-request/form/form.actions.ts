'use server';

import { CertFlowServices } from '@/service';
import { ApiResponse } from '@/service/types';

/**
 * Sends an account verification request to the API with the provided email address.
 *
 * @param {string} email - The email address to be sent in the request.
 * @returns {Promise<ApiResponse<void>>} A promise that resolves to an ApiResponse
 * indicating the success or failure of the account verification operation.
 *
 * @throws Will throw an error if the response status is NOT_FOUND or INTERNAL_SERVER_ERROR,
 * or if any other error occurs during the request.
 */
export async function sendActivationRequest(
  email: string
): Promise<ApiResponse<void>> {
  try {
    return await CertFlowServices.accountVerification(email);
  } catch (error: unknown) {
    const err = error as Error;

    return {
      ok: false,
      dataError: {
        error: err.message
      }
    };
  }
}
