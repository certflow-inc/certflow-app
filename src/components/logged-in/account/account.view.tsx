import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { notFound } from 'next/navigation';
import { AccountAddress } from './account-address';
import { AccountData } from './account-data';
import { AccountModule } from './account-module';
import { AccountService } from './account-service';
import { AccountViewProps } from './account.types';

export async function AccountView({ accountAction }: AccountViewProps) {
  const { data: accountData } = await accountAction();

  if (!accountData) {
    return notFound();
  }

  return (
    <section className="flex flex-col gap-6 py-4">
      <header className="flex items-center justify-between gap-2 px-2">
        <h1 className="flex flex-col gap-2 truncate font-semibold overflow-ellipsis text-slate-500 min-[1130px]:text-left lg:text-2xl">
          Minha Conta
        </h1>
      </header>

      <Tabs defaultValue="account" className="w-full">
        <TabsList>
          <TabsTrigger value="account">Conta</TabsTrigger>
          <TabsTrigger value="address">Endereço</TabsTrigger>
          <TabsTrigger value="services">Serviços</TabsTrigger>
          <TabsTrigger value="modules">Módulos</TabsTrigger>
        </TabsList>

        <TabsContent value="account">
          <AccountData data={accountData} />
        </TabsContent>

        <TabsContent value="address">
          <AccountAddress />
        </TabsContent>

        <TabsContent value="services">
          <AccountService data={accountData.services} />
        </TabsContent>

        <TabsContent value="modules">
          <AccountModule data={accountData.modules} />
        </TabsContent>
      </Tabs>
    </section>
  );
}
