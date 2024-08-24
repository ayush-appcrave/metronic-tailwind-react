export interface ILightSidebarChannelStatsItem {
  logo: string;
  logoDark?: string;
  info: string;
  desc: string;
  path: string;
}
export interface ILightSidebarChannelStatsItems extends Array<ILightSidebarChannelStatsItem> {}

export interface ILightSidebarEntryCalloutProps {
  className: string;
}

export interface ILightSidebarHighlightsRow {
  icon: string;
  text: string;
  total: number;
  stats: number;
  increase: boolean;
}
export interface ILightSidebarHighlightsRows extends Array<ILightSidebarHighlightsRow> {}

export interface ILightSidebarHighlightsItem {
  badgeColor: string;
  lebel: string;
}
export interface ILightSidebarHighlightsItems extends Array<ILightSidebarHighlightsItem> {}

export interface ILightSidebarHighlightsProps {
  limit?: number;
}
