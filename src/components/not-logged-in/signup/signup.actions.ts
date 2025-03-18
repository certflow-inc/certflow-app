'use server';

import { ApiResponse } from '@/types/api';
import { Register } from '@/types/register';

export async function signup(register: Register): Promise<ApiResponse<void>> {
  try {
    // TODO chamar a api de cadastro
    if (register.name === 'ricardo') {
      return {
        status: 'ok'
      };
    }

    // TODO remover quando chamar a api
    throw new Error('Account already registered');
  } catch (error: unknown) {
    const err = error as Error;

    return {
      status: 'error',
      error: {
        message: err.message
      }
    };
  }
}
