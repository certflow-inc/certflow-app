import { ROUTES } from '@/routes';
import { ChangePasswordResponse, CheckResponse } from '@/service/types';
import { ChangePasswordFlow } from './change-password.types';

export const CHECK_RECOVERY_FLOW: Record<CheckResponse, ChangePasswordFlow> = {
  Ok: {
    title: 'Token válido',
    description: 'Token válido'
  },
  '"flow" is required': {
    title: 'Ops!!! Ocorreu um erro ao validar o link de redefinição de senha!',
    description: 'Clique no botão abaixo para solicitar outro link.',
    destination: ROUTES.FORGOT_PASSWORD,
    destinationLabel: 'Quero um novo link'
  },
  '"flow" must be one of [verification, recovery]': {
    title: 'Ops!!! Ocorreu um erro ao validar o link de redefinição de senha!',
    description: 'Clique no botão abaixo para solicitar outro link.',
    destination: ROUTES.FORGOT_PASSWORD,
    destinationLabel: 'Quero um novo link'
  },
  '"token" contains an invalid value': {
    title: 'Ops!!! Ocorreu um erro ao validar o link de redefinição de senha!',
    description: 'Clique no botão abaixo para solicitar outro link.',
    destination: ROUTES.FORGOT_PASSWORD,
    destinationLabel: 'Quero um novo link'
  },
  '"token" is required': {
    title: 'Ops!!! Ocorreu um erro ao validar o link de redefinição de senha!',
    description: 'Clique no botão abaixo para solicitar outro link.',
    destination: ROUTES.FORGOT_PASSWORD,
    destinationLabel: 'Quero um novo link'
  },
  'An error occurred while processing your request. Please, try again later': {
    title: 'Ops!!! Ocorreu um erro ao validar o link de redefinição de senha!',
    description: 'Clique no botão abaixo para tentar novamente.',
    destination: ROUTES.CHANGE_PASSWORD,
    destinationLabel: 'Tentar novamente'
  },
  'Link is expired': {
    title: 'Link expirado',
    description: 'Clique no botão abaixo para solicitar um novo link.',
    destination: ROUTES.FORGOT_PASSWORD,
    destinationLabel: 'Quero um novo link'
  },
  'Link is invalid': {
    title: 'Link inválido',
    description: 'Clique no botão abaixo para solicitar um novo link.',
    destination: ROUTES.FORGOT_PASSWORD,
    destinationLabel: 'Quero um novo link'
  }
};

export const CHANGE_PASSWORD_FLOW: Record<
  ChangePasswordResponse,
  ChangePasswordFlow
> = {
  Ok: {
    title: 'Senha alterada com sucesso!',
    description: 'Clique no botão abaixo para voltar a tela de login',
    destination: ROUTES.SIGNIN,
    destinationLabel: 'Voltar para login'
  },
  '\"password\" is required': {
    title: 'Senha é obrigatória',
    description: 'Senha é obrigatória',
    field: 'password'
  },
  '"password" is not allowed to be empty': {
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
  '"password" must contain at least 1 lowercase character': {
    title: 'A senha deve conter no mínimo 1 letra minúscula',
    description: 'A senha deve conter no mínimo 1 letra minúscula',
    field: 'password'
  },
  '\"password\" must contain at least 1 uppercase character': {
    title: 'A senha deve conter no mínimo 1 letra maiúscula',
    description: 'A senha deve conter no mínimo 1 letra maiúscula',
    field: 'password'
  },
  '\"password\" must contain at least 1 numeric character': {
    title: 'A senha deve conter no mínimo 1 número',
    description: 'A senha deve conter no mínimo 1 número',
    field: 'password'
  },
  '\"confirmPassword\" is required': {
    title: 'Confirmação de senha é obrigatória',
    description: 'Confirmação de senha é obrigatória',
    field: 'confirmPassword'
  },
  '\"confirmPassword\" does not match': {
    title: 'As senhas devem ser iguais',
    description: 'As senhas devem ser iguais',
    field: 'confirmPassword'
  },
  'Link is expired': {
    title: 'Link expirado',
    description: 'Clique no botão abaixo para solicitar um novo link.',
    destination: ROUTES.FORGOT_PASSWORD,
    destinationLabel: 'Quero um novo link'
  },
  'Link is invalid': {
    title: 'Link inválido',
    description: 'Clique no botão abaixo para solicitar um novo link.',
    destination: ROUTES.FORGOT_PASSWORD,
    destinationLabel: 'Quero um novo link'
  },
  'User is not active': {
    title: 'Usuário inativo',
    description: 'Usuário inativo',
    flow: true
  },
  'An error occurred while processing your request. Please, try again later': {
    title: 'Ops!!! Ocorreu um erro ao realizar o cadastro!',
    description: 'Clique no botão abaixo para tentar novamente.',
    destination: ROUTES.CHANGE_PASSWORD,
    destinationLabel: 'Tentar novamente',
    toast: true
  }
};
