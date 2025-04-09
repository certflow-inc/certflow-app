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
  if (!data) {
    // TODO Criar componente para no-data-found => https://trello.com/c/Eb8H5Oly/10-criar-um-componente-de-no-data-found-para-as-abas-de-servi%C3%A7os-e-m%C3%B3dulos-caso-n%C3%A3o-tenha-dados-para-serem-exibidos
    return (
      <section className="flex flex-col rounded-md bg-white p-6">
        <h1>Não há serviços disponíveis</h1>
      </section>
    );
  }

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
              <TableCell className="py-4 font-medium">
                {SERVICE_MAP[key] ?? key}
              </TableCell>
              <TableCell className="text-right">{value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
