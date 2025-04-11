import { Me } from '@/service/base/domain/me';
import { useNavUserModel } from './nav-user.model';

export type UseNavUserViewModelProps = {
  user: Me | undefined;
};

export type NavUserViewModelProps = {
  me: Me | undefined;
};

export type NavUserViewProps = {
  model: ReturnType<typeof useNavUserModel>;
};
