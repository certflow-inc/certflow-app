import { CheckoutPaymentCurrencyViewProps } from './checkout-payment.types';

export function CheckoutPaymentCurrencyView({
  account,
  plan
}: CheckoutPaymentCurrencyViewProps) {
  console.log('🚀 ~ plan:', plan);
  console.log('🚀 ~ account:', account);

  // TODO: Utilizar a lib do mercado pago para mostrar os meios de pagamento
  return <div>CheckoutPaymentCurrencyView</div>;
}
