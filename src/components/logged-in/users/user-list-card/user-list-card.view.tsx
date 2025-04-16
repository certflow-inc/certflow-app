'use client';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { format, INPUT_MASKED_FORMATS } from '@/components/ui/input-masked';
import { Role } from '@/service/base/domain/me';
import { Pencil, Trash2 } from 'lucide-react';
import { UserCardViewProps } from './user-card-view.types';

export function UserCardView({ data }: UserCardViewProps) {
  const isOwner = data.role === Role.Owner;

  return (
    <Card className="border-0">
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-slate-500">Nome</p>
          <p className="truncate text-base overflow-ellipsis">{data.name}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-slate-500">E-mail</p>
          <p className="truncate text-base overflow-ellipsis">{data.email}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-slate-500">Celular</p>
          <p className="truncate text-base overflow-ellipsis">
            {format(data.mobilePhone, INPUT_MASKED_FORMATS.phone)}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-slate-500">Tipo</p>
          <p className="truncate text-base overflow-ellipsis">{data.role}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-slate-500">Status</p>
          <p className="truncate text-base overflow-ellipsis">{data.status}</p>
        </div>
      </CardContent>

      <CardFooter className="flex justify-center gap-8 border-t border-slate-200">
        <button
          onClick={() => {
            console.log(`editar o id ${data.userId}`);
          }}
        >
          <Pencil />
        </button>

        <button
          data-isowner={isOwner}
          className='data-[isowner="true"]:hidden'
          onClick={() => {
            console.log(`remover o id ${data.userId}`);
          }}
        >
          <Trash2 />
        </button>
      </CardFooter>
    </Card>
  );
}
