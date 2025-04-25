import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import React from 'react';
import { BreadcrumbViewProps } from './breadcrumb.types';

export function BreadcrumbView({ data }: BreadcrumbViewProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              {item.url ? (
                <BreadcrumbLink href={item.url}>{item.label}</BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              )}
            </BreadcrumbItem>

            {index < data.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
