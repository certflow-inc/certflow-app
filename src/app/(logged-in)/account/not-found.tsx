'use client';

import { Button, LoggedIn, NoData } from '@/components';

export default function AccountNotFoundPage() {
  return (
    <LoggedIn.Container
      breadcrumb={[{ label: 'Configurações' }, { label: 'Conta' }]}
    >
      <NoData
        message="Não foi possível identificar os dados da sua conta."
        description="Entre em contato com o suporte para maiores informações."
      >
        <Button
          onClick={() => window.location.reload()}
          size="lg"
          variant="outline"
        >
          Tentar novamente
        </Button>
      </NoData>
    </LoggedIn.Container>
  );
}
