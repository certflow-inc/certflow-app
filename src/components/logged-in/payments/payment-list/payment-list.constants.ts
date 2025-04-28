export type PaymentProvider = 'none' | 'mercadopago' | 'certx';
export const PaymentProviderDictionary: Record<PaymentProvider, string> = {
  none: 'Não se aplica',
  mercadopago: 'Mercado Pago',
  certx: 'CertX'
};

export type PaymentType = 'none' | 'credit' | 'pix' | 'exchange';
export const PaymentTypeDictionary: Record<PaymentType, string> = {
  none: 'Não se aplica',
  credit: 'Crédito',
  pix: 'PIX',
  exchange: 'Troca'
};

export type PaymentStatus = 'pending' | 'paid' | 'canceled';
export const PaymentStatusDictionary: Record<PaymentStatus, string> = {
  pending: 'Pendente',
  paid: 'Pago',
  canceled: 'Cancelado'
};
