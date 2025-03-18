import { z } from 'zod';

export const SIGNUP_FORM_SCHEMA = z
  .object({
    type: z.string(),
    companyTaxId: z.string().optional(),
    companyName: z.string().optional(),
    taxId: z.string().min(1, 'CPF é obrigatório').max(14, 'CNPJ inválido'),
    name: z
      .string()
      .min(1, 'Nome é obrigatório')
      .min(3, 'Nome precisa de no mínimo 3 caracteres')
      .max(128, 'Máximo permitido 128 caracteres'),
    mobilePhone: z.string().min(1, 'Telefone é obrigatório'),
    email: z
      .string()
      .min(1, 'Email é obrigatório')
      .max(254, 'Máximo permitido 254 caracteres')
      .email('Email inválido'),
    password: z
      .string()
      .min(1, 'Senha é obrigatória')
      .min(8, 'Senha deve ter no mínimo 8 caracteres')
      .max(128, 'Senha deve ter no máximo 128 caracteres')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
        'Senha deve ter no mínimo 1 letra minúscula, 1 letra maiúscula e 1 número'
      ),
    confirmPassword: z.string().min(1, 'Confirmação de senha é obrigatória')
  })
  .superRefine((values, context) => {
    if (values.type === 'corporation') {
      if (!values.companyTaxId) {
        context.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'CNPJ é obrigatório',
          path: ['companyTaxId']
        });
      }
      if (!values.companyName) {
        context.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'O nome da empresa é obrigatório',
          path: ['companyName']
        });
      }
      if (values.companyName && values.companyName.length < 3) {
        context.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'O nome da empresa precisa de no mínimo 3 caracteres',
          path: ['companyName']
        });
      }
      if (values.companyName && values.companyName.length > 128) {
        context.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'O nome da empresa precisa de no máximo 128 caracteres',
          path: ['companyName']
        });
      }
    }
    if (values.password !== values.confirmPassword) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Senhas não conferem',
        path: ['confirmPassword']
      });
    }
  });
