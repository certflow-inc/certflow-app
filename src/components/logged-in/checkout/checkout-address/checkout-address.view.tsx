import { House } from 'lucide-react';
import { CheckoutAddressViewProps } from './checkout-address.types';

export async function CheckoutAddressView({
  account,
  address
}: CheckoutAddressViewProps) {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-white px-4 py-6">
      <div className="flex items-center gap-2">
        <House size={24} />
        <h2 className="text-xl font-semibold">Endereço de faturamento</h2>
      </div>

      <div>
        <p className="text-lg/relaxed text-slate-500">{account?.name}</p>
        <p className="text-lg/relaxed text-slate-500">
          {`${address?.country}, ${address?.state}, ${address?.city}`}
        </p>
        <p className="text-lg/relaxed text-slate-500">
          {`${address?.address}, ${address?.number} - ${address?.district}`}
        </p>
      </div>
    </div>
  );
}
