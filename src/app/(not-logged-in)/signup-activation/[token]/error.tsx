'use client';
import { Button } from '@/components';
import { ROUTES } from '@/routes';
import Link from 'next/link';

export default function Error() {
  return (
    <div className="flex max-w-[1000px] flex-1 flex-col items-center gap-12 px-4 lg:px-10">
      <h2 className="text-center text-2xl font-bold lg:text-4xl/relaxed">
        Ops!
      </h2>

      <p className="text-center text-xl/relaxed data-[visible=false]:hidden lg:text-2xl/relaxed">
        Algo deu errado.
      </p>

      <Button>
        <Link href={ROUTES.SIGNIN.url}>Voltar para o login</Link>
      </Button>
    </div>
  );
}
