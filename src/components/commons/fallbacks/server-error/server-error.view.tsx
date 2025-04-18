import { NotLoggedIn } from '@/components';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import img from '../../../../../public/images/server-error.svg';
import { ServerErrorProps } from './server-error.types';

export function ServerErrorView({
  message = 'Ops! Ocorreu um erro',
  children,
  className,
  showLogo = false,
  ...props
}: ServerErrorProps) {
  return (
    <div
      className={cn(
        'flex h-full w-full flex-col items-center justify-center gap-24 rounded-md bg-white px-6 py-10',
        className
      )}
      {...props}
    >
      <div className="flex flex-col items-center gap-10">
        {showLogo && <NotLoggedIn.HeaderLogo />}

        <h1 className="text-center text-2xl font-semibold text-slate-600 lg:text-4xl">
          {message}
        </h1>
      </div>

      <div className="flex flex-col gap-10">
        <Image
          src={img}
          alt={`Imagem indicando: ${message}`}
          className="w-50 lg:w-60"
        />

        {children}
      </div>
    </div>
  );
}
