'use server';

import { headers } from 'next/headers';
import { userAgent } from 'next/server';

export type UserAgent = ReturnType<typeof userAgent>;

/**
 * Retrieves the user agent information from the incoming request headers.
 *
 * @returns {Promise<UserAgent>} A promise that resolves to the user agent object.
 */

export async function getUserAgent(): Promise<UserAgent> {
  const headersList = await headers();
  const userAgentStructure = { headers: headersList };
  const agent = userAgent(userAgentStructure);
  return agent;
}
