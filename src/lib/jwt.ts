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
