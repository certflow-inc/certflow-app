'use client';

import { Button, LoggedIn } from '@/components';

export default function Error() {
  // TODO criar componente genérico de erro e utilizar em todas as páginas
  // https://trello.com/c/XOu0034W/11-estilizar-as-p%C3%A1ginas-de-erro
  return (
    <LoggedIn.Container
      breadcrumb={[{ label: 'Configurações' }, { label: 'Conta' }]}
    >
      <div className="flex flex-1 flex-col items-center gap-4 rounded-xl bg-blue-100 p-2">
        <h2>Ocorreu um erro ao carregar os dados!</h2>
        <Button onClick={() => window.location.reload()}>
          Tentar novamente
        </Button>
      </div>
    </LoggedIn.Container>
  );
}
