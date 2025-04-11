'use client';

import { useNavUserModel } from './nav-user.model';
import { NavUserViewModelProps } from './nav-user.types';
import { NavUserView } from './nav-user.view';

export function NavUserViewModel({ me }: NavUserViewModelProps) {
  const model = useNavUserModel({ user: me });

  return <NavUserView model={model} />;
}
