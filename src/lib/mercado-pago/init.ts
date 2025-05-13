import { initMercadoPago, Payment, StatusScreen } from '@mercadopago/sdk-react';

initMercadoPago('TEST-b822b25e-3646-4312-a9da-88ab55ae82e3', {
  locale: 'pt-BR'
});

export { Payment, StatusScreen };
