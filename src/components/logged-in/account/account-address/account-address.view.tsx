'use client';

import { Button, Input } from '@/components';
import {
  INPUT_MASKED_FORMATS,
  InputMasked,
  format
} from '@/components/ui/input-masked';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { BRAZILIAN_STATES } from '@/lib/common-constants';
import { LoaderCircle } from 'lucide-react';
import { getCep, updateAccountAddressData } from './account-address.actions';
import { useAccountAddressModel } from './account-address.model';
import { AccountAddressViewProps } from './account-address.types';

export function AccountAddressView({ data }: AccountAddressViewProps) {
  const {
    errors,
    isValid,
    isProcessing,
    isCepSearching,
    registeredFields,
    selectedState,
    handleFormSubmit,
    loadAddressByCep,
    handleBrazilianStateChange
  } = useAccountAddressModel({
    data,
    action: updateAccountAddressData,
    cepAction: getCep
  });

  return (
    <form
      noValidate
      onSubmit={handleFormSubmit}
      className="flex flex-col rounded-md bg-white p-6"
    >
      <div className="flex flex-1 flex-col gap-1 lg:flex-row">
        <div className="grid w-full gap-2 lg:w-40">
          <label htmlFor="zip" className="flex text-sm text-slate-500">
            CEP
            {isCepSearching && (
              <LoaderCircle className="ml-2 h-4 w-4 animate-spin" />
            )}
          </label>
          <InputMasked
            format="cep"
            defaultValue={format(data?.zip ?? '', INPUT_MASKED_FORMATS.cep)}
            {...registeredFields.zip}
            error={errors.zip?.message}
            disabled={isProcessing || isCepSearching}
            onBlur={(event) => {
              loadAddressByCep(event.currentTarget.value);
            }}
          />
        </div>

        <div className="grid flex-1 gap-2">
          <label htmlFor="address" className="text-sm text-slate-500">
            Rua
          </label>
          <Input
            type="text"
            id="address"
            defaultValue={data?.address}
            error={errors.address?.message}
            {...registeredFields.address}
            disabled={isProcessing || isCepSearching}
            maxLength={128}
          />
        </div>

        <div className="grid w-full gap-2 lg:w-40">
          <label htmlFor="number" className="text-sm text-slate-500">
            Número
          </label>
          <Input
            type="text"
            id="number"
            defaultValue={data?.number}
            error={errors.number?.message}
            {...registeredFields.number}
            maxLength={20}
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-1 lg:flex-row">
        <div className="grid flex-1 gap-2">
          <label htmlFor="district" className="text-sm text-slate-500">
            Bairro
          </label>
          <Input
            type="text"
            id="district"
            defaultValue={data?.district}
            error={errors.district?.message}
            {...registeredFields.district}
            disabled={isProcessing || isCepSearching}
          />
        </div>
        <div className="grid flex-1 gap-2">
          <label htmlFor="complement" className="text-sm text-slate-500">
            Complemento
          </label>
          <Input
            type="text"
            id="complement"
            defaultValue={data?.complement}
            error={errors.complement?.message}
            {...registeredFields.complement}
            disabled={isProcessing || isCepSearching}
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-1 lg:flex-row">
        <div className="grid flex-1 gap-2">
          <label htmlFor="state" className="text-sm text-slate-500">
            Estado
          </label>
          <Select
            onValueChange={handleBrazilianStateChange}
            value={selectedState}
            disabled={isProcessing || isCepSearching}
            {...registeredFields.state}
          >
            <SelectTrigger className="mb-5 w-full py-6">
              <SelectValue placeholder="Selecione um Estado" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {BRAZILIAN_STATES.map((brazilianState) => (
                  <SelectItem
                    key={brazilianState.key}
                    value={brazilianState.value}
                  >
                    {brazilianState.value}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="grid flex-1 gap-2">
          <label htmlFor="city" className="text-sm text-slate-500">
            Cidade
          </label>
          <Input
            type="text"
            id="city"
            defaultValue={data?.city}
            error={errors.city?.message}
            {...registeredFields.city}
            disabled={isProcessing || isCepSearching}
          />
        </div>
        <div className="grid flex-1 gap-2">
          <label htmlFor="country" className="text-sm text-slate-500">
            País
          </label>
          <Input
            type="text"
            id="country"
            disabled
            defaultValue="Brasil"
            error={errors.country?.message}
            {...registeredFields.country}
          />
        </div>
      </div>

      <div className="flex justify-end">
        <Button size="lg" disabled={!isValid || isProcessing || isCepSearching}>
          Salvar
          {isProcessing && (
            <LoaderCircle className="ml-2 h-4 w-4 animate-spin" />
          )}
        </Button>
      </div>
    </form>
  );
}
