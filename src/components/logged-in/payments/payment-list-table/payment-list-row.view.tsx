'use client';

import { TableCell, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { PaymentListRowViewProps } from './payment-list-table.types';

export function PaymentListRowView({
  data,
  expandedId,
  onExpandRow,
  isExpandOnRowClick
}: PaymentListRowViewProps) {
  const isMeExpanded = expandedId === data.paymentId;
  return [
    <TableRow
      key={data.paymentId}
      data-expanded={isMeExpanded}
      data-expand-on-row-click={isExpandOnRowClick}
      className="cursor-default data-[expand-on-row-click=true]:cursor-pointer data-[expanded=true]:bg-blue-50"
      onClick={() =>
        isExpandOnRowClick
          ? onExpandRow(isMeExpanded ? '' : data.paymentId)
          : null
      }
    >
      <TableCell className="w-1/2 max-w-[250px] truncate py-4 text-base overflow-ellipsis md:text-lg">
        {data.description}
      </TableCell>
      <TableCell className="w-1/5 max-w-[250px] truncate text-base overflow-ellipsis md:text-lg">
        {data.provider}
      </TableCell>
      <TableCell className="w-1/5 max-w-[150px] truncate text-base overflow-ellipsis md:text-lg">
        {data.method}
      </TableCell>
      <TableCell className="w-1/5 max-w-[150px] truncate text-base overflow-ellipsis md:text-lg">
        {data.status}
      </TableCell>
      <TableCell className="w-1/5 max-w-[150px] truncate text-right text-base overflow-ellipsis md:text-lg">
        {Number(data.amount).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        })}
      </TableCell>
      <TableCell className="w-1/5 max-w-[80px] justify-end">
        <button
          className="flex items-center justify-center"
          onClick={() => onExpandRow(isMeExpanded ? '' : data.paymentId)}
        >
          <ChevronDown
            size={26}
            data-expanded={isMeExpanded}
            className="transition-all data-[expanded=true]:rotate-180"
          />
        </button>
      </TableCell>
    </TableRow>,

    <TableRow
      key={`${data.paymentId}-expandable`}
      data-expanded={isMeExpanded}
      className={cn(
        'hidden transition-colors duration-700 ease-linear',
        'data-[expanded=true]:table-row data-[expanded=true]:bg-blue-50 data-[expanded=true]:py-2 data-[expanded=true]:shadow-md'
      )}
    >
      <TableCell className="w-1/6 px-8 py-6">
        <div className="grid gap-4">
          <div className="text-slate-500">Criado em</div>
          <span>{new Date(data.createdAt).toLocaleDateString('pt-BR')}</span>
        </div>
      </TableCell>
      <TableCell>
        <div className="grid gap-4">
          <div className="text-slate-500">Observação</div>
          <p className="text-wrap">{data.observation}</p>
        </div>
      </TableCell>
      <TableCell></TableCell>
      <TableCell></TableCell>
      <TableCell></TableCell>
      <TableCell></TableCell>
    </TableRow>
  ];
}
