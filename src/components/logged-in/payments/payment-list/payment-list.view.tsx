'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import { StatusScreen } from '@mercadopago/sdk-react';
import { useState } from 'react';
import { PaymentListCards } from '../payment-list-cards';
import { PaymentListTable } from '../payment-list-table';
import { PaymentListViewProps } from './payment-list.types';

declare global {
  interface Window {
    statusScreenBrickController: {
      unmount: () => void;
    };
  }
}

export function PaymentListView({ data }: PaymentListViewProps) {
  const [transactionId, setTransactionId] = useState<string | null>(null);

  const invalidateStatusScreenBrickController = () => {
    if (window.statusScreenBrickController) {
      window.statusScreenBrickController.unmount();
    }
  };

  const onClosePaymentDialog = () => {
    setTransactionId(null);
    invalidateStatusScreenBrickController();
  };

  return (
    <>
      <section className="flex flex-col gap-6 py-4">
        <header className="flex items-center justify-between gap-2 px-2">
          <h1 className="flex flex-col gap-2 truncate font-semibold overflow-ellipsis text-slate-500 min-[1130px]:text-left lg:text-2xl">
            Pagamentos realizados
          </h1>
        </header>
        <div className="flex flex-col rounded-md bg-blue-100 p-1 min-[1130px]:bg-white min-[1130px]:p-1">
          <PaymentListTable data={data} onPaymentClick={setTransactionId} />
          <PaymentListCards data={data} onPaymentClick={setTransactionId} />
        </div>
      </section>

      <Dialog
        key="payment-dialog"
        open={!!transactionId}
        onOpenChange={onClosePaymentDialog}
        modal
      >
        <DialogContent className="h-full w-full md:h-fit md:w-fit">
          <DialogHeader>
            <DialogTitle>Pagamento</DialogTitle>
          </DialogHeader>
          <div className="h-full w-full md:min-h-[700px] md:min-w-[450px]">
            <StatusScreen initialization={{ paymentId: transactionId ?? '' }} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
