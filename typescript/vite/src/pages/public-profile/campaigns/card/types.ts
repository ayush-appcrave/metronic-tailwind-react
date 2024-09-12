export interface ICampaignsContentItem {
  logo: string;
  logoSize?: string;
  logoDark?: string;
  title: string;
  description: string;
  status: {
    variant: string;
    label: string;
  };
  statistics: Array<{ total: string; description: string }>;
  progress: {
    variant: string;
    value: number;
  };
}
export interface ICampaignsContentItems extends Array<ICampaignsContentItem> {}

export interface ICampaignsContentProps {
  mode: string;
}
