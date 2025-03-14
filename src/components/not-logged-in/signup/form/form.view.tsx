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
  const { backToLoginPage } = model;

  return (
    <form
      className={cn(
        'flex w-full max-w-96 flex-col gap-6 px-4 md:px-0',
        className
      )}
      {...props}
    >
      <div className="flex flex-col gap-2">
        <Select>
          <SelectTrigger className="mb-5 w-full py-6">
            <SelectValue placeholder="Selecione um tipo de pessoa" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="individual">Pessoa Física</SelectItem>
              <SelectItem value="corporation">Pessoa Jurídica</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <InputMasked format="cnpj" placeholder="CNPJ" />
        <Input type="text" placeholder="Nome da empresa" />

        <InputMasked format="cpf" placeholder="CPF" />
        <Input type="text" placeholder="Nome" />
        <InputMasked format="phone" placeholder="Celular" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Senha" />
        <Input type="password" placeholder="Confirmação da senha" />
      </div>

      <div className="flex flex-col gap-4">
        <Button variant="default" size="lg">
          Confirmar
        </Button>

        <Button
          type="button"
          variant="outline"
          size="lg"
          onClick={backToLoginPage}
        >
          Voltar
        </Button>
      </div>
    </form>
  );
}
