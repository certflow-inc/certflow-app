import { PUBLIC_ROUTES } from '@/routes';

import { SignupActivationResponse } from '@/service/signup/signup.types';
import { SignupActivationFlow } from './signup-activation.types';

export const SIGNUP_ACTIVATION_FLOW: Record<
  SignupActivationResponse,
  SignupActivationFlow
> = {
  Ok: {
    title: 'Cadastro confirmado!',
    description: 'Clique no botão abaixo para fazer o login.',
    destination: PUBLIC_ROUTES.SIGNIN,
    destinationLabel: 'Login'
  },
  'Link is invalid': {
    title: 'Link inválido',
    destination: PUBLIC_ROUTES.SIGNIN,
    destinationLabel: 'Voltar para o login'
  },
  'Link is expired': {
    title: 'Link expirado',
    description: 'Clique no botão abaixo para solicitar um novo link.',
    destination: PUBLIC_ROUTES.ACTIVATION_REQUEST,
    destinationLabel: 'Quero um novo link'
  },
  'An error occurred while processing your request. Please, try again later': {
    title: 'Ops!!! Erro ao validar sua conta! Tente novamente mais tarde.',
    description: 'O link recebido tem validade de 24 horas.',
    destination: PUBLIC_ROUTES.SIGNIN,
    destinationLabel: 'Voltar para o login'
  }
};
