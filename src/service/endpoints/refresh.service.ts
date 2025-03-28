'server only';

import { RefreshToken } from '../domain/auth';
import { ApiResponse } from '../types';
import { TIME_OUT } from './endpoints.constants';

export async function refresh(
  refreshToken: string
): Promise<ApiResponse<RefreshToken>> {
  console.log('🚀 ~ refreshToken - renovando o token agora', refreshToken);

  const response = await fetch(`${process.env.API_URL}/refresh`, {
    signal: AbortSignal.timeout(TIME_OUT),
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
