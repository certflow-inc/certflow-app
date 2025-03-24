import { ROUTES } from '@/routes';
import { PasswordRecoveryResponse } from '@/service/types';
import { ForgotPasswordFlow } from './forgot-password.types';

export const FORGOT_PASSWOR_FLOW: Record<
  PasswordRecoveryResponse,
  ForgotPasswordFlow
> = {
  Ok: {
    title: 'Um email foi enviado para você!',
    description:
      'Verifique sua caixa de mensagens, encontre o email enviado e clique no link existente para ativar a sua conta.',
    destination: ROUTES.SIGNIN,
    destinationLabel: 'Voltar para login'
  },
  'An error occurred while processing your request. Please, try again later': {
    title: 'Ops!!! Ocorreu um erro ao realizar o cadastro!',
    description: 'Clique no botão abaixo para tentar novamente.',
    destination: ROUTES.FORGOT_PASSWORD,
    destinationLabel: 'Tentar novamente'
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
