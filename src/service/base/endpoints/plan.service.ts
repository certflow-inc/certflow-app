import 'server-only';

import { ForbiddenException } from '@/exceptions/ForbiddenException';
import { UnAuthorizedException } from '@/exceptions/UnAuthorizedException';
import { ROUTES } from '@/routes';
import { StatusCodes } from 'http-status-codes';
import { redirect } from 'next/navigation';
import { API_COMMON_RESPONSE_ERROR } from '../constants';
import { Plan } from '../domain/plan';
import { ApiError, ApiResponse } from '../types';
import { FETCH_TAGS } from './endpoints.constants';

export async function getPlans(): Promise<ApiResponse<Plan[]>> {
  try {
    const response = await fetch(`${process.env.API_AUTH_URL}/plans`, {
      method: 'GET',
      cache: 'force-cache',
      next: {
        tags: [FETCH_TAGS.TAG_GET_PLANS]
      }
    });

    if (response.ok) {
      return {
        ok: true,
        data: await response.json()
      };
    }

    if (StatusCodes.UNAUTHORIZED === response.status) {
      throw new UnAuthorizedException('UnAuthenticatedException');
    }
    if (StatusCodes.FORBIDDEN === response.status) {
      throw new ForbiddenException('UnAuthenticatedException');
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
    if (_error instanceof ForbiddenException) {
      redirect(ROUTES.DASHBOARD.url);
    }
    throw new Error(API_COMMON_RESPONSE_ERROR.API_SERVER_ERROR);
  }
}
