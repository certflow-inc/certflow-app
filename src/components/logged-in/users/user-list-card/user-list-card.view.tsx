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
        <Cell label="Nome" value={data.name} />
        <Cell label="E-mail" value={data.email} />
        <Cell
          label="Celular"
          value={format(data.mobilePhone, INPUT_MASKED_FORMATS.phone)}
        />
        <Cell label="Tipo" value={data.translatedRole} />
        <Cell label="Status" value={data.translatedStatus} />
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

function Cell({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="line-clamp-1 text-base">{value}</p>
    </div>
  );
}
