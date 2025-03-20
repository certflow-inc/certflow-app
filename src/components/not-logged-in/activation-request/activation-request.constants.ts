import { PUBLIC_ROUTES } from '@/routes';
import { AccountVerificationResponse } from '@/service/types';
import { ActivationRequestFlow } from './activation-request.types';

export const ACTIVATION_REQUEST_FLOW: Record<
  AccountVerificationResponse,
  ActivationRequestFlow
> = {
  Ok: {
    title: 'Novo link enviado com sucesso!',
    description:
      'Verifique sua caixa de entrada, encontre o email enviado e clique no link existente para ativar a sua conta.',
    destination: PUBLIC_ROUTES.SIGNIN,
    destinationLabel: 'Login'
  },
  '"email" is required': {
    title: 'Email é obrigatório',
    description: 'Email é obrigatório',
    field: 'email'
  },
  '"email" must be a valid email': {
    title: 'Email inválido',
    description: 'Email inválido',
    field: 'email'
  },
  'An error occurred while processing your request. Please, try again later': {
    title: 'Ops!!! Ocorreu um erro ao enviar o novo link!',
    description: 'Clique no botão abaixo para tentar novamente.',
    destination: PUBLIC_ROUTES.ACTIVATION_REQUEST,
    destinationLabel: 'Tentar novamente'
  }
};
