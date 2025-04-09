import { AccountUpdateResponse } from '@/service/types';
import { IntegrationFlow } from '@/types';

export const ACCOUNT_DATA_FLOW: Record<AccountUpdateResponse, IntegrationFlow> =
  {
    Ok: {
      title: 'Dados atualizados com sucesso!',
      description: 'Seus dados foram atualizados com sucesso.'
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
