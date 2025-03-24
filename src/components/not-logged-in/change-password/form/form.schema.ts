import { z } from 'zod';

export const CHANGE_PASSWORD_FORM_SCHEMA = z
  .object({
    password: z
      .string()
      .nonempty('Senha é obrigatória')
      .min(8, 'Senha deve ter no mínimo 8 caracteres')
      .max(128, 'Senha deve ter no máximo 128 caracteres')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
        'Senha deve ter no mínimo 1 letra minúscula, 1 letra maiúscula e 1 número'
      ),
    confirmPassword: z.string() //.nonempty('Confirmação de senha é obrigatória')
  })
  .superRefine((values, context) => {
    if (values.password !== values.confirmPassword) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Senhas não conferem',
        path: ['confirmPassword']
      });
    }
  });
