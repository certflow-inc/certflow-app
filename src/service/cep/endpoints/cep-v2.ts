'use server';

import { FETCH_CACHE_TIME } from '@/service/base/endpoints/endpoints.constants';
import { StatusCodes } from 'http-status-codes';
import { Cep } from '../domain/cep';
import { CEPResponse } from '../types';

/**
 * Searches for an address by cep.
 * @param cep CEP to be searched.
 * @returns A object with a boolean indicating if the cep was found and a string with the error message if not found.
 *          If found, the object will have a data property with the Cep model.
 */
export async function cepV2(cep: string): Promise<CEPResponse> {
  const response = await fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`, {
    method: 'GET',
    next: { revalidate: FETCH_CACHE_TIME.ONE_DAY }
  });

  if (!response.ok) {
    if (response.status === StatusCodes.NOT_FOUND) {
      return {
        ok: false,
        error: 'CEP não encontrado'
      };
    }

    return {
      ok: false,
      error: 'Erro ao obter enredeço do CEP'
    };
  }

  return {
    ok: true,
    data: (await response.json()) as Cep
  };
}
