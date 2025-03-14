'use client';

import { InputMask, Replacement } from '@react-input/mask';
import { Input, InputProps } from './input';

type InputMakedProps = InputProps & {
  format: Formats;
};

type Formats = 'phone' | 'cpf' | 'cnpj';

const formats: Record<
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
  }
};

export function InputMasked({ format, ...props }: InputMakedProps) {
  const maskConfig = formats[format];

  return (
    <InputMask
      component={Input}
      mask={maskConfig.mask}
      replacement={maskConfig.replacement}
      {...props}
    />
  );
}
