'use server';

import { BatchInterceptor } from '@mswjs/interceptors';
import { ClientRequestInterceptor } from '@mswjs/interceptors/ClientRequest';
import { XMLHttpRequestInterceptor } from '@mswjs/interceptors/XMLHttpRequest';
import { FetchInterceptor } from '@mswjs/interceptors/fetch';

import { UnAuthenticatedException } from '@/exceptions/UnAuthenticatedException';
import { isExpired } from './jwt';
import { getUserAgent } from './server-utils';
import { getToken } from './session';

const PRIVATE_ENDPOINTS = ['/refresh', '/sign-out', '/me', '/account'];

const interceptor = new BatchInterceptor({
  name: 'my-interceptor',
  interceptors: [
    new ClientRequestInterceptor(),
    new XMLHttpRequestInterceptor(),
    new FetchInterceptor()
  ]
});

interceptor.apply();

interceptor.on('request', async ({ request, controller }) => {
  const userAgent = await getUserAgent();
  request.headers.set('User-Agent', userAgent.ua);

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
});

// interceptor.on('response', ({ request }) => { });
