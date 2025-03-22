import { LogoutButton } from '@/components/logout-button/logout-button';
import { getSession } from '@/lib/session';
import { getMe } from '@/service/endpoints/me.service';
import Link from 'next/link';

export default async function Home() {
  const session = await getSession();

  const myData = await getMe();

  return (
    <div className="flex flex-col pt-10">
      <h1>
        CertFlow - Dashboard - {session?.name} - {myData.data?.status}
      </h1>
      <Link href="/about">About</Link>
      <LogoutButton />
    </div>
  );
}
