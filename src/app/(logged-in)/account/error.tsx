'use client';

import { Button, LoggedIn } from '@/components';
import { ServerError } from '@/components/commons/fallbacks';

export default function AccountErrorPage() {
  return (
    <LoggedIn.Container>
      <ServerError message="Erro ao carregar a Conta.">
        <Button onClick={() => window.location.reload()} size="lg">
          Tentar novamente
        </Button>
      </ServerError>
    </LoggedIn.Container>
  );
}
