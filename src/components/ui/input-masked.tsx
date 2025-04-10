'use client';

import { InputMask, Replacement, format } from '@react-input/mask';
import { Input, InputProps } from './input';

type InputMakedProps = InputProps & {
  format: Formats;
};

type Formats = 'phone' | 'cpf' | 'cnpj' | 'cep';

export { format };

export const INPUT_MASKED_FORMATS: Record<
  Formats,
  { mask: string; replacement: string | Replacement }
> = {
  phone: {
    mask: '(__) _____-____',
    replacement: { _: /\d/ }
  },
  cpf: {
    mask: '___.___.___-__',
    replacement: { _: /\d/ }
  },
  cnpj: {
    mask: '__.___.___/____-__',
    replacement: { _: /\d/ }
  },
  cep: {
    mask: '_____-___',
    replacement: { _: /\d/ }
  }
};

export function InputMasked({ format, ...props }: InputMakedProps) {
  const maskConfig = INPUT_MASKED_FORMATS[format];

  return (
    <InputMask
      component={Input}
      mask={maskConfig.mask}
      replacement={maskConfig.replacement}
      {...props}
    />
  );
}
