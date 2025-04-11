'use client';

import { DATA } from '../app-sidebar.constants';
import { useNavMainModel } from './nav-main.model';
import { NavMainVeiw } from './nav-main.view';

export function NavMainViewModel() {
  const model = useNavMainModel({ items: DATA.navMain });

  return <NavMainVeiw model={model} />;
}
