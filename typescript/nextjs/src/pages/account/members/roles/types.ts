export interface IRolesItem {
  badge: {
    size: string;
    badge: React.ReactNode;
    fill: string;
    stroke: string;
  };
  title: string;
  subTitle: string;
  description: string;
  team: string;
  path: string;
}
export interface IRolesItems extends Array<IRolesItem> {}
