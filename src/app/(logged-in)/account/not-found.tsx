import { LoggedIn } from '@/components';

export default function AccountNotFoundPage() {
  // TODO criar componente genérico de not-found e utilizar em todas as páginas
  // https://trello.com/c/YIMdRDEw/12-estilizar-as-p%C3%A1ginas-de-not-found
  return (
    <LoggedIn.Container
      breadcrumb={[{ label: 'Configurações' }, { label: 'Conta' }]}
    >
      <div className="flex flex-1 flex-col items-center gap-4 rounded-xl bg-blue-100 p-2">
        <h2>Não foi possível identificar os dados da sua conta.</h2>
        <h3>Entre em contato com o suporte para maiores informações.</h3>
      </div>
    </LoggedIn.Container>
  );
}
