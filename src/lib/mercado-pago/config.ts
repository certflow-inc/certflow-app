import {
  IAdditionalCardFormData,
  IPaymentBrickCustomization,
  IPaymentFormData
} from '@mercadopago/sdk-react/esm/bricks/payment/type';
import { IBrickError } from '@mercadopago/sdk-react/esm/bricks/util/types/common';

const customization: IPaymentBrickCustomization = {
  paymentMethods: {
    bankTransfer: 'all',
    creditCard: 'all'
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
  // callback called when clicking the submit data button
  return new Promise((resolve, reject) => {
    console.log('🚀 ~ onSubmit ~ formData:', formData);

    fetch('/process_payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((_response) => {
        // receive payment result
        console.log('🚀 ~ onSubmit ~ _response:', _response);
        resolve('');
      })
      .catch((_error) => {
        // handle error response when trying to create payment
        console.log('🚀 ~ onSubmit ~ _error:', _error);
        reject();
      });
  });
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
