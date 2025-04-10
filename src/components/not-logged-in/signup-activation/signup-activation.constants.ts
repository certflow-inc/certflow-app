import { ROUTES } from '@/routes';

import { ActivateResponse } from '@/service/base/types';
import { IntegrationFlow } from '@/types';

export const SIGNUP_ACTIVATION_FLOW: Record<ActivateResponse, IntegrationFlow> =
  {
    Ok: {
      title: 'Cadastro confirmado!',
      description: 'Clique no botão abaixo para fazer o login.',
      destination: ROUTES.SIGNIN,
      destinationLabel: 'Login'
    },
    'Link is expired': {
      title: 'Link expirado',
      description: 'Clique no botão abaixo para solicitar um novo link.',
      destination: ROUTES.ACTIVATION_REQUEST,
      destinationLabel: 'Quero um novo link'
    },
    'Link is invalid': {
      title: 'Link inválido',
      description: 'Clique no botão abaixo para solicitar um novo link.',
      destination: ROUTES.ACTIVATION_REQUEST,
      destinationLabel: 'Quero um novo link'
    },
    '"token" contains an invalid value': {
      title: 'O token informado é inválido',
      description: 'Clique no botão abaixo para solicitar um novo link.',
      destination: ROUTES.ACTIVATION_REQUEST,
      destinationLabel: 'Quero um novo link'
    },
    'User cannot be activated': {
      title: 'Usuário não pode ser ativado',
      description: 'Clique no botão abaixo para voltar ao login.',
      destination: ROUTES.SIGNIN,
      destinationLabel: 'Voltar para o login'
    },
    'An error occurred while processing your request. Please, try again later':
      {
        title: 'Ops!!! Erro ao validar sua conta! Tente novamente mais tarde.',
        description: 'O link recebido tem validade de 24 horas.',
        destination: ROUTES.SIGNIN,
        destinationLabel: 'Voltar para o login'
      }
  };
