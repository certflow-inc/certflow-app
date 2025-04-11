import { useSidebar } from '@/components/ui/sidebar';
import { UseNavUserViewModelProps } from './nav-user.types';

export function useNavUserModel({ user }: UseNavUserViewModelProps) {
  const { isMobile } = useSidebar();

  const getInitials = (name: string | undefined) => {
    if (!name) {
      return 'NA';
    }

    const splitName = name.split(' ');
    return splitName.length === 1
      ? splitName[0].slice(0, 2)
      : `${splitName[0][0]}${splitName[splitName.length - 1][0]}`;
  };

  return {
    isMobile,
    user,
    getInitials
  };
}
