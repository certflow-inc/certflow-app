'use server';

import { cookies } from 'next/headers';

import { COOKIE_NAMES } from './common-constants';
import { getJWTPayload } from './jwt';

const SAME_SITE = 'lax';

/**
 * Creates a session cookie with the given JWT token.
 *
 * @param jwt The JWT token to use in the session cookie.
 */
export const createSession = async (jwt: string) => {
  const cookieStore = await cookies();

  const jwwtPayload = getJWTPayload(jwt);

  cookieStore.set(COOKIE_NAMES.SESSION, jwt, {
    httpOnly: true,
    secure: true,
    sameSite: SAME_SITE,
    expires: new Date(jwwtPayload.exp * 1000)
  });
};

/**
 * Destroys the current session by deleting the session cookies.
 *
 * @returns A promise that resolves when the session has been destroyed.
 */
export const destroySession = async () => {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAMES.SESSION);
};

/**
 * Retrieves the current session data from the session cookie.
 *
 * @returns The data in the session cookie as a {@link JwtPayload} or null if no session is set.
 */
export const getSession = async () => {
  const cookieStore = await cookies();
  const session = cookieStore.get(COOKIE_NAMES.SESSION)?.value;

  if (!session) {
    return null;
  }

  const jwtPayload = getJWTPayload(session);

  if (!jwtPayload) {
    return null;
  }

  return jwtPayload;
};

export const getToken = async () => {
  const cookieStore = await cookies();
  return cookieStore.get(COOKIE_NAMES.SESSION)?.value;
};
