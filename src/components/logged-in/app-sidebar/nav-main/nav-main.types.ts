import { LucideIcon } from 'lucide-react';
import { useNavMainModel } from './nav-main.model';

export type Item = {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items?: Item[];
};

export type NavMainModelProps = { items: Item[] };

export type NavMainViewProps = { model: ReturnType<typeof useNavMainModel> };
