import { redirectFromClient } from '@/actions/navigation';
import {
  PaymentMethod,
  PaymentProvider,
  PaymentTaxType
} from '@/service/base/domain/payment';
import { PaymentCreateResponseMessages } from '@/service/base/types';
import {
  IAdditionalCardFormData,
  IPaymentBrickCustomization,
  IPaymentFormData
} from '@mercadopago/sdk-react/esm/bricks/payment/type';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { createPaymentAction } from '../checkout-payment.actions';
import { CHECKOUT_PAYMENT_CURRENCY_FLOW } from '../checkout-payment.constants';
import { UseCheckoutPaymentCurrencyModelProps } from './checkout-payment-currency.types';

declare global {
  interface Window {
    paymentBrickController: {
      unmount: () => void;
    };
    statusScreenBrickController: {
      unmount: () => void;
    };
  }
}

export function useCheckoutPaymentCurrencyModel({
  me,
  plan
}: UseCheckoutPaymentCurrencyModelProps) {
  const router = useRouter();
  const [paymentId, setPaymentId] = useState<string | undefined>(undefined);
  const isCNPJ = me.taxId.length > 11;

  const initialization = {
    amount: plan.currentAmount,
    payer: {
      email: me.email,
      identification: {
        type: `${isCNPJ ? 'CNPJ' : 'CPF'}`,
        number: me.taxId
      }
    }
  };
  console.log(
    '🚀 ~ [Mercado Pago] Inicializando o Mercado Pago com:',
    initialization
  );

  const customization: IPaymentBrickCustomization = {
    paymentMethods: {
      bankTransfer: 'all',
      creditCard: 'all',
      maxInstallments: 1
    },
    visual: {
      hideFormTitle: true,
      style: {
        customVariables: {
          baseColor: '#2d91c7'
        }
      }
    }
  };
  console.log(
    '🚀 ~ [Mercado Pago] Customizando o Mercado Pago com:',
    customization
  );

  const invalidatePaymentBrickController = useCallback(() => {
    if (window.paymentBrickController) {
      window.paymentBrickController.unmount();
    }
  }, []);
  const invalidateStatusScreenBrickController = useCallback(() => {
    if (window.statusScreenBrickController) {
      window.statusScreenBrickController.unmount();
    }
  }, []);

  const unMountAll = useCallback(() => {
    invalidatePaymentBrickController();
    invalidateStatusScreenBrickController();
  }, [invalidatePaymentBrickController, invalidateStatusScreenBrickController]);

  const onSubmit = async (
    formData: IPaymentFormData,
    _selectedPaymentMethod: IAdditionalCardFormData | null | undefined
  ) => {
    const { formData: data } = formData;
    console.log(
      '🚀 ~ [Mercado Pago] Dados Recebidos do componente do Mercado Pago:',
      data
    );
    const isPIX = data.payment_method_id === 'pix';

    const payload = {
      planId: plan.id,
      payment: {
        method: data.payment_method_id as PaymentMethod,
        provider: 'mercadopago' as PaymentProvider,
        ...(!isPIX && { token: data.token }),
        ...(!isPIX && { issuerId: Number(data.issuer_id) }),
        ...(!isPIX && {
          taxType: data.payer.identification.type as PaymentTaxType
        }),
        ...(!isPIX && { taxId: data.payer.identification.number })
      }
    };

    console.log(
      '🚀 ~ [Mercado Pago] Enviando payload para criação do pagamento:',
      payload
    );
    const response = await createPaymentAction(payload);
    console.log(
      '🚀 ~ [Mercado Pago] Recebendo a resposta da criação do pagamento:',
      response
    );

    if (response.ok) {
      setPaymentId(response.data?.transactionId);
      return;
    }

    const feedbackError = CHECKOUT_PAYMENT_CURRENCY_FLOW[
      response.dataError?.error as PaymentCreateResponseMessages
    ] ?? {
      ...CHECKOUT_PAYMENT_CURRENCY_FLOW['Not mapped error'],
      title: response.dataError?.error
    };

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

      unMountAll();
      setPaymentId('undefined');
      setTimeout(() => {
        setPaymentId(undefined);
      }, 500);

      return;
    }
  };

  // const onError = async (error: IBrickError) => {
  //   console.log('🚀 ~ onError ~ error:', error);
  // };

  // const onReady = async () => {
  //   console.log('🚀 ~ onReady ~ onReady');
  // };

  // const onStatusError = async (error: IBrickError) => {
  //   console.log('🚀 ~ onStatusError ~ error:', error);
  // };

  // const onStatusReady = async () => {
  //   console.log('🚀 ~ onReadyStatusReady ~ onReady');
  // };

  // Unmount components
  useEffect(() => () => unMountAll(), [unMountAll]);

  return {
    paymentId,
    router,
    initialization,
    customization,
    onSubmit
    // onError,
    // onReady,
    // onStatusError,
    // onStatusReady
  };
}
