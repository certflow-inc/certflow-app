'use client';

import { useNavUserModel } from './nav-user.model';
import { NavUserView } from './nav-user.view';

export function NavUserViewModel() {
  const model = useNavUserModel();

  return <NavUserView model={model} />;
}
