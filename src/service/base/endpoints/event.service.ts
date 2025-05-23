import 'server-only';

import { ForbiddenException } from '@/exceptions/ForbiddenException';
import { UnAuthorizedException } from '@/exceptions/UnAuthorizedException';
import { httpRequest } from '@/lib/fetch';
import { ROUTES } from '@/routes';
import { StatusCodes } from 'http-status-codes';
import { redirect } from 'next/navigation';
import { API_COMMON_RESPONSE_ERROR } from '../constants';
import { Event } from '../domain/event';
import { ApiError, ApiResponse } from '../types';

/**
 * Fetches a list of events from the server.
 *
 * @returns {Promise<ApiResponse<Event[]>>} A promise that resolves to an ApiResponse
 * containing the list of events if successful, or an error if the request fails.
 *
 * @throws Will redirect to the signout route if an UnAuthenticatedException occurs.
 * Will throw a generic server error if any other error occurs during the request.
 */
export async function getEvents(): Promise<ApiResponse<Event[]>> {
  try {
    const response = await httpRequest(`${process.env.API_CORE_URL}/events`);

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
      throw new ForbiddenException('ForbiddenException');
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

/**
 * Mock function to simulate fetching a list of events.
 *
 * @returns {Promise<ApiResponse<Event[]>>} A promise that resolves to an ApiResponse
 * containing a mock list of events.
 */
// This function is used for testing or development purposes and does not
// interact with the actual server.
// It simulates a delay of 2 seconds before returning the mock data.
export async function getEventsMock(): Promise<ApiResponse<Event[]>> {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return {
    ok: true,
    data: [
      {
        eventId: '1',
        name: 'Workshop sobre como vender mais utilizando as redes sociais',
        startDate: 1746068400000,
        endDate: 1746846000000,
        createdAt: 1746068400000,
        updatedAt: 1746068400000,
        hours: 8,
        format: 'closed',
        type: 'opened',
        status: 'active',
        locked: false
      },
      {
        eventId: '2',
        name: 'Workshop sobre como atingir seu público-alvo',
        startDate: 1746068400000,
        endDate: 1746846000000,
        createdAt: 1746068400000,
        updatedAt: 1746068400000,
        hours: 8,
        format: 'faceToFace',
        type: 'opened',
        status: 'archived',
        locked: true
      }
    ]
  };
}
