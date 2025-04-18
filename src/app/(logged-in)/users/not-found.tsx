'use client';

import { Button, LoggedIn, NoData } from '@/components';

export default function AccountNotFoundPage() {
  return (
    <LoggedIn.Container
      breadcrumb={[{ label: 'Configurações' }, { label: 'Conta' }]}
    >
      <NoData
        message="Não foi possível listar os usuários da sua conta."
        description="Entre em contato com o suporte para maiores informações."
      >
        <Button size="lg" onClick={() => window.location.reload()}>
          Tentar novamente
        </Button>
      </NoData>
    </LoggedIn.Container>
  );
}
