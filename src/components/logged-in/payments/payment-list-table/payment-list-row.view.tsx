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
  return (
    <>
      <TableRow
        data-expanded={isMeExpanded}
        data-expand-on-row-click={isExpandOnRowClick}
        className="cursor-default data-[expand-on-row-click=true]:cursor-pointer data-[expanded=true]:bg-blue-50"
        onClick={() =>
          isExpandOnRowClick
            ? onExpandRow(isMeExpanded ? '' : data.paymentId)
            : null
        }
      >
        <TableCell className="w-1/4 max-w-[250px] truncate py-4 text-base overflow-ellipsis md:text-lg">
          {data.description}
        </TableCell>
        <TableCell className="w-1/4 max-w-[250px] truncate text-base overflow-ellipsis md:text-lg">
          {data.provider}
        </TableCell>
        <TableCell className="w-1/5 max-w-[250px] truncate text-base overflow-ellipsis md:text-lg">
          {data.paymentMethod}
        </TableCell>
        <TableCell className="w-1/5 max-w-[150px] truncate text-base overflow-ellipsis md:text-lg">
          {data.status}
        </TableCell>
        <TableCell className="max-w-[150px] truncate text-base overflow-ellipsis md:text-lg">
          {data.value}
        </TableCell>
        <TableCell className="w-[80px] justify-end">
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
      </TableRow>

      <TableRow
        data-expanded={isMeExpanded}
        className={cn(
          'grid grid-cols-6',
          'max-h-0 overflow-hidden px-2 transition-all duration-300 ease-in-out',
          'data-[expanded=true]:max-h-screen data-[expanded=true]:bg-blue-50 data-[expanded=true]:py-2'
        )}
      >
        <TableCell className="col-span-1 grid gap-2">
          <div className="text-slate-500">Criado em</div>
          <span>{data.createdAt}</span>
        </TableCell>
        <TableCell className="col-span-5 grid gap-2">
          <div className="text-slate-500">Observação</div>
          <p className="text-wrap">{data.observation}</p>
        </TableCell>
      </TableRow>
    </>
  );
}
