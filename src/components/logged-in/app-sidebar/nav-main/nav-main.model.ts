import { useSidebar } from '@/components/ui/sidebar';
import { usePathname } from 'next/navigation';
import { Item, NavMainModelProps } from './nav-main.types';

export function useNavMain({ items }: NavMainModelProps) {
  const pathName = usePathname();
  const { setOpenMobile, isMobile } = useSidebar();

  const isItemActive = (url: string) => {
    return pathName === url || (!!url && pathName.includes(url));
  };

  const isGroupActive = (item: Item) => {
    return item.items?.some((i) => isItemActive(i.url));
  };

  const onItemClick = () => {
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  return {
    items,
    isItemActive,
    isGroupActive,
    onItemClick
  };
}
