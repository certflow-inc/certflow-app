import { z } from 'zod';

export const ACCOUNT_ADDRESS_SCHEMA = z
  .object({
    address: z
      .string()
      .nonempty('Endereço é obrigatório')
      .min(3, 'Mínimo 3 caracteres')
      .max(128, 'Máximo 128 caracteres'),
    number: z
      .string()
      .nonempty('O campo numero é obrigatório')
      .min(1, 'O campo numero é obrigatório')
      .max(20, 'Máximo permitido 20 caracteres'),
    complement: z.string().optional(),
    district: z
      .string()
      .nonempty('Bairro é obrigatório')
      .min(3, 'Mínimo 3 caracteres')
      .max(64, 'Máximo 64 caracteres'),
    city: z
      .string()
      .nonempty('Cidade é obrigatório')
      .min(3, 'Mínimo 3 caracteres')
      .max(128, 'Máximo 128 caracteres'),
    state: z
      .string()
      .nonempty('Estado é obrigatório')
      .min(3, 'Mínimo 3 caracteres')
      .max(64, 'Máximo 64 caracteres'),
    zip: z
      .string()
      .nonempty('CEP é obrigatório')
      .min(3, 'Mínimo 3 caracteres')
      .max(16, 'Máximo 16 caracteres'),
    country: z
      .string()
      .nonempty('Pais é obrigatório')
      .min(3, 'Mínimo 3 caracteres')
      .max(32, 'Máximo 32 caracteres')
  })
  .superRefine((values, context) => {
    if (values.complement) {
      if (values.complement.length < 3) {
        context.addIssue({
          code: 'custom',
          message: 'Mínimo 3 caracteres',
          path: ['complement']
        });
      }
      if (values.complement.length > 128) {
        context.addIssue({
          code: 'custom',
          message: 'Máximo 128 caracteres',
          path: ['complement']
        });
      }
    }
  });
