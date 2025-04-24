import { CreateUserResponse } from '@/service/base/types';
import { IntegrationFlow } from '@/types';

export const CREATE_USER_FLOW: Record<CreateUserResponse, IntegrationFlow> = {
  Ok: {
    title: 'Usuário criado com sucesso!',
    description: 'Usuário criado com sucesso!'
  },
  'An error occurred while processing your request. Please, try again later': {
    title: 'Ops!!! Ocorreu um erro ao criar o usuário!',
    description: 'Ops!!! Ocorreu um erro ao criar o usuário!',
    toast: true
  },
  '"name" is required': {
    title: 'O campo nome é obrigatório',
    description: 'O campo nome é obrigatório',
    field: 'name'
  },
  '"name" length must be at least 3 characters long': {
    title: 'O campo nome precisa de no mínimo 3 caracteres',
    description: 'O campo nome precisa de no mínimo 3 caracteres',
    field: 'name'
  },
  '"name" length must be less than or equal to 128 characters long': {
    title: 'Máximo permitido 128 caracteres',
    description: 'Máximo permitido 128 caracteres',
    field: 'name'
  },
  '"email" is required': {
    title: 'O campo email é obrigatório',
    description: 'O campo email é obrigatório',
    field: 'email'
  },
  '"email" must be a valid email': {
    title: 'O campo email precisa de no mínimo 3 caracteres',
    description: 'O campo email precisa de no mínimo 3 caracteres',
    field: 'email'
  },
  '"email" length must be less than or equal to 254 characters long': {
    title: 'Máximo permitido 128 caracteres',
    description: 'Máximo permitido 128 caracteres',
    field: 'email'
  },
  '"taxId" is required': {
    title: 'O campo CPF/CNPJ é obrigatório',
    description: 'O campo CPF/CNPJ é obrigatório',
    field: 'taxId'
  },
  '"taxId" contains an invalid value': {
    title: 'CPF inválido',
    description: 'CPF inválido',
    field: 'taxId'
  },
  '"mobilePhone" is required': {
    title: 'O campo celular é obrigatório',
    description: 'O campo celular é obrigatório',
    field: 'mobilePhone'
  },
  '"mobilePhone" contains an invalid value': {
    title: 'Celular inválid',
    description: 'Celular está inválido',
    field: 'mobilePhone'
  },
  '"role" is required': {
    title: 'O campo role é obrigatório',
    description: 'O campo role é obrigatório',
    toast: true
  },
  '"role" must be one of [manager, user]': {
    title: 'Role inválido',
    description: 'Role inválido',
    toast: true
  },
  '"picture" is not allowed': {
    title: 'Imagem nao permitida',
    description: 'Imagem nao permitida',
    toast: true
  },
  '"status" is not allowed': {
    title: 'Status nao permitido',
    description: 'Status nao permitido',
    toast: true
  },
  'You have reached the limit of users': {
    title: 'Limite de usuários atingido',
    description: 'Limite de usuários atingido',
    toast: true
  },
  'User already registered': {
    title: 'Já existe um usuário cadastrado com o email informado',
    description: 'Já existe um usuário cadastrado com o email informado',
    toast: true
  }
};
