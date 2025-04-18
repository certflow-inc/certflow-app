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
    <div className="flex h-screen flex-col items-center justify-center">
      <ServerError message="Ocorreu um erro inesperado." showLogo>
        <Button onClick={() => window.location.reload()} size="lg">
          Tentar novamente
        </Button>
      </ServerError>
    </div>
  );
}
