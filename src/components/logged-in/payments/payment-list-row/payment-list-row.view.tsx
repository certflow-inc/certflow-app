'use client';

import { TableCell, TableRow, TableRowExpanded } from '@/components/ui/table';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence } from 'motion/react';
import { PaymentListRowViewProps } from './payment-list-row.types';

export function PaymentListRowView({
  data,
  expandedId,
  onExpandRow,
  isExpandOnRowClick,
  onPaymentClick
}: PaymentListRowViewProps) {
  const isMeExpanded = expandedId === data.paymentId;
  const isPix = data.method === 'PIX';
  const isPending = data.status === 'Pendente';

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
        {data.amount}
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

    <AnimatePresence key={`${data.paymentId}-expandable`}>
      {isMeExpanded && (
        <TableRowExpanded
          key={`${data.paymentId}-expandable`}
          data-expanded={isMeExpanded}
          className={cn(
            'transition-colors duration-700 ease-linear',
            'data-[expanded=true]:bg-blue-50 data-[expanded=true]:py-2 data-[expanded=true]:shadow-md'
          )}
        >
          <TableCell colSpan={6} className="px-3 py-6">
            <div className="flex gap-10">
              <div
                data-visible={!!data.createdAt}
                className="hidden gap-4 data-[visible=true]:grid"
              >
                <div className="text-slate-500">Criado em</div>
                <span>{data.createdAt}</span>
              </div>

              <div
                data-visible={!!data.observation}
                className="hidden gap-4 data-[visible=true]:grid"
              >
                <div className="text-slate-500">Observação</div>
                <p className="text-wrap">{data.observation}</p>
              </div>

              <div
                data-visible={isPix && isPending}
                className="hidden gap-4 data-[visible=true]:grid"
              >
                <div className="text-slate-500">Pagar</div>
                <button
                  className="text-primary-500 w-full text-left font-bold hover:underline"
                  onClick={() => onPaymentClick(data.transactionId)}
                >
                  clique aqui para gerar o QR Code
                </button>
              </div>
            </div>
          </TableCell>
        </TableRowExpanded>
      )}
    </AnimatePresence>
  ];
}
