import { redirectFromClient } from '@/actions/navigation';
import { ROUTES } from '@/routes';
import { PaymentMethod, PaymentProvider } from '@/service/base/domain/payment';
import { PaymentCreateResponseMessages } from '@/service/base/types';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { createPaymentAction } from '../checkout-payment.actions';
import { CHECKOUT_PAYMENT_CURRENCY_FLOW } from '../checkout-payment.constants';
import { UseCheckoutPaymentCreditsModelProps } from './checkout-payment-credits.types';

export function useCheckoutPaymentCreditsModel({
  account,
  plan
}: UseCheckoutPaymentCreditsModelProps) {
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentId, setPaymentId] = useState<string | undefined>(undefined);
  const availableCredits = account?.services['credits'];
  const totalPurchase = plan.currentAmount;
  const balance = availableCredits - totalPurchase;

  const doPurchase = async () => {
    setIsProcessing(true);
    const payload = {
      planId: plan.id,
      payment: {
        provider: 'certflow' as PaymentProvider,
        method: 'exchange' as PaymentMethod
      }
    };

    const response = await createPaymentAction(payload);

    if (response.ok) {
      toast('Pagamento realizado com sucesso', {
        type: 'success',
        position: 'bottom-center',
        closeOnClick: true
      });
      setPaymentId(response.data?.transactionId);
      setIsProcessing(false);
      router.replace(ROUTES.PAYMENTS.url);
      return;
    }

    const feedbackError =
      CHECKOUT_PAYMENT_CURRENCY_FLOW[
        response.dataError?.error as PaymentCreateResponseMessages
      ];

    if (feedbackError.redirect) {
      redirectFromClient(feedbackError.redirect);
      return;
    }

    if (feedbackError.toast) {
      toast(feedbackError.title, {
        type: 'error',
        position: 'bottom-center',
        closeOnClick: true
      });
      setIsProcessing(false);

      return;
    }
  };

  return {
    balance,
    totalPurchase,
    availableCredits,
    paymentId,
    isProcessing,
    doPurchase
  };
}
