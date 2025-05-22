import { UnAuthorizedException } from '@/exceptions/UnAuthorizedException';
import { httpRequest } from '@/lib/fetch';
import { ROUTES } from '@/routes';
import { redirect } from 'next/navigation';
import { API_COMMON_RESPONSE_ERROR } from '../constants';
import { ApiError } from '../types';

type CheckRequest = {
  flow: 'recovery' | 'verification';
  token: string;
};

export async function check(request: CheckRequest) {
  try {
    const response = await httpRequest(
      `${process.env.API_AUTH_URL}/check/${request.flow}/${request.token}`,
      {
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
    if (_error instanceof UnAuthorizedException) {
      redirect(ROUTES.SIGNOUT.url);
    }

    throw new Error(API_COMMON_RESPONSE_ERROR.API_SERVER_ERROR);
  }
}
