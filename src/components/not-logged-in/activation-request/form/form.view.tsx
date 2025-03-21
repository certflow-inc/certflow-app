import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { LoaderCircle } from 'lucide-react';
import { ActivationRequestFormViewProps } from './form.types';

export function ActivationRequestView({
  model
}: ActivationRequestFormViewProps) {
  const {
    errors,
    isValid,
    isProcessing,
    registeredFields,
    handleActivationRequestSubmit
  } = model;

  return (
    <div className="flex flex-1 flex-col items-center gap-12 px-4 lg:px-0">
      <h1 className="max-w-[500px] text-center text-2xl font-bold lg:text-4xl/relaxed">
        Quero um novo link para ativar minha conta.
      </h1>

      <form
        noValidate
        onSubmit={handleActivationRequestSubmit}
        className={cn('flex w-full max-w-96 flex-col gap-6 px-4 md:px-0')}
      >
        <div className="flex flex-col gap-2">
          <Input
            type="email"
            placeholder="Email"
            error={errors.email?.message}
            {...registeredFields.email}
          />
        </div>

        <div className="flex flex-col gap-4">
          <Button
            variant="default"
            size="lg"
            disabled={isProcessing || !isValid}
          >
            {isProcessing && (
              <LoaderCircle className="ml-2 h-4 w-4 animate-spin" />
            )}
            Confirmar
          </Button>
        </div>
      </form>
    </div>
  );
}
