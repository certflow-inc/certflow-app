'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { PUBLIC_ROUTES } from '@/routes';
import { SigninFormViewProps } from './form.types';

export function SigninFormView({
  model,
  className,
  ...props
}: SigninFormViewProps) {
  const { handleSigninSubmit, registeredFields, rotuer, errors } = model;

  return (
    <form
      noValidate
      onSubmit={handleSigninSubmit}
      className={cn(
        'flex w-full max-w-96 flex-col gap-6 px-4 md:px-0',
        className
      )}
      {...props}
    >
      <div className="flex flex-col gap-2">
        <Input
          type="email"
          placeholder="Email"
          error={errors.email?.message}
          {...registeredFields.email}
        />
        <Input
          type="password"
          placeholder="Senha"
          error={errors.password?.message}
          {...registeredFields.password}
        />
      </div>

      <div className="flex flex-col gap-4">
        <Button variant="default" size="lg">
          Entrar
        </Button>

        <Button
          type="button"
          variant="outline"
          size="lg"
          onClick={() => rotuer.push(PUBLIC_ROUTES.SIGNUP)}
        >
          Cadastrar
        </Button>

        <Link
          href={PUBLIC_ROUTES['FORGOT-PASSWORD']}
          className="text-primary hover:text-primary-600 active:text-primary-700 text-center"
        >
          Esqueci minha senha
        </Link>
      </div>
    </form>
  );
}
