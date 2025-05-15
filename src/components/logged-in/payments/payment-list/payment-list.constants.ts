export type PaymentProvider = 'none' | 'mercadopago' | 'certflow';
export const PaymentProviderDictionary: Record<PaymentProvider, string> = {
  none: 'Não se aplica',
  mercadopago: 'Mercado Pago',
  certflow: 'Cert Flow'
};

export type PaymentType =
  | 'none'
  | 'credit'
  | 'pix'
  | 'exchange'
  | 'visa'
  | 'master'
  | 'amex'
  | 'hipercard'
  | 'elo'
  | 'cabal'
  | 'exchange';

export const PaymentTypeDictionary: Record<PaymentType, string> = {
  none: 'Não se aplica',
  credit: 'Crédito',
  pix: 'PIX',
  exchange: 'Cert Coins',
  visa: 'Visa',
  master: 'Master',
  amex: 'Amex',
  hipercard: 'Hipercard',
  elo: 'ELO',
  cabal: 'Cabal'
};

export type PaymentStatus = 'pending' | 'paid' | 'canceled';
export const PaymentStatusDictionary: Record<PaymentStatus, string> = {
  pending: 'Pendente',
  paid: 'Pago',
  canceled: 'Cancelado'
};
