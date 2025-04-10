'use client';

import { Button, LoggedIn, NoData } from '@/components';

export default function AccountNotFoundPage() {
  return (
    <LoggedIn.Container
      breadcrumb={[{ label: 'Configurações' }, { label: 'Conta' }]}
    >
      <div className="flex-1 rounded-xl bg-blue-100 p-2">
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
      </div>
    </LoggedIn.Container>
  );
}
