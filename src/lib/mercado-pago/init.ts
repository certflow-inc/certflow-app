import { initMercadoPago, Payment, StatusScreen } from '@mercadopago/sdk-react';

initMercadoPago(process.env.NEXT_PUBLIC_MP_SECRET_KEY!, {
  locale: 'pt-BR'
});

export { Payment, StatusScreen };
