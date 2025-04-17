'use server';

import { CertFlowServices } from '@/service';
import { UserListConstants } from './user-list.constants';
import { UserListItemObject } from './user-list.types';

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
