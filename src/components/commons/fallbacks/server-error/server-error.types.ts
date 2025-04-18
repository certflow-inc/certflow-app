import { ComponentProps } from 'react';

export type ServerErrorProps = ComponentProps<'div'> & {
  message?: string;
  showLogo?: boolean;
};
