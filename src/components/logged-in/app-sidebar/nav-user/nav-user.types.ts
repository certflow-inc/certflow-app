import { useNavUserModel } from './nav-user.model';

export type NavUserViewProps = {
  model: ReturnType<typeof useNavUserModel>;
};
