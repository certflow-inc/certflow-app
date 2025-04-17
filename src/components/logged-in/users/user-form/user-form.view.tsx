import { Button, Input } from '@/components';
import { InputMasked } from '@/components/ui/input-masked';
import { LoaderCircle } from 'lucide-react';
import Link from 'next/link';
import { UserFormViewProps } from './user-form.types';

export function UserFormView({ model }: UserFormViewProps) {
  const {
    data,
    handleFormSubmit,
    registeredFields,
    isProcessing,
    errors,
    isValid
  } = model;

  return (
    <div className="flex flex-1 flex-col gap-6 px-2 pt-2">
      <h1 className="pl-1 text-2xl font-semibold text-slate-500">
        Criação de usuário
      </h1>
      <form
        noValidate
        onSubmit={handleFormSubmit}
        className="flex flex-col gap-6 rounded-md bg-white p-6"
      >
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="flex flex-1">
            <div className="grid flex-1 gap-2">
              <label htmlFor="status" className="text-slate-500">
                Nome
              </label>
              <Input
                type="text"
                {...registeredFields.name}
                error={errors.name?.message}
                disabled={isProcessing}
                defaultValue={data?.name}
              />
            </div>
          </div>

          <div className="flex flex-1">
            <div className="grid flex-1 gap-2">
              <label htmlFor="status" className="text-slate-500">
                E-mail
              </label>
              <Input
                type="email"
                {...registeredFields.email}
                error={errors.email?.message}
                disabled={isProcessing}
                defaultValue={data?.email}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="flex flex-1">
            <div className="grid flex-1 gap-2">
              <label htmlFor="status" className="text-slate-500">
                CPF
              </label>
              <InputMasked
                format="cpf"
                {...registeredFields.taxId}
                error={errors.taxId?.message}
                disabled={isProcessing}
                defaultValue={data?.taxId}
              />
            </div>
          </div>

          <div className="flex flex-1">
            <div className="grid flex-1 gap-2">
              <label htmlFor="status" className="text-slate-500">
                Celular
              </label>
              <InputMasked
                format="phone"
                {...registeredFields.mobilePhone}
                error={errors.mobilePhone?.message}
                disabled={isProcessing}
                defaultValue={data?.mobilePhone}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse justify-center gap-4 md:flex-row md:justify-end">
          <Button
            type="button"
            asChild
            variant="outline"
            className="w-full md:w-fit"
            disabled={!isValid || isProcessing}
          >
            <Link href="/users">Voltar</Link>
          </Button>

          <Button
            type="submit"
            className="w-full md:w-fit"
            disabled={!isValid || isProcessing}
          >
            Salvar
            {isProcessing && (
              <LoaderCircle className="ml-2 h-4 w-4 animate-spin" />
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
