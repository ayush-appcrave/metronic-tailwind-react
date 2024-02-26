export interface IColumns3ProjectsItem {
  logo: string;
  name: string;
  description: string;
  startDate?: string;
  endDate?: string;
  status: {
    variant: string;
    label: string;
  };
  progress: {
    variant: string;
    value: string;
  };
  team: {
    group: Array<{ filename?: string; variant: string; fallback?: string }>;
  };
}
export interface IColumns3ProjectsItems extends Array<IColumns3ProjectsItem> {}
