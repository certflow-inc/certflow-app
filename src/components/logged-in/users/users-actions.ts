'use server';

import { CertFlowServices } from '@/service';
import { Role } from '@/service/base/domain/me';
import { User } from '@/service/base/domain/user';
import { FETCH_TAGS } from '@/service/base/endpoints/endpoints.constants';
import { ApiResponse } from '@/service/base/types';
import { revalidateTag } from 'next/cache';

type CreateUserProps = Pick<User, 'name' | 'email' | 'taxId' | 'mobilePhone'>;

export async function createUser(
  user: CreateUserProps
): Promise<ApiResponse<void>> {
  try {
    const response = await CertFlowServices.createUser({
      ...user,
      picture: '',
      role: Role.Manager.toString()
    });
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
