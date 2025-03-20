import { z } from 'zod';

export const ACTIVATION_REQUEST_FORM_SCHEMA = z.object({
  email: z.string().nonempty('Email é obrigatório').email('Email inválido')
});
