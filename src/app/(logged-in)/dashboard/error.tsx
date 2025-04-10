'use client';

import { Button, LoggedIn } from '@/components';
import { ServerError } from '@/components/commons/fallbacks';

export default function DashboardErrorPage() {
  return (
    <LoggedIn.Container
      breadcrumb={[{ label: 'Geral' }, { label: 'Dashboard' }]}
    >
      <div className="flex-1 rounded-xl bg-blue-100 p-2">
        <ServerError message="Erro ao carregar o Dashboard.">
          <Button onClick={() => window.location.reload()} size="lg">
            Tentar novamente
          </Button>
        </ServerError>
      </div>
    </LoggedIn.Container>
  );
}
