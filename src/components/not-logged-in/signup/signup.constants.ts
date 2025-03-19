import { SignupResponse } from '@/service/signup/signup.types';
import { SignupFlow } from './signup.types';

export const SIGNUP_FLOW: Record<SignupResponse, SignupFlow> = {
  Ok: {
    title: 'Um email foi enviado para você!',
    description:
      'Verifique sua caixa de mensagens, encontre o email enviado e clique no link existente para ativar a sua conta.',
    destination: '/signin',
    destinationLabel: 'Voltar para login'
  },
  'Internal server error': {
    title: 'Ops!!! Ocorreu um erro ao realizar o cadastro!',
    description: 'Clique no botão abaixo para tentar novamente.',
    destination: '/signup',
    destinationLabel: 'Tentar novamente'
  },
  'An error occurred while processing your request. Please, try again later': {
    title: 'Ops!!! Ocorreu um erro ao realizar o cadastro!',
    description: 'Clique no botão abaixo para tentar novamente.',
    destination: '/signup',
    destinationLabel: 'Tentar novamente'
  },
  'User already registered': {
    title: 'Conta já cadastrada',
    description:
      'Email, CPF ou CNPJ informado já cadastrado!. Caso seja você, clique no link de redefinição de senha para redefini-la.',
    destination: '/signin',
    destinationLabel: 'Voltar para login'
  },
  'Account already registered': {
    title: 'Conta já cadastrada',
    description:
      'Email, CPF ou CNPJ informado já cadastrado! Caso seja você, clique no link de redefinição de senha para redefini-la.',
    destination: '/signin',
    destinationLabel: 'Voltar para login'
  },
  '\"taxId\" is required': {
    title: 'CPF é obrigatório',
    description: 'CPF é obrigatório',
    field: 'taxId'
  },
  '\"taxId\" contains an invalid value': {
    title: 'CPF inválido',
    description: 'CPF inválido',
    field: 'taxId'
  },
  '\"name\" is required': {
    title: 'O nome é obrigatório',
    description: 'O nome é obrigatório',
    field: 'name'
  },
  '"name" length must be at least 3 characters long': {
    title: 'O nome precisa de no mínimo 3 caracteres',
    description: 'O nome precisa de no mínimo 3 caracteres',
    field: 'name'
  },
  '\"name\" length must be less than or equal to 128 characters long': {
    title: 'Máximo permitido 128 caracteres',
    description: 'Máximo permitido 128 caracteres',
    field: 'name'
  },
  '\"mobilePhone\" is required': {
    title: 'Telefone é obrigatório',
    description: 'Telefone é obrigatório',
    field: 'mobilePhone'
  },
  '\"mobilePhone\" contains an invalid value': {
    title: 'Telefone inválido',
    description: 'Telefone inválido',
    field: 'mobilePhone'
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
  },
  '\"email\" length must be less than or equal to 254 characters long': {
    title: 'Máximo permitido 254 caracteres',
    description: 'Máximo permitido 254 caracteres',
    field: 'email'
  },
  '\"companyTaxId\" is required': {
    title: 'CNPJ é obrigatório',
    description: 'CNPJ é obrigatório',
    field: 'companyTaxId'
  },
  '\"companyTaxId\" contains an invalid value': {
    title: 'CNPJ inválido',
    description: 'CNPJ inválido',
    field: 'companyTaxId'
  },
  '\"companyTaxId\" is not allowed': {
    title: 'CNPJ não permitido',
    description: 'CNPJ não permitido',
    field: 'companyTaxId'
  },
  '\"companyName\" is not allowed': {
    title: 'Nome da empresa não permitido',
    description: 'Nome da empresa não permitido',
    field: 'companyName'
  },
  '\"companyName\" is required': {
    title: 'Nome da empresa é obrigatório',
    description: 'Nome da empresa é obrigatório',
    field: 'companyName'
  },
  '\"companyName\" length must be at least 3 characters long': {
    title: 'O nome precisa de no mínimo 3 caracteres',
    description: 'O nome precisa de no mínimo 3 caracteres',
    field: 'companyName'
  },
  '\"companyName\" length must be less than or equal to 128 characters long': {
    title: 'Máximo permitido 128 caracteres',
    description: 'Máximo permitido 128 caracteres',
    field: 'companyName'
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
  }
};
