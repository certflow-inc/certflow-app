import 'server-only';

import { httpRequest } from '@/lib/fetch';
import { RefreshToken } from '../domain/auth';
import { ApiResponse } from '../types';

export async function refresh(
  refreshToken: string
): Promise<ApiResponse<RefreshToken>> {
  const response = await httpRequest(`${process.env.API_URL}/refresh`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'refresh-token': refreshToken
    }
  });

  const data: RefreshToken = await response.json();

  if (response.ok) {
    return {
      ok: true,
      data
    };
  }

  return {
    ok: false
  };
}
