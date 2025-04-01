import { SidebarInset } from '@/components/ui/sidebar';
import { ComponentProps } from 'react';
import { BreadcrumbItem } from './breadcrumb/breadcrumb.types';

export type ContainerViewProps = ComponentProps<typeof SidebarInset> & {
  breadcrumb: BreadcrumbItem[];
};
