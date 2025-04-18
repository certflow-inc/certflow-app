import { NotLoggedIn } from '@/components';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import nodataImg from '../../../../../public/images/no-data.svg';
import { NoDataProps } from './no-date.types';

export function NoDataView({
  message,
  description,
  children,
  className,
  showLogo = false,
  ...props
}: NoDataProps) {
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

        <div className="flex flex-col items-center gap-4">
          <h1 className="text-center text-2xl font-semibold text-slate-600 lg:text-4xl">
            {message}
          </h1>
          <p
            data-visible={!!description}
            className="hidden text-center text-lg data-[visible=true]:block"
          >
            {description}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <Image
          src={nodataImg}
          alt={`Imagem indicando: ${message}`}
          className="w-50 lg:w-60"
        />

        {children}
      </div>
    </div>
  );
}
