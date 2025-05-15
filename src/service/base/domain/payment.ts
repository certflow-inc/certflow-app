export type PaymentMethod =
  | 'exchange'
  | 'pix'
  | 'visa'
  | 'master'
  | 'amex'
  | 'hipercard'
  | 'elo'
  | 'cabal';

export type Payment = {
  paymentId: string;
  description: string;
  provider: string;
  method: string;
  transactionId: string;
  status: string;
  amount: number;
  observation: string;
  createdAt: number;
};

export type PaymentProvider = 'mercadopago' | 'certflow';
export type PaymentTaxType = 'CPF' | 'CNPJ';

export type PaymentCreateRequest = {
  planId: string;
  payment: {
    provider: PaymentProvider;
    method: PaymentMethod;
    token?: string;
    issuerId?: number;
    taxType?: PaymentTaxType;
    taxId?: string;
  };
};

export type PaymentCreateResponse = {
  paymentId: string;
  transactionId: string;
  status: string;
  observation: string;
  qrCode: string;
  qrCodeImage: string;
};
