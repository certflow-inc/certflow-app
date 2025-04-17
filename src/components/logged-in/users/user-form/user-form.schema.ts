import { z } from 'zod';

export const USER_FORM_SCHEMA = z.object({
  name: z
    .string()
    .nonempty('Nome é obrigatório')
    .min(3, 'Mínimo 3 caracteres')
    .max(128, 'Máximo 128 caracteres'),
  email: z
    .string()
    .email('Email inválido')
    .nonempty('Email é obrigatório')
    .max(254, 'Máximo 254 caracteres'),
  taxId: z.string().nonempty('CPF é obrigatório').min(11, 'CPF inválido'),
  mobilePhone: z.string().nonempty('Telefone é obrigatório')
});
