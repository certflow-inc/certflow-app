import { ROUTES } from '@/routes';
import { SigninResponse } from '@/service/types';
import { IntegrationFlow } from '@/types';

export const SIGNIN_FLOW: Record<SigninResponse, IntegrationFlow> = {
  Ok: {
    title: 'Um email foi enviado para você!',
    description: 'Um email foi enviado para você!'
  },
  'An error occurred while processing your request. Please, try again later': {
    title: 'Ops!!! Ocorreu um erro ao realizar o login!',
    description: 'Clique no botão abaixo para tentar novamente.',
    destination: ROUTES.SIGNIN,
    destinationLabel: 'Tentar novamente',
    toast: true
  },
  // Field messages
  '\"email\" is required': {
    title: 'Email é obrigatório',
    description: 'Email é obrigatório',
    field: 'email'
  },
  '\"email\" must be a valid email': {
    title: 'Email inválido',
    description: 'Email inválido',
    field: 'email'
  },
  '\"email\" length must be less than or equal to 254 characters long': {
    title: 'Máximo permitido 254 caracteres',
    description: 'Máximo permitido 254 caracteres',
    field: 'email'
  },
  '"email" is not allowed to be empty': {
    title: 'Email é obrigatório',
    description: 'Email é obrigatório',
    field: 'email'
  },
  '\"password\" is required': {
    title: 'Senha é obrigatória',
    description: 'Senha é obrigatória',
    field: 'password'
  },
  '"password" length must be at least 8 characters long': {
    title: 'A senha deve conter no mínimo 8 caracteres',
    description: 'A senha deve conter no mínimo 8 caracteres',
    field: 'password'
  },
  '\"password\" length must be less than or equal to 128 characters long': {
    title: 'A senha deve conter no máximo 128 caracteres',
    description: 'A senha deve conter no máximo 128 caracteres',
    field: 'password'
  },
  '"password" is not allowed to be empty': {
    title: 'Senha é obrigatória',
    description: 'Senha é obrigatória',
    field: 'password'
  },
  // Form messages
  'Account is not active': {
    title: 'Conta inativa',
    description: 'Conta inativa',
    toast: true
  },
  'User is not active': {
    title: 'Usuário inativo',
    description: 'Usuário inativo',
    toast: true
  },
  'Invalid email or password': {
    title: 'Email ou senha inválidos',
    description: 'Email ou senha inválidos',
    toast: true
  }
};
