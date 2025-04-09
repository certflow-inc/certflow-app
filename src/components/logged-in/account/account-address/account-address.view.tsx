import { Button, Input } from '@/components';
import { AccountAddressViewProps } from './account-address.types';

export function AccountAddressView({ data }: AccountAddressViewProps) {
  return (
    <form className="flex flex-col rounded-md bg-white p-6">
      <div className="flex flex-1 flex-col gap-2 md:flex-row">
        <div className="grid flex-3 gap-2">
          <label htmlFor="address" className="text-slate-500">
            Rua
          </label>
          <Input
            type="text"
            id="address"
            name="address"
            defaultValue={data?.address}
          />
        </div>

        <div className="grid flex-1 gap-2">
          <label htmlFor="number" className="text-slate-500">
            Número
          </label>
          <Input
            type="text"
            id="number"
            name="number"
            defaultValue={data?.number}
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2 md:flex-row">
        <div className="grid flex-1 gap-2">
          <label htmlFor="complement" className="text-slate-500">
            Complemento
          </label>
          <Input
            type="text"
            id="complement"
            name="complement"
            defaultValue={data?.complement}
          />
        </div>

        <div className="grid flex-1 gap-2">
          <label htmlFor="district" className="text-slate-500">
            Bairro
          </label>
          <Input
            type="text"
            id="district"
            name="district"
            defaultValue={data?.district}
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2 md:flex-row">
        <div className="grid flex-1 gap-2">
          <label htmlFor="zip" className="text-slate-500">
            CEP
          </label>
          <Input type="text" id="zip" name="zip" defaultValue={data?.zip} />
        </div>

        <div className="grid flex-1 gap-2">
          <label htmlFor="country" className="text-slate-500">
            País
          </label>
          <Input
            type="text"
            id="country"
            name="country"
            defaultValue="Brasil"
            disabled
          />
        </div>
      </div>

      <div className="flex justify-end">
        <Button size="lg">Salvar</Button>
      </div>
    </form>
  );
}
