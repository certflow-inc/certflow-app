import { NotLoggedIn } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login'
};

export default function Home() {
  return <NotLoggedIn.Signin />;
}
