'use client';

import { Button, LoggedIn, NoData } from '@/components';
import { ROUTES } from '@/routes';
import { useRouter } from 'next/navigation';

export default function AccountNotFoundPage() {
  const router = useRouter();
  return (
    <LoggedIn.Container>
      <NoData
        message="Não existem eventos cadastrados."
        description="Cadastre seu primeiro evento!."
      >
        <Button size="lg" onClick={() => router.push(ROUTES.EVENTS_CREATE.url)}>
          Cadastrar novo evento
        </Button>
      </NoData>
    </LoggedIn.Container>
  );
}
