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

export interface ICompanyOpenJobsProps {
  url: string;
}

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

export interface ICompanyProfleRow {
  icon: string;
  text: string;
  info: boolean;
}
export interface ICompanyProfleRows extends Array<ICompanyProfleRow> {}

export interface ICompanyProfleProduct {
  label: string;
}
export interface ICompanyProfleProducts extends Array<ICompanyProfleProduct> {}

export interface ICompanyLocationsItem {
  image: string;
  title: string;
  description: string;
}
export interface ICompanyLocationsItems extends Array<ICompanyLocationsItem> {}
