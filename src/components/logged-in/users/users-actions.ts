'use server';

import { User } from '@/service/base/domain/user';
import { ApiResponse } from '@/service/base/types';

type CreateUserProps = Pick<User, 'name' | 'email' | 'taxId' | 'mobilePhone'>;

export async function createUser(
  user: CreateUserProps
): Promise<ApiResponse<void>> {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
  console.log('🚀 ~ createUser ~ user:', user);
  return {
    ok: true
  };
}
