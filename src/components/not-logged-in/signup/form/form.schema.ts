import { z } from 'zod';

export const SIGNUP_FORM_SCHEMA = z
  .object({
    type: z.string(),
    companyTaxId: z.string().optional(),
    companyName: z.string().optional(),
    taxId: z.string().min(1, 'CPF é obrigatório').max(14, 'CNPJ inválido'),
    name: z.string().min(1, 'Nome é obrigatório'),
    mobilePhone: z.string().min(1, 'Telefone é obrigatório'),
    email: z.string().min(1, 'Email é obrigatório').email('Email inválido'),
    password: z
      .string()
      .min(1, 'Senha é obrigatória')
      .min(6, 'Senha deve ter no mínimo 6 caracteres'),
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
    }
    if (values.password !== values.confirmPassword) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Senhas não conferem',
        path: ['confirmPassword']
      });
    }
  });
