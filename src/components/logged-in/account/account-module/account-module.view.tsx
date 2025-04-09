import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Check, X } from 'lucide-react';
import { AccountModuleViewProps } from './account-module.types';

export function AccountModuleView({ data }: AccountModuleViewProps) {
  if (!data) {
    // TODO Criar componente para no-data-found => https://trello.com/c/Eb8H5Oly/10-criar-um-componente-de-no-data-found-para-as-abas-de-servi%C3%A7os-e-m%C3%B3dulos-caso-n%C3%A3o-tenha-dados-para-serem-exibidos
    return (
      <section className="flex flex-col rounded-md bg-white p-6">
        <h1>Não há módulos ativos</h1>
      </section>
    );
  }

  const modules = Object.entries(data).map(([key, value]) => ({
    key,
    value
  }));

  return (
    <section className="flex flex-col rounded-md bg-white p-6">
      <Table>
        <TableCaption>Módulos disponíveis</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-full text-slate-500">Módulo</TableHead>
            <TableHead className="w-fit text-slate-500">Ativo</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {modules.map(({ key, value }) => (
            <TableRow key={key}>
              <TableCell className="py-4 font-medium">
                {key
                  .split(' ')
                  .map(
                    (word) =>
                      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                  )
                  .join(' ')}
              </TableCell>
              <TableCell className="flex justify-center">
                {value ? (
                  <Check className="text-green-500" size={22} />
                ) : (
                  <X className="text-red-500" size={22} />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
