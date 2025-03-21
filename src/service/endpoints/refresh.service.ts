'server only';

import { RefreshToken } from '../domain/auth';
import { ApiResponse } from '../types';

export async function refresh(
  token: string,
  refreshToken: string
): Promise<ApiResponse<RefreshToken>> {
  console.log('🚀 ~ refreshToken - renovando o token agora', refreshToken);

  const response = await fetch(`${process.env.API_URL}/refresh`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'refresh-token': refreshToken,
      Authorization: `Bearer ${token}`
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
