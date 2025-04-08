import { Button, Input } from '@/components';
import { AccountDataViewProps } from './account-data.types';

export function AccountDataView({ data }: AccountDataViewProps) {
  return (
    <form className="flex flex-col rounded-md bg-white p-6">
      <div className="flex">
        <div className="grid flex-1 gap-2">
          <label htmlFor="status">Status</label>
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
          <label htmlFor="type">Tipo</label>
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
          <label htmlFor="document">
            {data.type === 'individual' ? 'CPF' : 'CNPJ'}
          </label>
          <Input
            type="text"
            id="document"
            name="document"
            defaultValue={data.taxId}
            disabled
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2 md:flex-row">
        <div className="grid flex-1 gap-2">
          <label htmlFor="name">Nome</label>
          <Input
            type="text"
            id="name"
            name="name"
            defaultValue={data.name}
            disabled
          />
        </div>

        <div className="grid flex-1 gap-2">
          <label htmlFor="fantasy">Nome Fantasia</label>
          <Input
            type="text"
            id="fantasy"
            name="fantasy"
            defaultValue={data.fantasy}
          />
        </div>
      </div>

      <div className="flex justify-end">
        <Button size="lg">Salvar</Button>
      </div>
    </form>
  );
}
