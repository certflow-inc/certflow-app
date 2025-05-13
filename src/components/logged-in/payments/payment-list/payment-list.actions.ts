'use server';

import { CURRENCIES } from '@/constants';
import { CertFlowServices } from '@/service';
import { PaymentData } from '../payments.types';
import {
  PaymentProvider,
  PaymentProviderDictionary,
  PaymentStatus,
  PaymentStatusDictionary,
  PaymentType,
  PaymentTypeDictionary
} from './payment-list.constants';

export async function getPaymentsAction(): Promise<PaymentData[]> {
  const response = await CertFlowServices.getPayments();

  return (
    response.data?.map((payment) => {
      const isCertCoins =
        payment.provider === 'certflow' && payment.method === 'exchange';

      const amount = isCertCoins
        ? `${CURRENCIES.credit} ${payment.amount}`
        : Number(payment.amount).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          });

      const createdAt = new Date(payment.createdAt).toLocaleDateString('pt-BR');

      return {
        ...payment,
        provider:
          PaymentProviderDictionary[payment.provider as PaymentProvider],
        method: PaymentTypeDictionary[payment.method as PaymentType],
        status: PaymentStatusDictionary[payment.status as PaymentStatus],
        amount,
        createdAt
      };
    }) || []
  );
}
