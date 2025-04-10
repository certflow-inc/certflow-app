import { Button, Input } from '@/components';
import { format, INPUT_MASKED_FORMATS } from '@/components/ui/input-masked';
import { LoaderCircle } from 'lucide-react';
import { AccountDataViewProps } from './account-data.types';

export function AccountDataView({ model }: AccountDataViewProps) {
  const {
    data,
    handleFormSubmit,
    registeredFields,
    isProcessing,
    errors,
    isValid
  } = model;

  return (
    <form
      noValidate
      onSubmit={handleFormSubmit}
      className="flex flex-col rounded-md bg-white p-6"
    >
      <div className="flex">
        <div className="grid flex-1 gap-2">
          <label htmlFor="status" className="text-slate-500">
            Status
          </label>
          <Input
            type="text"
            id="status"
            name="status"
            defaultValue={data.status === 'active' ? 'Ativo' : 'Inativo'}
            disabled
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2 md:flex-row">
        <div className="grid flex-1 gap-2">
          <label htmlFor="type" className="text-slate-500">
            Tipo
          </label>
          <Input
            type="text"
            id="type"
            name="type"
            defaultValue={
              data.type === 'individual' ? 'Pessoa Física' : 'Pessoa Jurídica'
            }
            disabled
          />
        </div>

        <div className="grid flex-1 gap-2">
          <label htmlFor="document" className="text-slate-500">
            {data.type === 'individual' ? 'CPF' : 'CNPJ'}
          </label>
          <Input
            type="text"
            id="document"
            name="document"
            defaultValue={
              data.type === 'individual'
                ? format(data.taxId, INPUT_MASKED_FORMATS.cpf)
                : format(data.taxId, INPUT_MASKED_FORMATS.cnpj)
            }
            disabled
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2 md:flex-row">
        <div className="grid flex-1 gap-2">
          <label htmlFor="name" className="text-slate-500">
            Nome
          </label>
          <Input
            type="text"
            id="name"
            name="name"
            defaultValue={data.name}
            disabled
          />
        </div>

        <div className="grid flex-1 gap-2">
          <label htmlFor="fantasy" className="text-slate-500">
            Nome Fantasia
          </label>
          <Input
            type="text"
            id="fantasy"
            defaultValue={data.fantasy}
            disabled={isProcessing}
            {...registeredFields.fantasy}
            error={errors.fantasy?.message}
            maxLength={128}
          />
        </div>
      </div>

      <div className="flex justify-end">
        <Button type="submit" size="lg" disabled={!isValid || isProcessing}>
          Salvar
          {isProcessing && (
            <LoaderCircle className="ml-2 h-4 w-4 animate-spin" />
          )}
        </Button>
      </div>
    </form>
  );
}
