import { LogoutButton } from '@/components/logout-button/logout-button';
import { getMe } from '@/service/endpoints/me.service';
import Link from 'next/link';

export default async function Home() {
  const myData = await getMe();

  return (
    <div className="flex flex-col pt-10">
      <h1>
        CertFlow - Dashboard - {myData.data?.name} - {myData.data?.status}
      </h1>
      <Link href="/about">About</Link>
      <LogoutButton />
    </div>
  );
}
