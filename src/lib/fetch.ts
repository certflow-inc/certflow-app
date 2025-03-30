import { TIME_OUT } from '@/service/endpoints/endpoints.constants';

type HTTPRequestOptions = RequestInit & {
  timeout?: number;
};

export const httpRequest = async (
  resource: string | URL | globalThis.Request,
  options?: HTTPRequestOptions
): Promise<Response> => {
  const { timeout, ...restOptions } = options ?? {};
  const controller = new AbortController();
  const requestTimeoutId = setTimeout(
    () => controller.abort(),
    timeout ?? TIME_OUT
  );

  const response = await fetch(resource, {
    ...restOptions,
    signal: controller.signal
  });

  clearTimeout(requestTimeoutId);

  return response;
};
