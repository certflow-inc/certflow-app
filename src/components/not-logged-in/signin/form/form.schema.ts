import { z } from 'zod';

export const SIGNIN_FORM_SCHEMA = z.object({
  email: z.string().nonempty('Email é obrigatório').email('Email inválido'),
  password: z
    .string()
    .nonempty('Senha é obrigatória')
    .min(8, 'Senha deve ter no mínimo 8 caracteres')
});
