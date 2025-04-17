'use client'; // Error boundaries must be Client Components

import { Button } from '@/components';
import { ServerError } from '@/components/commons/fallbacks';
import { useEffect } from 'react';

export default function Error({
  error
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ServerError message="Erro ao carregar os usuários.">
      <Button
        onClick={() => window.location.reload()}
        size="lg"
        variant="outline"
      >
        Tentar novamente
      </Button>
    </ServerError>
  );
}
