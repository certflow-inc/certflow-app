'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import { useRouter } from 'next/navigation';
import React from 'react';
import { BreadcrumbViewProps } from './breadcrumb.types';

export function BreadcrumbView({ data }: BreadcrumbViewProps) {
  const router = useRouter();
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              {item.url && (
                <BreadcrumbLink href={item.url}>{item.label}</BreadcrumbLink>
              )}
              {item.goToBack && (
                <BreadcrumbLink href="#" onClick={() => router.back()}>
                  {item.label}
                </BreadcrumbLink>
              )}
              {!item.url && !item.goToBack && (
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
