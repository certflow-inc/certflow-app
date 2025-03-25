'use server';

import { BatchInterceptor } from '@mswjs/interceptors';
import { ClientRequestInterceptor } from '@mswjs/interceptors/ClientRequest';
import { XMLHttpRequestInterceptor } from '@mswjs/interceptors/XMLHttpRequest';
import { FetchInterceptor } from '@mswjs/interceptors/fetch';

import { UnAuthenticatedException } from '@/exceptions/UnAuthenticatedException';
import { isExpired } from './jwt';
import { getToken } from './session';

const PRIVATE_ENDPOINTS = ['/sign-out', '/me'];

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
    const token = await getToken();
    console.log(`🚀 - Interceptando a requisição requisição "${request.url}"`);

    if (!token || isExpired(token)) {
      controller.errorWith(new UnAuthenticatedException('Expired Token'));
    } else {
      console.log(`🚀 - Adicionando o token na requisição "${request.url}"`);
      request.headers.set('Authorization', `Bearer ${token}`);
      console.log(
        `🚀 ~ Header da requisição "${request.url}": `,
        request.headers
      );
    }
  }
});

// interceptor.on('response', console.log);
