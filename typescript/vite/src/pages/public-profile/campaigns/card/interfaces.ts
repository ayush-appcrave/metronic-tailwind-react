export interface ICampaignsCardContentItem {
  logo: string;
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
export interface ICampaignsCardContentItems extends Array<ICampaignsCardContentItem> {}

export interface ICampaignsCardContentProps {
  mode: string;
}
