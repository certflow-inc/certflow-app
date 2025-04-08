import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { notFound } from 'next/navigation';
import { AccountData } from './account-data';
import { AccountService } from './account-service';
import { AccountViewProps } from './account.types';

export async function AccountView({ accountAction }: AccountViewProps) {
  const { data: accountData } = await accountAction();

  if (!accountData) {
    return notFound();
  }

  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList>
        <TabsTrigger value="account">Conta</TabsTrigger>
        <TabsTrigger value="services">Serviços</TabsTrigger>
        <TabsTrigger value="modules">Módulos</TabsTrigger>
        <TabsTrigger value="address">Endereço</TabsTrigger>
      </TabsList>

      <TabsContent value="account">
        <AccountData data={accountData} />
      </TabsContent>

      <TabsContent value="services">
        <AccountService data={accountData.services} />
      </TabsContent>

      <TabsContent value="modules">Módulos</TabsContent>

      <TabsContent value="address">Endereço</TabsContent>
    </Tabs>
  );
}
