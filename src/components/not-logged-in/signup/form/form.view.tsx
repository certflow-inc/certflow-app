import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { InputMasked } from '@/components/ui/input-masked';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { LoaderCircle } from 'lucide-react';
import { SignupFormViewProps } from './form.types';

export function SignupFormView({
  model,
  className,
  ...props
}: SignupFormViewProps) {
  const {
    errors,
    registeredFields,
    showCorporationInformations,
    PERSON_TYPES,
    isProcessing,
    handleSignupSubmit,
    handleBackButtonClick,
    handleTypePersonChange
  } = model;

  return (
    <form
      noValidate
      onSubmit={handleSignupSubmit}
      className={cn(
        'flex w-full max-w-96 flex-col gap-6 px-4 md:px-0',
        className
      )}
      {...props}
    >
      <div className="flex flex-col gap-2">
        <input type="hidden" {...registeredFields.type} />
        <Select
          onValueChange={handleTypePersonChange}
          defaultValue={PERSON_TYPES[0].value}
        >
          <SelectTrigger className="mb-5 w-full py-6">
            <SelectValue placeholder="Selecione um tipo de pessoa" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {PERSON_TYPES.map((personType) => (
                <SelectItem key={personType.value} value={personType.value}>
                  {personType.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <div
          data-visible={showCorporationInformations}
          className="data-[visible=false]:hidden"
        >
          <InputMasked
            format="cnpj"
            placeholder="CNPJ"
            {...registeredFields.companyTaxId}
            error={errors.companyTaxId?.message}
          />
          <Input
            type="text"
            placeholder="Nome da empresa"
            {...registeredFields.companyName}
            error={errors.companyName?.message}
          />
        </div>

        <InputMasked
          format="cpf"
          placeholder="CPF"
          {...registeredFields.taxId}
          error={errors.taxId?.message}
        />
        <Input
          type="text"
          placeholder="Nome"
          {...registeredFields.name}
          error={errors.name?.message}
        />
        <InputMasked
          format="phone"
          placeholder="Telefone"
          {...registeredFields.mobilePhone}
          error={errors.mobilePhone?.message}
        />
        <Input
          type="email"
          placeholder="Email"
          {...registeredFields.email}
          error={errors.email?.message}
        />
        <Input
          type="password"
          placeholder="Senha"
          {...registeredFields.password}
          error={errors.password?.message}
        />
        <Input
          type="password"
          placeholder="Confirmação da senha"
          {...registeredFields.confirmPassword}
          error={errors.confirmPassword?.message}
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
