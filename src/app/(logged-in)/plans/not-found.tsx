'use client';

import { Button, LoggedIn, NoData } from '@/components';

export default function PlansNotFoundPage() {
  return (
    <LoggedIn.Container>
      <NoData
        message="Não foi possível listar os planos disponíveis."
        description="Entre em contato com o suporte para maiores informações."
      >
        <Button size="lg" onClick={() => window.location.reload()}>
          Tentar novamente
        </Button>
      </NoData>
    </LoggedIn.Container>
  );
}
