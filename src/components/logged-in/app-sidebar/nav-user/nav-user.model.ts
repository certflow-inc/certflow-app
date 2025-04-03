import { useSidebar } from '@/components/ui/sidebar';
import { useAppSession } from '@/providers/session-provider';

export function useNavUserModel() {
  const { isMobile } = useSidebar();
  const { user } = useAppSession();

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
