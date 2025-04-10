import { ComponentProps } from 'react';

export type NoDataProps = ComponentProps<'div'> & {
  message: string;
  description?: string;
};
