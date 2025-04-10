import { cn } from '@/lib/utils';
import Image from 'next/image';
import nodataImg from '../../../../../public/images/no-data.svg';
import { NoDataProps } from './no-date.types';

export function NoDataView({
  message,
  description,
  children,
  className,
  ...props
}: NoDataProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center gap-12 rounded-md bg-white px-6 py-12',
        className
      )}
      {...props}
    >
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-center text-xl font-semibold text-slate-600 lg:text-2xl">
          {message}
        </h1>
        <p
          data-visible={!!description}
          className="hidden text-center text-lg data-[visible=true]:block"
        >
          {description}
        </p>
      </div>

      <Image
        src={nodataImg}
        alt={`Imagem indicando: ${message}`}
        className="w-50 lg:w-60"
      />

      {children}
    </div>
  );
}
