'use client'; // Error boundaries must be Client Components

import { Button, LoggedIn } from '@/components';
import { useEffect } from 'react';

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error.message);
  }, [error]);

  return (
    <LoggedIn.Container
      breadcrumb={[{ label: 'Configurações' }, { label: 'Conta' }]}
    >
      <div className="flex flex-1 flex-col items-center gap-4 rounded-xl bg-blue-100 p-2">
        <h2>Ocorreu um erro ao carregar os dados!</h2>
        <Button onClick={() => reset()}>Tentar novamente</Button>
      </div>
    </LoggedIn.Container>
  );
}
