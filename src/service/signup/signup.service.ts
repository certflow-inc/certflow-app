'server only';

import { ApiError, ApiResponse } from '@/types/api';
import { Register } from '@/types/register';

export async function signup(register: Register): Promise<ApiResponse<void>> {
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

  if (!response.ok && [404, 500].includes(response.status)) {
    throw new Error('Internal server error');
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
}
