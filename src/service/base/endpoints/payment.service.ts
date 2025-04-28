import { UnAuthenticatedException } from '@/exceptions/UnAuthenticatedException';
import { UnAuthorizedException } from '@/exceptions/UnAuthorizedException';
import { httpRequest } from '@/lib/fetch';
import { ROUTES } from '@/routes';
import { StatusCodes } from 'http-status-codes';
import { redirect } from 'next/navigation';
import 'server-only';
import { API_COMMON_RESPONSE_ERROR } from '../constants';
import { Payment } from '../domain/payment';
import { ApiError, ApiResponse } from '../types';

export async function getPayments(): Promise<ApiResponse<Payment[]>> {
  try {
    const response = await httpRequest(`${process.env.API_URL}/payments`);

    if (response.ok) {
      return {
        ok: true,
        data: await response.json()
      };
    }

    const dataError: ApiError = await response.json();

    if (StatusCodes.UNAUTHORIZED === response.status) {
      throw new UnAuthenticatedException('UnAuthenticatedException');
    }
    if (StatusCodes.FORBIDDEN === response.status) {
      throw new UnAuthorizedException('UnAuthenticatedException');
    }
    return {
      ok: false,
      dataError
    };
  } catch (_error) {
    if (_error instanceof UnAuthenticatedException) {
      redirect(ROUTES.SIGNOUT.url);
    }
    if (_error instanceof UnAuthorizedException) {
      redirect(ROUTES.DASHBOARD.url);
    }
    throw new Error(API_COMMON_RESPONSE_ERROR.API_SERVER_ERROR);
  }
}
