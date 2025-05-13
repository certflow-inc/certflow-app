'use client';

import { Button, LoggedIn, NoData } from '@/components';

export default function CheckoutNotFoundPage() {
  return (
    <LoggedIn.Container>
      <NoData
        message="Dados necessários para finalizar a sua compra não foram encontrados."
        description="Entre em contato com o suporte para maiores informações."
      >
        <Button size="lg" onClick={() => window.location.reload()}>
          Tentar novamente
        </Button>
      </NoData>
    </LoggedIn.Container>
  );
}
