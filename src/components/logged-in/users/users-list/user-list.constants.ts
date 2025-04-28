const Role = {
  owner: 'Proprietário',
  manager: 'Gerente',
  user: 'Usuário'
};

const Status = {
  pending: 'Pendente',
  active: 'Ativo',
  suspended: 'Suspenso',
  canceled: 'Cancelado'
};

export const UserListConstants = {
  Role,
  Status
};

import { ROUTES } from '@/routes';
import { DeleteUserResponse } from '@/service/base/types';
import { IntegrationFlow } from '@/types';

export const DELETE_USER_FLOW: Record<DeleteUserResponse, IntegrationFlow> = {
  Ok: {
    title: 'Usuário @user excluído com sucesso!',
    description: 'Usuário excluído com sucesso!'
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
    title: 'Ops!!! Ocorreu um erro ao remover o usuário!',
    description: 'Ops!!! Ocorreu um erro ao remover o usuário!',
    toast: true
  },
  '"userId" contains an invalid value': {
    title: 'O id do usuário não é válido. Entre em contato com o suporte.',
    description:
      'O id do usuário não é válido. Entre em contato com o suporte.',
    toast: true
  },
  '"userId" is required': {
    title: 'O id do usuário é obrigatório. Entre em contato com o suporte.',
    description: 'O id do usuário é obrigatório.',
    toast: true
  },
  'You cannot delete yourself': {
    title: 'Você não pode excluir a si mesmo',
    description: 'Você não pode excluir a si mesmo.',
    toast: true
  }
};
