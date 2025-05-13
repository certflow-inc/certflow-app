'use client';

import { Button } from '@/components/ui/button';
import { Payment, StatusScreen } from '@/lib/mercado-pago';
import { useCheckoutPaymentCurrencyModel } from './checkout-payment-currency.model';
import { CheckoutPaymentCurrencyViewProps } from './checkout-payment-currency.types';

export function CheckoutPaymentCurrencyView({
  me,
  plan
}: CheckoutPaymentCurrencyViewProps) {
  const { router, paymentId, customization, initialization, onSubmit } =
    useCheckoutPaymentCurrencyModel({ me, plan });

  return (
    <>
      {!paymentId && (
        <Payment
          initialization={initialization}
          customization={customization}
          onSubmit={onSubmit}
        />
      )}

      {paymentId && (
        <>
          <StatusScreen initialization={{ paymentId }} />
          <Button
            size="lg"
            className="mx-auto w-[150px]"
            onClick={() => router.back()}
          >
            Voltar
          </Button>
        </>
      )}
    </>
  );
}
