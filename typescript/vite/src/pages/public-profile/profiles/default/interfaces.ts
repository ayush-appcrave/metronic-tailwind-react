export interface IDefaultCommunityBadgesItem {
  stroke: string;
  fill: string;
  icon: string;
  iconColor: string;
}
export interface IDefaultCommunityBadgesItems extends Array<IDefaultCommunityBadgesItem> {}

export interface IDefaultUnlockPartnershipsProps {
  url: string;
}

export interface IDefaultAboutTable {
  status: string;
  info: string;
}
export interface IDefaultAboutTables extends Array<IDefaultAboutTable> {}

export interface IDefaultTagsProps {
  title: string;
  className?: string;
}

export interface IDefaultTagsItem {
  label: string;
}
export interface IDefaultTagsItems extends Array<IDefaultTagsItem> {}

export interface IDefaultWorkExperienceProps {
  url: string;
}

export interface IDefaultWorkExperienceItem {
  image?: string;
  title?: string;
  desc?: string;
  date?: string;
  heading?: string;
}
export interface IDefaultWorkExperienceItems extends Array<IDefaultWorkExperienceItem> {}

export interface IDefaultConnectionsProps {
  title: string;
  url: string;
}
export interface IDefaultConnectionsItem {
  avatar: string;
  name: string;
  connections: number;
  connected: boolean;
}
export interface IDefaultConnectionsItems extends Array<IDefaultConnectionsItem> {}

export interface IDefaultContributionsProps {
  title: string;
}

export interface IDefaultRecentUploadsProps {
  title: string;
  url: string;
}

export interface IDefaultRecentUploadsItem {
  image: string;
  desc: string;
  date: string;
}
export interface IDefaultRecentUploadsItems extends Array<IDefaultRecentUploadsItem> {}
