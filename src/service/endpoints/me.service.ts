'server only';

import { getToken } from '@/lib/session';
import { API_COMMON_RESPONSE_ERROR } from '../constants';
import { Me } from '../domain/me';
import { ApiError, ApiResponse } from '../types';

export const TAG_GET_ME = 'getMe';

export async function getMe(): Promise<ApiResponse<Me>> {
  try {
    const token = await getToken();

    const response = await fetch(`${process.env.API_URL}/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      next: {
        tags: [TAG_GET_ME],
        revalidate: 3600
      }
    });

    if (response.ok) {
      return {
        ok: true,
        data: await response.json()
      };
    }

    const dataError: ApiError = await response.json();

    return {
      ok: false,
      dataError
    };
  } catch (_error) {
    throw new Error(API_COMMON_RESPONSE_ERROR.API_SERVER_ERROR);
  }
}
