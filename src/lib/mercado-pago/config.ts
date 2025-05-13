import { createPaymentAction } from '@/components/logged-in/checkout/checkout-payment/checkout-payment.actions';
import {
  PaymentMethod,
  PaymentProvider,
  PaymentTaxType
} from '@/service/base/domain/payment';
import {
  IAdditionalCardFormData,
  IPaymentBrickCustomization,
  IPaymentFormData
} from '@mercadopago/sdk-react/esm/bricks/payment/type';
import { IBrickError } from '@mercadopago/sdk-react/esm/bricks/util/types/common';

const customization: IPaymentBrickCustomization = {
  paymentMethods: {
    bankTransfer: 'all',
    creditCard: 'all',
    minInstallments: 1,
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

const onSubmit = async (
  formData: IPaymentFormData,
  _selectedPaymentMethod: IAdditionalCardFormData | null | undefined
) => {
  // console.log('🚀 ~ onSubmit ~ formData:', formData);

  const { payment_method_id, token, issuer_id, payer } = formData.formData;

  const payload = {
    planId: '',
    payment: {
      method: payment_method_id as PaymentMethod,
      provider: 'mercadopago' as PaymentProvider
    },
    token,
    issuerId: Number(issuer_id),
    taxType: payer.identification.type as PaymentTaxType,
    taxId: payer.identification.number
  };

  await createPaymentAction(payload);
};

const onError = async (error: IBrickError) => {
  // callback called for all Brick error cases
  console.log('🚀 ~ onError ~ error:', error);
};
const onReady = async () => {
  /*
   Callback called when Brick is ready.
   Here you can hide loadings from your site, for example.
 */
  console.log('🚀 ~ onReady ~ onReady');
};

export const config = {
  customization,
  onSubmit,
  onError,
  onReady
};
