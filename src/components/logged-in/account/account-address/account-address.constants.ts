import { ROUTES } from '@/routes';
import { AccountAddressUpdateResponse } from '@/service/base/types';
import { IntegrationFlow } from '@/types';

export const ACCOUNT_ADDRESS_FLOW: Record<
  AccountAddressUpdateResponse,
  IntegrationFlow
> = {
  Ok: {
    title: 'Dados do endereço da conta atualizados com sucesso!',
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
  'An error occurred while processing your request. Please, try again later': {
    title: 'Ops!!! Ocorreu um erro ao atualizar os dados da conta!',
    description: 'Ops!!! Ocorreu um erro ao atualizar seus dados!',
    toast: true
  },
  '"address" is required': {
    title: 'O campo endereço é obrigatório',
    description: 'O campo endereço é obrigatório',
    field: 'address'
  },
  '"address" length must be at least 3 characters long': {
    title: 'O campo endereço precisa de no mínimo 3 caracteres',
    description: 'O campo endereço precisa de no mínimo 3 caracteres',
    field: 'address'
  },
  '"address" length must be less than or equal to 128 characters long': {
    title: 'Máximo permitido 128 caracteres',
    description: 'Máximo permitido 128 caracteres',
    field: 'address'
  },
  '"city" is required': {
    title: 'O campo cidade é obrigatório',
    description: 'O campo cidade é obrigatório',
    field: 'city'
  },
  '"city" length must be at least 3 characters long': {
    title: 'O campo cidade precisa de no mínimo 3 caracteres',
    description: 'O campo cidade precisa de no mínimo 3 caracteres',
    field: 'city'
  },
  '"city" length must be less than or equal to 128 characters long': {
    title: 'Máximo permitido 128 caracteres',
    description: 'Máximo permitido 128 caracteres',
    field: 'city'
  },
  '"complement" is not allowed to be empty': {
    title: 'O campo complemento é obrigatório',
    description: 'O campo complemento é obrigatório',
    field: 'complement'
  },
  '"complement" length must be at least 3 characters long': {
    title: 'O campo complemento precisa de no mínimo 3 caracteres',
    description: 'O campo complemento precisa de no mínimo 3 caracteres',
    field: 'complement'
  },
  '"complement" length must be less than or equal to 128 characters long': {
    title: 'Máximo permitido 128 caracteres',
    description: 'Máximo permitido 128 caracteres',
    field: 'complement'
  },
  '"country" is required': {
    title: 'O campo país é obrigatório',
    description: 'O campo país é obrigatório',
    field: 'country'
  },
  '"country" length must be at least 3 characters long': {
    title: 'O campo pais precisa de no mínimo 3 caracteres',
    description: 'O campo pais precisa de no mínimo 3 caracteres',
    field: 'country'
  },
  '"country" length must be less than or equal to 32 characters long': {
    title: 'Máximo permitido 32 caracteres',
    description: 'Máximo permitido 32 caracteres',
    field: 'country'
  },
  '"district" is required': {
    title: 'O campo bairro é obrigatório',
    description: 'O campo bairro é obrigatório',
    field: 'district'
  },
  '"district" length must be at least 3 characters long': {
    title: 'O campo bairro precisa de no mínimo 3 caracteres',
    description: 'O campo bairro precisa de no mínimo 3 caracteres',
    field: 'district'
  },
  '"district" length must be less than or equal to 64 characters long': {
    title: 'Máximo permitido 64 caracteres',
    description: 'Máximo permitido 64 caracteres',
    field: 'district'
  },
  '"number" is not allowed to be empty': {
    title: 'O campo numero é obrigatório',
    description: 'O campo numero é obrigatório',
    field: 'number'
  },
  '"number" is required': {
    title: 'O campo numero é obrigatório',
    description: 'O campo numero é obrigatório',
    field: 'number'
  },
  '"number" length must be less than or equal to 20 characters long': {
    title: 'Máximo permitido 20 caracteres',
    description: 'Máximo permitido 20 caracteres',
    field: 'number'
  },
  '"state" is required': {
    title: 'O campo estado é obrigatório',
    description: 'O campo estado é obrigatório',
    field: 'state'
  },
  '"state" length must be at least 3 characters long': {
    title: 'O campo estado precisa de no mínimo 3 caracteres',
    description: 'O campo estado precisa de no mínimo 3 caracteres',
    field: 'state'
  },
  '"state" length must be less than or equal to 64 characters long': {
    title: 'Máximo permitido 64 caracteres',
    description: 'Máximo permitido 64 caracteres',
    field: 'state'
  },
  '"zip" is required': {
    title: 'O campo cep é obrigatório',
    description: 'O campo cep é obrigatório',
    field: 'zip'
  },
  '"zip" length must be at least 3 characters long': {
    title: 'O campo cep precisa de no mínimo 3 caracteres',
    description: 'O campo cep precisa de no mínimo 3 caracteres',
    field: 'zip'
  },
  '"zip" length must be less than or equal to 16 characters long': {
    title: 'Máximo permitido 16 caracteres',
    description: 'Máximo permitido 16 caracteres',
    field: 'zip'
  }
};
