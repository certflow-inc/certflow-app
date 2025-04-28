'use client';

import { Button, LoggedIn } from '@/components';
import { ServerError } from '@/components/commons/fallbacks';

export default function PaymentsErrorPage() {
  return (
    <LoggedIn.Container>
      <ServerError message="Erro ao carregar os pagamentos.">
        <Button
          onClick={() => window.location.reload()}
          size="lg"
          variant="default"
        >
          Tentar novamente
        </Button>
      </ServerError>
    </LoggedIn.Container>
  );
}
