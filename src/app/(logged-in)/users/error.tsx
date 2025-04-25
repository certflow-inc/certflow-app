'use client';

import { Button, LoggedIn } from '@/components';
import { ServerError } from '@/components/commons/fallbacks';

export default function AccountErrorPage({ reset }: { reset: () => void }) {
  return (
    <LoggedIn.Container>
      <ServerError message="Erro ao carregar os usuários.">
        <Button onClick={reset} size="lg" variant="default">
          Tentar novamente
        </Button>
      </ServerError>
    </LoggedIn.Container>
  );
}
