import { z } from 'zod';

export const ACCOUNT_DATA_SCHEMA = z.object({
  fantasy: z
    .string()
    .nonempty('Nome fantasia é obrigatório')
    .min(3, 'Nome fantasia precisa de no mínimo 3 caracteres')
    .max(128, 'Máximo permitido 128 caracteres')
});
