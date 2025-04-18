import { NoData } from '@/components/commons/fallbacks';
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
  if (!data) return <NoData message="Não foram encontrados módulos" />;

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
              <TableCell className="py-4 font-medium md:text-lg">
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
