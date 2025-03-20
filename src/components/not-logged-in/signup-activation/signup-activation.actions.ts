'use server';

import { SignupService } from '@/service/signup';
import { ApiResponse } from '@/types/api';

export async function signupActivation(
  token: string
): Promise<ApiResponse<void>> {
  return SignupService.activate(token);
}
