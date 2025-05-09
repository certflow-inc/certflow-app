import { CheckoutAddress } from './checkout-address';
import { CheckoutPayment } from './checkout-payment';
import { CheckoutSummary } from './checkout-summary';
import { CheckoutViewProps } from './checkout.types';

export function CheckoutView({ planId }: CheckoutViewProps) {
  return (
    <div className="flex h-full gap-4">
      <div className="flex flex-2/3 flex-col gap-4">
        <div className="rounded-lg bg-red-100">
          <h2>Endereço</h2>
          <CheckoutAddress />
        </div>

        <div className="flex-1 rounded-lg bg-red-200">
          <h2>Pagamento</h2>
          <CheckoutPayment />
        </div>
      </div>

      <div className="flex-1/3 rounded-lg bg-green-100">
        <h2>Checkout</h2>
        <CheckoutSummary planId={planId} />
      </div>
    </div>
  );
}
