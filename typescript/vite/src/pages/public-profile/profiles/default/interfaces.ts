export interface IDefaultCommunityBadgesItem {
  stroke: string;
  fill: string;
  icon: string;
  iconColor: string;
}

export interface IDefaultCommunityBadgesItems extends Array<IDefaultCommunityBadgesItem> {}

export interface IDefaultTagsProps {
  title: string;
  className?: string;
}
