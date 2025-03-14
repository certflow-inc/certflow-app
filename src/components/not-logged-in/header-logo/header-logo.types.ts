import Image from 'next/image';

export type HeaderLogoViewProps = Omit<
  React.ComponentPropsWithoutRef<typeof Image>,
  'src' | 'alt'
>;
