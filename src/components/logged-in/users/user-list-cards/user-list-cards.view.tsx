import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Pencil, Trash2 } from 'lucide-react';

export function UsersListCardsView() {
  return (
    <div className="flex flex-col gap-8 min-[1130px]:hidden">
      <Card className="border-0">
        <CardContent className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-slate-500">Nome</p>
            <p className="truncate text-base overflow-ellipsis">
              Ricardo Almendro Ruiz
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-slate-500">E-mail</p>
            <p className="truncate text-base overflow-ellipsis">
              ricardo.almendro.ruiz@gmail.com
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-slate-500">Celular</p>
            <p className="truncate text-base overflow-ellipsis">
              (19) 99941-2206
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-slate-500">Tipo</p>
            <p className="truncate text-base overflow-ellipsis">Owner</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-slate-500">Status</p>
            <p className="truncate text-base overflow-ellipsis">Ativo</p>
          </div>
        </CardContent>

        <CardFooter className="flex justify-center gap-8 border-t border-slate-200">
          <button>
            <Pencil />
          </button>
        </CardFooter>
      </Card>

      <Card className="border-0">
        <CardContent className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-slate-500">Nome</p>
            <p className="truncate text-base overflow-ellipsis">
              Ricardo Almendro Ruiz
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-slate-500">E-mail</p>
            <p className="truncate text-base overflow-ellipsis">
              ricardo.almendro.ruiz@gmail.com
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-slate-500">Celular</p>
            <p className="truncate text-base overflow-ellipsis">
              (19) 99941-2206
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-slate-500">Tipo</p>
            <p className="truncate text-base overflow-ellipsis">Owner</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-slate-500">Status</p>
            <p className="truncate text-base overflow-ellipsis">Ativo</p>
          </div>
        </CardContent>

        <CardFooter className="flex justify-center gap-8 border-t border-slate-200">
          <button>
            <Pencil />
          </button>
          <button>
            <Trash2 />
          </button>
        </CardFooter>
      </Card>
    </div>
  );
}
