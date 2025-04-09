import { getAddress } from './account-address.actions';
import { AccountAddressView } from './account-address.view';

export async function AccountAddressViewModel() {
  const response = await getAddress();

  if (!response.ok) {
    return (
      <div className="flex flex-col rounded-md bg-white p-6">
        Erro ao carregar endereço
      </div>
    );
  }

  return <AccountAddressView data={response.data} />;
}
