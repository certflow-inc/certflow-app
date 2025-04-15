'use client';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Pencil, Trash2 } from 'lucide-react';
import { UserCardViewProps } from './user-card-view.types';

export function UserCardView({
  data: { id, name, email, mobilePhone, role, status }
}: UserCardViewProps) {
  const isOwner = role === 'Owner';

  return (
    <Card className="border-0">
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-slate-500">Nome</p>
          <p className="truncate text-base overflow-ellipsis">{name}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-slate-500">E-mail</p>
          <p className="truncate text-base overflow-ellipsis">{email}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-slate-500">Celular</p>
          <p className="truncate text-base overflow-ellipsis">{mobilePhone}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-slate-500">Tipo</p>
          <p className="truncate text-base overflow-ellipsis">{role}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-slate-500">Status</p>
          <p className="truncate text-base overflow-ellipsis">{status}</p>
        </div>
      </CardContent>

      <CardFooter className="flex justify-center gap-8 border-t border-slate-200">
        <button
          onClick={() => {
            console.log(`editar o id ${id}`);
          }}
        >
          <Pencil />
        </button>

        <button
          data-isowner={isOwner}
          className='data-[isowner="true"]:hidden'
          onClick={() => {
            console.log(`remover o id ${id}`);
          }}
        >
          <Trash2 />
        </button>
      </CardFooter>
    </Card>
  );
}
