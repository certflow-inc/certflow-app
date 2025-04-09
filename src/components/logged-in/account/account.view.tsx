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
  );
}
