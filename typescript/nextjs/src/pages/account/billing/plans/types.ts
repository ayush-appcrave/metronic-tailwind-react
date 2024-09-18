interface IPlanPrice {
  regular: string;
  annual?: string;
}

export interface IPlanInfo {
  title: string;
  description: string;
  free?: boolean;
  price?: IPlanPrice;
}

interface IFeaturePlans {
  basic: string | boolean;
  pro: string | boolean;
  premium: string | boolean;
  enterprise: string | boolean;
}

interface IFeature {
  title: string;
  plans: IFeaturePlans;
}

export interface IPlansInfo {
  basic: IPlanInfo;
  pro: IPlanInfo;
  premium: IPlanInfo;
  enterprise: IPlanInfo;
}

export interface IPlansItem {
  title: string;
  plans: IFeaturePlans;
}

export interface IPlansItems {
  info: IPlansInfo;
  features: IFeature[];
}
