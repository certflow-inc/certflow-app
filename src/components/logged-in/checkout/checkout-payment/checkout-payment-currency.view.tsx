'use client';
import { Payment, config } from '@/lib/mercado-pago';
import { useEffect } from 'react';
import { CheckoutPaymentCurrencyViewProps } from './checkout-payment.types';

declare global {
  interface Window {
    paymentBrickController: {
      unmount: () => void;
    };
  }
}

export function CheckoutPaymentCurrencyView({
  me,
  plan
}: CheckoutPaymentCurrencyViewProps) {
  // Payment initialization
  const initialization = {
    amount: plan.currentAmount,
    payer: {
      email: me.email,
      identification: {
        type: `${me.taxId.length > 11 ? 'CNPJ' : 'CPF'}`,
        number: me.taxId
      }
    }
  };

  // Unmount paymentBrickController
  useEffect(() => {
    return () => {
      if (window.paymentBrickController) {
        console.log('desmontando mercado pago');
        window.paymentBrickController.unmount();
      }
    };
  }, []);

  return (
    <Payment
      initialization={initialization}
      customization={config.customization}
      onSubmit={config.onSubmit}
      onReady={config.onReady}
      onError={config.onError}
    />
  );
}
