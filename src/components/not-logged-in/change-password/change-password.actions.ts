'use server';

import { CertFlowServices } from '@/service';
import { ChangePassword } from '@/service/domain/auth';
import { ApiResponse } from '@/service/types';

export async function checkRecovery(token: string) {
  try {
    if (!token) {
      return {
        ok: false,
        dataError: {
          error: 'Token not found'
        }
      };
    }

    return await CertFlowServices.check({ flow: 'recovery', token });
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

export async function changePassword(
  token: string,
  data: ChangePassword
): Promise<ApiResponse<void>> {
  try {
    if (!token) {
      return {
        ok: false,
        dataError: {
          error: 'Token not found'
        }
      };
    }

    return await CertFlowServices.changePassword(data, token);
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
