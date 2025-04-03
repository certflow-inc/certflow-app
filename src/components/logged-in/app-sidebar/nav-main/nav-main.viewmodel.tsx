import { DATA } from '../nav-user/app-sidebar.constants';
import { useNavMain } from './nav-main.model';
import { NavMainVeiw } from './nav-main.view';

export function NavMainViewModel() {
  const model = useNavMain({ items: DATA.navMain });

  return <NavMainVeiw model={model} />;
}
