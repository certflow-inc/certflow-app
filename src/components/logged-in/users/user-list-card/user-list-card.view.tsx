'use client';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { format, INPUT_MASKED_FORMATS } from '@/components/ui/input-masked';
import { Role } from '@/service/base/domain/me';
import { Trash2 } from 'lucide-react';
import { UserCardViewProps } from './user-card-view.types';

export function UserCardView({
  data,
  currentUser,
  onDeleteUser
}: UserCardViewProps) {
  const isOwnerCurrentUser = currentUser.role === Role.Owner.toString();
  const isOwnerUserInDisplay = data.role === Role.Owner.toString();

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
          <p className="truncate text-base overflow-ellipsis">
            {data.translatedRole}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-slate-500">Status</p>
          <p className="truncate text-base overflow-ellipsis">
            {data.translatedStatus}
          </p>
        </div>
      </CardContent>

      <CardFooter
        data-visible={!isOwnerUserInDisplay}
        className='hidden justify-center gap-8 border-t border-slate-200 data-[visible="true"]:flex'
      >
        <button
          data-visible={isOwnerCurrentUser}
          className='hidden data-[visible="true"]:block'
          onClick={() => onDeleteUser(data)}
        >
          <Trash2 />
        </button>
      </CardFooter>
    </Card>
  );
}
