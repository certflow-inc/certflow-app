'use server';

import { CertFlowServices } from '@/service';
import { FETCH_TAGS } from '@/service/base/endpoints/endpoints.constants';
import { revalidateTag } from 'next/cache';
import { UserListConstants } from './user-list.constants';
import { UserListItemObject } from './user-list.types';

/**
 * Fetches the list of users and returns them formatted according to the
 * {@link UserListItemObject} type.
 *
 * @returns A promise that resolves to an array of formatted user objects if
 * successful, or undefined if the request fails.
 *
 * @throws Will throw a generic server error if any other error occurs during the
 * request.
 */
export async function getUserListAction(): Promise<
  UserListItemObject[] | undefined
> {
  const response = await CertFlowServices.getUsers();

  return response.data?.map((user) => ({
    ...user,
    mobilePhone: user.mobilePhone.replace('+55', ''),
    translatedStatus: UserListConstants.Status[user.status],
    translatedRole: UserListConstants.Role[user.role]
  }));
}

/**
 * Deletes a user from the server by userId.
 *
 * @param {string} userId - The ID of the user to be deleted.
 * @returns {Promise<ApiResponse<void>>} A promise that resolves to an ApiResponse
 * indicating the success or failure of the delete operation.
 *
 * @throws Will throw a generic server error if any other error occurs during the
 * request.
 */
export async function deleteUserAction(
  userId: string
): Promise<ReturnType<typeof CertFlowServices.deleteUser>> {
  try {
    const response = await CertFlowServices.deleteUser(userId);
    revalidateTag(FETCH_TAGS.TAG_GET_USERS);
    return response;
  } catch (error: unknown) {
    const err = error as Error;

    return {
      ok: false,
      dataError: {
        error: err.message
      }
    };
  }
}
