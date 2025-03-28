import { UnAuthenticatedException } from '@/exceptions/UnAuthenticatedException';
import { ROUTES } from '@/routes';
import { redirect } from 'next/navigation';
import { API_COMMON_RESPONSE_ERROR } from '../constants';
import { ApiError } from '../types';
import { TIME_OUT } from './endpoints.constants';

type CheckRequest = {
  flow: 'recovery' | 'verification';
  token: string;
};

export async function check(request: CheckRequest) {
  try {
    const response = await fetch(
      `${process.env.API_URL}/check/${request.flow}/${request.token}`,
      {
        signal: AbortSignal.timeout(TIME_OUT),
        method: 'GET'
      }
    );

    if (response.ok) {
      return {
        ok: true
      };
    }

    const dataError: ApiError = await response.json();

    return {
      ok: false,
      dataError
    };
  } catch (_error) {
    if (_error instanceof UnAuthenticatedException) {
      redirect(ROUTES.SIGNOUT);
    }

    throw new Error(API_COMMON_RESPONSE_ERROR.API_SERVER_ERROR);
  }
}
