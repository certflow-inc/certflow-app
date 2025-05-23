import { ROUTES } from '@/routes';
import { PasswordRecoveryResponse } from '@/service/base/types';
import { IntegrationFlow } from '@/types';

export const FORGOT_PASSWOR_FLOW: Record<
  PasswordRecoveryResponse,
  IntegrationFlow
> = {
  Ok: {
    title: 'Um email foi enviado para você!',
    description:
      'Verifique sua caixa de mensagens, encontre o email enviado e clique no link existente para mudar sua senha.',
    destination: ROUTES.SIGNIN.url,
    destinationLabel: 'Voltar para login'
  },
  'An error occurred while processing your request. Please, try again later': {
    title: 'Ops!!! Ocorreu um erro ao realizar o cadastro!',
    description: 'Clique no botão abaixo para tentar novamente.',
    destination: ROUTES.FORGOT_PASSWORD.url,
    destinationLabel: 'Tentar novamente',
    toast: true
  },
  '\"email\" is required': {
    title: 'Email é obrigatório',
    description: 'Email é obrigatório',
    field: 'email'
  },
  '\"email\" must be a valid email': {
    title: 'Email inválido',
    description: 'Email inválido',
    field: 'email'
  }
};
