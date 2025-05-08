import { useSidebar } from '@/components/ui/sidebar';
import { useState } from 'react';
import { UseNavUserViewModelProps } from './nav-user.types';

export function useNavUserModel({ user }: UseNavUserViewModelProps) {
  const [open, setOpen] = useState(false);
  const { setOpenMobile, isMobile } = useSidebar();

  const getInitials = (name: string | undefined) => {
    if (!name) {
      return 'NA';
    }

    const splitName = name.split(' ');
    return splitName.length === 1
      ? splitName[0].slice(0, 2)
      : `${splitName[0][0]}${splitName[splitName.length - 1][0]}`;
  };

  const onItemClick = () => {
    setOpen(false);
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  return {
    isMobile,
    user,
    open,
    setOpen,
    getInitials,
    onItemClick
  };
}
