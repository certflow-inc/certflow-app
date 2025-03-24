import { z } from 'zod';

export const FORGOT_PASSWORD_FORM_SCHEMA = z.object({
  email: z
    .string()
    .nonempty('Email é obrigatório')
    .max(254, 'Máximo permitido 254 caracteres')
    .email('Email inválido')
});
