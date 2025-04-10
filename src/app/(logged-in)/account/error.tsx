'use client';

import { Button, LoggedIn } from '@/components';
import { ServerError } from '@/components/commons/fallbacks';

export default function AccountErrorPage() {
  return (
    <LoggedIn.Container
      breadcrumb={[{ label: 'Configurações' }, { label: 'Conta' }]}
    >
      <div className="flex-1 rounded-xl bg-blue-100 p-2">
        <ServerError message="Erro ao carregar a Conta.">
          <Button
            onClick={() => window.location.reload()}
            size="lg"
            variant="outline"
          >
            Tentar novamente
          </Button>
        </ServerError>
      </div>
    </LoggedIn.Container>
  );
}
