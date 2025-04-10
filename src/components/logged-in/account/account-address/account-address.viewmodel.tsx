import { getAddress } from './account-address.actions';
import { AccountAddressView } from './account-address.view';

export async function AccountAddressViewModel() {
  const response = await getAddress();

  // TODO ver como seria a melhor forma de dar um fallback
  if (!response.ok) {
    return (
      <div className="flex flex-col rounded-md bg-white p-6">
        Erro ao carregar endereço
      </div>
    );
  }

  return <AccountAddressView data={response.data} />;
}
