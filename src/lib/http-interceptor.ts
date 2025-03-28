'use server';

import { BatchInterceptor } from '@mswjs/interceptors';
import { FetchInterceptor } from '@mswjs/interceptors/fetch';

import { UnAuthenticatedException } from '@/exceptions/UnAuthenticatedException';
import { isExpired } from './jwt';
import { getUserAgent, UserAgent } from './server-utils';
import { getToken } from './session';

const PRIVATE_ENDPOINTS = ['/sign-out', '/me'];

const interceptor = new BatchInterceptor({
  name: 'my-interceptor',
  interceptors: [new FetchInterceptor()]
});

interceptor.apply();

interceptor.on('request', async ({ request, controller }) => {
  const agent: UserAgent = await getUserAgent();
  request.headers.set('User-Agent', agent.ua);
  request.headers.set('Content-Type', 'application/json');

  const needsAuth = PRIVATE_ENDPOINTS.some((endpoint) =>
    request.url?.includes(endpoint)
  );

  if (needsAuth) {
    const token = await getToken();

    if (!token || isExpired(token)) {
      controller.errorWith(new UnAuthenticatedException('Expired Token'));
    } else {
      request.headers.set('Authorization', `Bearer ${token}`);
    }
  }
  if (process.env.LOG === 'ON') {
    const requestClone = request.clone();
    console.group(`🚀 ~ ${requestClone.url} => Request`);
    console.log(`Method: `, requestClone.method);
    console.log(`Header: `, requestClone.headers);
    console.log(`Body: `, await requestClone.text());
  }
  console.groupEnd();
});

interceptor.on('response', async ({ request, response }) => {
  if (process.env.LOG === 'ON') {
    console.group(`🚀 ~ ${request.url} => Response`);
    console.log(`Status: `, response.status);
    console.log(`Body: `, await response.text());
    console.groupEnd();
  }
});
