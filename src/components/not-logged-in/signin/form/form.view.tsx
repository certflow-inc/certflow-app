import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { ROUTES } from '@/routes';
import { LoaderCircle } from 'lucide-react';
import { SigninFormViewProps } from './form.types';

export function SigninFormView({
  model,
  className,
  ...props
}: SigninFormViewProps) {
  const { formAction, formState, pending, rotuer } = model;

  return (
    <form
      noValidate
      action={formAction}
      className={cn(
        'flex w-full max-w-96 flex-col gap-6 px-4 md:px-0',
        className
      )}
      {...props}
    >
      <h1 className="text-center text-lg font-bold md:text-2xl">Login</h1>
      <div className="flex flex-col gap-2">
        <Input
          type="email"
          name="email"
          placeholder="Email"
          defaultValue={formState.data?.email}
          error={formState.fieldErrors?.email && formState.fieldErrors.email[0]}
          disabled={pending}
        />
        <Input
          type="password"
          name="password"
          placeholder="Senha"
          defaultValue={formState.data?.password}
          error={
            formState.fieldErrors?.password && formState.fieldErrors.password[0]
          }
          disabled={pending}
        />
      </div>

      <div className="flex flex-col gap-4">
        <Button
          type="submit"
          id="signin-button"
          variant="default"
          size="lg"
          disabled={pending}
        >
          Confirmar
          {pending && <LoaderCircle className="ml-2 h-4 w-4 animate-spin" />}
        </Button>

        <Button
          id="signup-button"
          type="button"
          variant="outline"
          size="lg"
          onClick={() => rotuer.push(ROUTES.SIGNUP)}
          disabled={pending}
        >
          Cadastrar
        </Button>

        <Link
          id="forgot-password-link"
          href={ROUTES.FORGOT_PASSWORD}
          aria-disabled={pending}
          className="text-primary hover:text-primary-600 active:text-primary-700 text-center aria-[disabled=true]:pointer-events-none"
        >
          Esqueci minha senha
        </Link>
      </div>
    </form>
  );
}
