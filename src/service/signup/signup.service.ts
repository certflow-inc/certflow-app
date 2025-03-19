'server only';

import { ApiError, ApiResponse } from '@/types/api';
import { Register } from '@/types/register';
import { StatusCodes } from 'http-status-codes';

export async function signup(register: Register): Promise<ApiResponse<void>> {
  try {
    const payload = {
      type: register.type,
      taxId: register.taxId.replaceAll('.', '').replaceAll('-', ''),
      name: register.name,
      mobilePhone: `+55${register.mobilePhone.replace(/\D/g, '')}`,
      email: register.email,
      password: register.password,
      confirmPassword: register.confirmPassword,
      ...(register.companyTaxId
        ? {
            companyTaxId: register.companyTaxId
              .replaceAll('.', '')
              .replaceAll('-', '')
          }
        : {}),
      ...(register.companyName ? { companyName: register.companyName } : {})
    };

    const response = await fetch(`${process.env.API_URL}/sign-up`, {
      method: 'POST',
      body: JSON.stringify(payload),
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
