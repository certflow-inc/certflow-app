'use server';

import { CertFlowServices } from '@/service';
import { User } from '@/service/base/domain/user';
import { UserListConstants } from './user-list.constants';
export async function getUserList(): Promise<User[] | undefined> {
  const response = await CertFlowServices.getUsers();

  return response.data?.map((user) => ({
    ...user,
    mobilePhone: user.mobilePhone.replace('+55', ''),
    status: UserListConstants.Status[user.status],
    role: UserListConstants.Role[user.role]
  }));
}
