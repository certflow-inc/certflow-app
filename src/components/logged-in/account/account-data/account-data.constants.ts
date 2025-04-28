import { ROUTES } from '@/routes';
import { AccountUpdateResponse } from '@/service/base/types';
import { IntegrationFlow } from '@/types';

export const ACCOUNT_DATA_FLOW: Record<AccountUpdateResponse, IntegrationFlow> =
  {
    Ok: {
      title: 'Dados da conta atualizados com sucesso!',
      description: 'Seus dados foram atualizados com sucesso.'
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
    '"fantasy" is not allowed to be empty': {
      title: 'Nome fantasia é obrigatório',
      description: 'Nome fantasia é obrigatório',
      field: 'fantasy'
    },
    '"fantasy" length must be at least 3 characters long': {
      title: 'Nome fantasia precisa de no mínimo 3 caracteres',
      description: 'Nome fantasia precisa de no mínimo 3 caracteres',
      field: 'fantasy'
    },
    '"fantasy" length must be less than or equal to 128 characters long': {
      title: 'Máximo permitido 128 caracteres',
      description: 'Máximo permitido 128 caracteres',
      field: 'fantasy'
    },
    'An error occurred while processing your request. Please, try again later':
      {
        title: 'Ops!!! Ocorreu um erro ao atualizar seus dados!',
        description: 'Ops!!! Ocorreu um erro ao atualizar seus dados!',
        toast: true
      }
  };
