import { decodeJwt } from 'jose';

type JWT = {
  exp: number;
  iat: number;
  iss: string;
  aud: string;
  sub: string;
  email: string;
  accountId: string;
  name: string;
  role: string;
};

export const getJWTPayload = (token: string): JWT => {
  return decodeJwt<JWT>(token);
};

export const isExpired = (token: string): boolean => {
  if (!token) {
    return true;
  }
  const decoded = decodeJwt<JWT>(token);

  return !!decoded.exp && decoded.exp * 1000 <= Date.now();
};
