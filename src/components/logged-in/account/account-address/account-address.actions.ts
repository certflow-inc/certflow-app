'use server';

import { CepService, CertFlowServices } from '@/service';
import { Address } from '@/service/base/domain/account';
import { FETCH_TAGS } from '@/service/base/endpoints/endpoints.constants';
import { revalidateTag } from 'next/cache';

/**
 * Fetches the account address from the server.
 *
 * @returns {Promise<ApiResponse<Address>>} A promise that resolves to an ApiResponse
 * containing the account address if successful, or an error if the request fails.
 *
 * @throws Will redirect to the signout route if an UnAuthenticatedException occurs.
 * Will throw a generic server error if any other error occurs during the request.
 */
export async function getAddress(): Promise<
  ReturnType<typeof CertFlowServices.getAddress>
> {
  return CertFlowServices.getAddress();
}

/**
 * Updates the account address on the server.
 *
 * @param {Address} data - The new account address.
 * @returns {Promise<ApiResponse<void>>} A promise that resolves to an ApiResponse
 * indicating the success or failure of the update operation.
 *
 * @throws Will throw a generic server error if any other error occurs during the request.
 */
export async function updateAccountAddressData(
  data: Address
): Promise<ReturnType<typeof CertFlowServices.updateAccount>> {
  try {
    const response = await CertFlowServices.updateAddress(data);
    revalidateTag(FETCH_TAGS.TAG_GET_ADDRESS);
    return response;
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

/**
 * Searches for an address by cep.
 *
 * @param {string} cep - The cep to be searched.
 * @returns {Promise<ApiResponse<Cep>>} A promise that resolves to an ApiResponse
 * containing the cep address if successful, or an error if the request fails.
 *
 * @throws Will throw a generic server error if any other error occurs during the request.
 */
export async function getCep(
  cep: string
): Promise<ReturnType<typeof CepService.cepV2>> {
  try {
    return await CepService.cepV2(cep);
  } catch (error: unknown) {
    const err = error as Error;

    return {
      ok: false,
      error: err.message
    };
  }
}
