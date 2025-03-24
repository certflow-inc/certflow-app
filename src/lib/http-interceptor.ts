'use server';

import { BatchInterceptor } from '@mswjs/interceptors';
import { ClientRequestInterceptor } from '@mswjs/interceptors/ClientRequest';
import { XMLHttpRequestInterceptor } from '@mswjs/interceptors/XMLHttpRequest';
import { FetchInterceptor } from '@mswjs/interceptors/fetch';

import { UnAuthenticatedException } from '@/exceptions/UnAuthenticatedException';
import { isExpired } from './jwt';
import { getToken } from './session';

const PRIVATE_ENDPOINTS = ['/me'];

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
  console.log(`Interceptando a requisição "${request.url}"`);

  const needsAuth = PRIVATE_ENDPOINTS.some((endpoint) =>
    request.url?.includes(endpoint)
  );

  if (needsAuth) {
    console.log(`Adicionando o token na requisição "${request.url}"`);
    const token = await getToken();

    if (!token || isExpired(token)) {
      controller.errorWith(new UnAuthenticatedException('Expired Token'));
    } else {
      request.headers.set('Authorization', `Bearer ${token}`);
    }
  }
});

// interceptor.on('response', console.log);
