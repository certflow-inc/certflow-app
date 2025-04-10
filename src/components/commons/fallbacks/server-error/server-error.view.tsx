import { cn } from '@/lib/utils';
import Image from 'next/image';
import img from '../../../../../public/images/server-error.svg';
import { ServerErrorProps } from './server-error.types';

export function ServerErrorView({
  message = 'Ops! Ocorreu um erro',
  children,
  className,
  ...props
}: ServerErrorProps) {
  return (
    <div
      className={cn(
        'flex w-full flex-col items-center gap-24 rounded-md bg-white px-6 py-10',
        className
      )}
      {...props}
    >
      <h1 className="text-center text-xl font-semibold text-slate-600 lg:text-2xl">
        {message}
      </h1>

      <Image
        src={img}
        alt={`Imagem indicando: ${message}`}
        className="w-50 lg:w-60"
      />

      {children}
    </div>
  );
}
