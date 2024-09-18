export interface ICompanyStatisticsItem {
  number: string;
  label: string;
}
export interface ICompanyStatisticsItems extends Array<ICompanyStatisticsItem> {}

export interface ICompanyStatisticsProps {
  items: ICompanyStatisticsItem[];
}

export interface ICompanyHighlightsItem {
  label: string;
  info: string;
  type?: number;
}
export interface ICompanyHighlightsItems extends Array<ICompanyHighlightsItem> {}

export interface ICompanyOpenJobsItem {
  icon: string;
  link: string;
  desc: string;
  price: string;
}
export interface ICompanyOpenJobsItems extends Array<ICompanyOpenJobsItem> {}

export interface ICompanyNetworkItem {
  icon: string;
  link: string;
}
export interface ICompanyNetworkItems extends Array<ICompanyNetworkItem> {}

export interface ICompanyNetworkProps {
  data: ICompanyNetworkItem[];
  title: string;
  className?: string;
}

export interface ICompanyProfileRow {
  icon: string;
  text: string;
  info: boolean;
}
export interface ICompanyProfileRows extends Array<ICompanyProfileRow> {}

export interface ICompanyProfileProduct {
  label: string;
}
export interface ICompanyProfileProducts extends Array<ICompanyProfileProduct> {}

export interface ICompanyLocationsItem {
  image: string;
  title: string;
  description: string;
}
export interface ICompanyLocationsItems extends Array<ICompanyLocationsItem> {}
