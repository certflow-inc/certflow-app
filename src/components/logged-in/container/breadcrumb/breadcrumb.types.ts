export type BreadcrumbItem = {
  label: string;
  url?: string;
  goToBack?: boolean;
};

export type BreadcrumbViewProps = {
  data: BreadcrumbItem[];
};
