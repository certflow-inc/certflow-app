import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AccountViewProps } from './account.types';

export async function AccountView({ accountAction }: AccountViewProps) {
  const response = await accountAction();
  console.log('🚀 ~ AccountView ~ response:', response);

  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Conta</TabsTrigger>
        <TabsTrigger value="services">Serviços</TabsTrigger>
        <TabsTrigger value="modules">Módulos</TabsTrigger>
        <TabsTrigger value="address">Endereço</TabsTrigger>
      </TabsList>

      <TabsContent value="account">Conta</TabsContent>
      <TabsContent value="services">Serviços</TabsContent>
      <TabsContent value="modules">Módulos</TabsContent>
      <TabsContent value="address">Endereço</TabsContent>
    </Tabs>
  );
}
