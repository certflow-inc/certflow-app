import { LoggedIn } from '@/components';

export default function UserListLoagingPage() {
  return (
    <LoggedIn.Container
      breadcrumb={[{ label: 'Configurações' }, { label: 'Usuários' }]}
    >
      <div className="flex h-full flex-col gap-6 p-2 min-[1130px]:h-1/3">
        <div className="flex items-center justify-between gap-2">
          <div className="h-12 w-2/3 animate-pulse rounded-lg bg-blue-50" />
          <div className="h-12 w-50 animate-pulse rounded-lg bg-blue-50" />
        </div>
        <div className="h-full w-full animate-pulse rounded-md bg-blue-50 p-1 min-[1130px]:p-4" />
      </div>
    </LoggedIn.Container>
  );
}
