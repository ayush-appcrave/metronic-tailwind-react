export interface IUserProfileBasicSettingsProps {
  title: string;
}

export interface IUserProfileCommunityBadgesItem {
  title: string;
  stroke: string;
  fill: string;
  icon: string;
  iconColor: string;
}
export interface IUserProfileCommunityBadgesItems extends Array<IUserProfileCommunityBadgesItem> {}

export interface IUserProfileCalendarAccountsItem {
  logo: string;
  title: string;
  email: string;
}
export interface IUserProfileCalendarAccountsItems
  extends Array<IUserProfileCalendarAccountsItem> {}

export interface IUserProfileConnectionsItem {
  avatar: string;
  name: string;
  connections: number;
  jointLinks: number | string;
}
export interface IUserProfileConnectionsItems extends Array<IUserProfileConnectionsItem> {}

export interface IUserProfileConnectionsProps {
  url: string;
}
