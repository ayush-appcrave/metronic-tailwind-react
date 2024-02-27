export interface INetworkItem {
  name: string;
  info: string;
  avatar: {
    className: string;
    fallback?: string;
    image?: string;
    imageClass?: string;
    badgeClass: string;
  };
  email: string;
  team: {
    group: Array<{ filename?: string; variant: string; fallback?: string }>;
    more?: {
      number: number;
      variant: string;
    };
  };
  statistics: Array<{ total: string; description: string }>;
  connected: boolean;
}
export interface INetworkItems extends Array<INetworkItem> {}
