'use client';

import { Button, LoggedIn } from '@/components';
import { ServerError } from '@/components/commons/fallbacks';

export default function EventsErrorPage() {
  return (
    <LoggedIn.Container>
      <ServerError message="Erro ao carregar os eventos.">
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
