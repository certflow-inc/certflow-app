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
import { SignupFormViewProps } from './form.types';

export function SignupFormView({
  model,
  className,
  ...props
}: SignupFormViewProps) {
  const {
    handleSignupSubmit,
    register,
    errors,
    handleBackButtonClick,
    handleTypePersonChange,
    showCorporationInformations,
    PERSON_TYPES
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
        <input type="hidden" {...register('type')} />
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
            {...register('companyTaxId')}
            error={errors.companyTaxId?.message}
          />
          <Input
            type="text"
            placeholder="Nome da empresa"
            {...register('companyName')}
            error={errors.companyName?.message}
          />
        </div>

        <InputMasked
          format="cpf"
          placeholder="CPF"
          {...register('taxId')}
          error={errors.taxId?.message}
        />
        <Input
          type="text"
          placeholder="Nome"
          {...register('name')}
          error={errors.name?.message}
        />
        <InputMasked
          format="phone"
          placeholder="Celular"
          {...register('mobilePhone')}
          error={errors.mobilePhone?.message}
        />
        <Input
          type="email"
          placeholder="Email"
          {...register('email')}
          error={errors.email?.message}
        />
        <Input
          type="password"
          placeholder="Senha"
          {...register('password')}
          error={errors.password?.message}
        />
        <Input
          type="password"
          placeholder="Confirmação da senha"
          {...register('confirmPassword')}
          error={errors.confirmPassword?.message}
        />
      </div>

      <div className="flex flex-col gap-4">
        <Button variant="default" size="lg">
          Confirmar
        </Button>

        <Button
          type="button"
          variant="outline"
          size="lg"
          onClick={handleBackButtonClick}
        >
          Voltar
        </Button>
      </div>
    </form>
  );
}
