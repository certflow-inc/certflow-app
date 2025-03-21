import { LogoutButton } from '@/components/logout-button/logout-button';
import Link from 'next/link';

export default async function AboutPage() {
  return (
    <div className="flex flex-col pt-10">
      <h1>CertFlow - About</h1>
      <Link href="/dashboard">Dashboard</Link>
      <LogoutButton />
    </div>
  );
}
