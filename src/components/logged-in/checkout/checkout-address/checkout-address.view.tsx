import { getAddress } from '../../account/account-address/account-address.actions';

export async function CheckoutAddressView() {
  const { data: addressData } = await getAddress();

  return (
    <div>
      Address
      <div>{addressData?.address}</div>
      <div>{addressData?.country}</div>
      <div>{addressData?.state}</div>
      <div>{addressData?.city}</div>
      <div>{addressData?.number}</div>
      <div>{addressData?.district}</div>
    </div>
  );
}
