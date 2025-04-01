export type BreadcrumbItem = {
  label: string;
  url?: string;
};

export type BreadcrumbViewProps = {
  data: BreadcrumbItem[];
};
