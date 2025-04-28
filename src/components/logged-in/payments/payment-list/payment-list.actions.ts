'use server';

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
    response.data?.map((payment) => ({
      ...payment,
      provider: PaymentProviderDictionary[payment.provider as PaymentProvider],
      method: PaymentTypeDictionary[payment.method as PaymentType],
      status: PaymentStatusDictionary[payment.status as PaymentStatus],
      amount: Number(payment.amount).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }),
      createdAt: new Date(payment.createdAt).toLocaleDateString('pt-BR')
    })) || []
  );
}
