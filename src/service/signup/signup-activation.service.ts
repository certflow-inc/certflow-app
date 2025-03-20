'server only';

import { ApiResponse } from '@/types/api';

export function activate(token: string): Promise<ApiResponse<void>> {
  return new Promise((resolve) => {
    // Teremos 4 possíveis cenários:
    // 1- 200 ok
    // 2- 400 link inválido
    // 3- 422 link expirado
    // 4- 500 erro interno

    // TODO implementar a chamada ao endpoint de "check"

    setTimeout(() => {
      if (token === 'ok') {
        resolve({
          ok: true
        });
      }

      if (token === 'invalid') {
        resolve({
          ok: false,
          dataError: {
            error: 'Link is invalid'
          }
        });
      }

      if (token === 'expired') {
        resolve({
          ok: false,
          dataError: {
            error: 'Link is expired'
          }
        });
      }

      if (!['ok', 'invalid', 'expired'].includes(token)) {
        resolve({
          ok: false,
          dataError: {
            error:
              'An error occurred while processing your request. Please, try again later'
          }
        });
      }
    }, 2000);
  });
}
