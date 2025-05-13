import { ROUTES } from '@/routes';
import { PaymentCreateResponseMessages } from '@/service/base/types';
import { IntegrationFlow } from '@/types';

export const CHECKOUT_PAYMENT_CURRENCY_FLOW: Record<
  PaymentCreateResponseMessages,
  IntegrationFlow
> = {
  Ok: {
    title: 'Pagamento realizado com sucesso!',
    description: 'O pagamento foi realizado com sucesso.'
  },
  'Invalid token': {
    title: 'Token inválido ou inexistente',
    description: 'Token inválido ou inexistente',
    redirect: ROUTES.SIGNOUT.url
  },
  'You are not allowed to access this resource': {
    title: 'Acesso negado',
    description: 'Acesso negado',
    redirect: ROUTES.DASHBOARD.url
  },
  'An error occurred while processing your request. Please, try again later': {
    title: 'Ops!!! Ocorreu um erro ao realizar o pagamento!',
    description: 'Ops!!! Ocorreu um erro ao realizar o pagamento!',
    toast: true
  },
  '"planId" is required': {
    title: 'O plano informado é inválido',
    description: 'O plano informado é inválido',
    toast: true
  },
  '"planId" contains an invalid value': {
    title: 'O plano informado é inválido',
    description: 'O plano informado é inválido',
    toast: true
  },
  '"payment" is required': {
    title: 'O pagamento informado é inválido',
    description: 'O pagamento informado é inválido',
    toast: true
  },
  'Your payment could not be processed. Detail received #######': {
    title: 'Ops!!! Ocorreu um erro ao realizar o pagamento!',
    description: 'Ops!!! Ocorreu um erro ao realizar o pagamento!',
    toast: true
  },
  '"payment.provider" is required': {
    title: 'O provedor informado é inválido',
    description: 'O provedor informado é inválido',
    toast: true
  },
  '"payment.provider" must be one of [certflow, mercadopago]': {
    title: 'O provedor informado é inválido',
    description: 'O provedor informado é inválido',
    toast: true
  },
  '"payment.method" is required': {
    title: 'O meio de pagamento informado é inválido',
    description: 'O meio de pagamento informado é inválido',
    toast: true
  },
  '"payment.method" must be [exchange]': {
    title: 'O meio de pagamento deve ser "exchange"',
    description: 'O meio de pagamento deve ser "exchange"',
    toast: true
  },
  '"payment.method" must be one of [pix, amex, cabal, elo, hipercard, master, visa]':
    {
      title: 'O meio de pagamento informado é inválido',
      description: 'O meio de pagamento informado é inválido',
      toast: true
    },
  '\"payment.token\" is required': {
    title: 'O token de pagamento informado é inválido',
    description: 'O token de pagamento informado é inválido',
    toast: true
  },
  '\"payment.issuerId\" is required': {
    title: 'O banco informado é inválido',
    description: 'O banco informado é inválido',
    toast: true
  },
  '\"payment.issuerId\" must be a number': {
    title: 'O banco informado é inválido',
    description: 'O banco informado é inválido',
    toast: true
  },
  '\"payment.issuerId\" must be an integer': {
    title: 'O banco informado é inválido',
    description: 'O banco informado é inválido',
    toast: true
  },
  '\"payment.taxType\" is required': {
    title: 'O tipo de documento do pagamento deve ser informado',
    description: 'O tipo de documento do pagamento deve ser informado',
    toast: true
  },
  '\"payment.taxType\" must be one of [CPF, CNPJ]': {
    title: 'O tipo de documento do pagamento deve ser CPF ou CNPJ',
    description: 'O tipo de documento do pagamento deve ser CPF ou CNPJ',
    toast: true
  },
  '\"payment.taxId\" is required': {
    title: 'O documento do pagamento deve ser informado',
    description: 'O documento do pagamento deve ser informado',
    toast: true
  },
  '\"payment.taxId\" contains an invalid value': {
    title: 'O documento do pagamento está inválido',
    description: 'O documento do pagamento está inválido',
    toast: true
  },
  'Plan not found': {
    title: 'Plano a ser comprado não foi encontrado',
    description: 'Plano a ser comprado não foi encontrado',
    toast: true
  },
  'Account not found': {
    title: 'Conta não encontrada',
    description: 'Conta não encontrada',
    toast: true
  },
  'User not found': {
    title: 'Usuário nao encontrado',
    description: 'Usuário nao encontrado',
    toast: true
  },
  'Provider not available': {
    title: 'Provedor nao disponivel',
    description: 'Provedor nao disponivel',
    toast: true
  },
  'Invalid currency \"####\" for this payment': {
    title: 'Moeda inválida',
    description: 'Moeda inválida',
    toast: true
  },
  'Plan amount must be integer': {
    title: 'O valor do plano deve ser um inteiro',
    description: 'O valor do plano deve ser um inteiro',
    toast: true
  },
  'You do not have enough credits to make this payment': {
    title: 'Voce nao possui credito suficiente',
    description: 'Voce nao possui credito suficiente',
    toast: true
  },
  'Payment method #### not supported': {
    title: 'Metodo de pagamento nao suportado',
    description: 'Metodo de pagamento nao suportado',
    toast: true
  },
  'Failed to process your payment. Reason: #####': {
    title: 'Falha ao processar o pagamento',
    description: 'Falha ao processar o pagamento',
    toast: true
  }
};
