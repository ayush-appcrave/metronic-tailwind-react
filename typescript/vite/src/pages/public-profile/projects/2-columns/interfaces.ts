export interface IColumns2ProjectsItem {
  status: {
    variant: string;
    label: string;
  };
  logo: string;
  title: string;
  description: string;
  team: {
    group: Array<{ filename?: string; variant: string; fallback?: string }>;
  };
  statistics: Array<{ total: string; description: string }>;
  progress: {
    variant: string;
    value: number;
  };
}
export interface IColumns2ProjectsItems extends Array<IColumns2ProjectsItem> {}
