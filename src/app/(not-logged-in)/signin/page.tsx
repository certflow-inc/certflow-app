import { FooterWaves, SigninForm } from '@/components';
import Image from 'next/image';
import logo from '../../../../public/images/logo_large.png';

export default function Home() {
  return (
    <main className="min-h-dvh pt-12">
      <div className="relative flex min-h-[calc(100vh-48px)] flex-col items-center">
        <Image
          priority
          draggable={false}
          quality={100}
          src={logo}
          alt="CertFlow Logo"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="h-auto w-full max-w-[200px] md:max-w-[300px] lg:max-w-[400px]"
        />
        <SigninForm className="z-10 mt-12 flex-1" />
        <FooterWaves />
      </div>
    </main>
  );
}
