'use client';
import { Button } from '@/components';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="flex max-w-[1000px] flex-1 flex-col items-center gap-12 px-4 lg:px-10">
      <h2 className="text-center text-2xl font-bold lg:text-4xl/relaxed">
        Op!
      </h2>

      <p className="text-center text-xl/relaxed data-[visible=false]:hidden lg:text-2xl/relaxed">
        Algo deu errado.
      </p>

      <Button onClick={() => reset()}>Tentar novamente</Button>
    </div>
  );
}
