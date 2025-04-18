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
import { SERVICE_MAP } from './account-service.constants';
import { AccountServiceViewProps } from './account-service.types';

export function AccountServiceView({ data }: AccountServiceViewProps) {
  if (!data) return <NoData message="Não existem serviços disponíveis" />;

  const services = Object.entries(data).map(([key, value]) => ({
    key,
    value
  }));

  return (
    <section className="flex flex-col rounded-md bg-white p-6">
      <Table>
        <TableCaption>
          Serviços disponíveis e seus valores/quantidades.
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-full text-slate-500">Serviço</TableHead>
            <TableHead className="w-fit text-slate-500">
              Valor / Quantidade
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services.map(({ key, value }) => (
            <TableRow key={key}>
              <TableCell className="py-4 font-medium md:text-lg">
                {SERVICE_MAP[key] ?? key}
              </TableCell>
              <TableCell className="text-right md:text-lg">
                {value as string}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
