import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { LoaderCircle } from 'lucide-react';
import { ForgotPasswordFormViewProps } from './form.types';

export function ForgotPasswordFormView({
  model,
  className,
  ...props
}: ForgotPasswordFormViewProps) {
  const {
    errors,
    registeredFields,
    isProcessing,
    handleBackButtonClick,
    handleForgotPasswordSubmit
  } = model;

  return (
    <form
      noValidate
      onSubmit={handleForgotPasswordSubmit}
      className={cn(
        'flex w-full max-w-96 flex-col gap-6 px-4 md:px-0',
        className
      )}
      {...props}
    >
      <h1 className="text-center text-lg font-bold md:text-2xl">
        Trocar senha
      </h1>
      <div className="flex flex-col gap-2">
        <Input
          type="email"
          placeholder="Email"
          {...registeredFields.email}
          error={errors.email?.message}
          disabled={isProcessing}
        />
      </div>

      <div className="flex flex-col gap-4">
        <Button variant="default" size="lg" disabled={isProcessing}>
          Confirmar
          {isProcessing && (
            <LoaderCircle className="ml-2 h-4 w-4 animate-spin" />
          )}
        </Button>

        <Button
          type="button"
          variant="outline"
          size="lg"
          onClick={handleBackButtonClick}
          disabled={isProcessing}
        >
          Voltar
        </Button>
      </div>
    </form>
  );
}
