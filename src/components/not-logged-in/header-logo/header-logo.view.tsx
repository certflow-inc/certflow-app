import { cn } from '@/lib/utils';
import Image from 'next/image';
import logo from '../../../../public/images/logo_large.svg';
import { HeaderLogoViewProps } from './header-logo.types';

export function HeaderLogoView({ className, ...props }: HeaderLogoViewProps) {
  return (
    <Image
      priority
      draggable={false}
      quality={100}
      src={logo}
      alt="CertFlow Logo"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className={cn(
        'h-auto w-full max-w-[200px] md:max-w-[300px] lg:max-w-[400px]',
        className
      )}
      {...props}
    />
  );
}
