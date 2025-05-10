import { Button } from '@/components';
import { CURRENCIES } from '@/constants';
import { ShoppingBasket } from 'lucide-react';
import { CheckoutPaymentCreditsViewProps } from './checkout-payment.types';

export function CheckoutPaymentCreditsView({
  account,
  plan
}: CheckoutPaymentCreditsViewProps) {
  const availableCredits = account?.services['credits'];
  const totalPurchase = plan.currentAmount;
  const balance = availableCredits - totalPurchase;

  return (
    <>
      <ul className="flex flex-col gap-2">
        <li className="bg-primary-50 flex justify-between rounded-lg px-2 py-2">
          <span>Créditos disponíveis</span>
          <span className="font-semibold">{`${CURRENCIES.credit} ${availableCredits}`}</span>
        </li>
        <li className="bg-primary-50 flex justify-between rounded-lg px-2 py-2">
          <span>Total da compra</span>
          <span className="font-semibold">{`${CURRENCIES.credit} ${totalPurchase}`}</span>
        </li>

        <li className="h-px bg-slate-500"></li>

        {balance >= 0 && (
          <>
            <li className="flex justify-between px-2 py-2">
              <span>Saldo final</span>
              <span className="font-semibold">{`${CURRENCIES.credit} ${balance}`}</span>
            </li>
            <li>
              <Button size="lg" className="w-full text-lg min-[1000px]:w-auto">
                <ShoppingBasket />
                Pagar
              </Button>
            </li>
          </>
        )}

        {balance < 0 && (
          <>
            <li className="flex justify-between rounded-lg bg-orange-400 px-2 py-2 text-center font-semibold text-white min-[1000px]:text-left">
              <span>
                Você não tem saldo suficiente para realizar este pagamento
              </span>
            </li>
            <li>
              <Button size="lg" className="w-full text-lg min-[1000px]:w-auto">
                <ShoppingBasket />
                Comprar créditos
              </Button>
            </li>
          </>
        )}
      </ul>
    </>
  );
}
