export interface ICreatorStatisticsItem {
  value: string;
  title: string;
}
export interface ICreatorStatisticsItems extends Array<ICreatorStatisticsItem> {}

export interface ICreatorStatisticsProps {
  data: ICreatorStatisticsItem[];
}

export interface ICreatorUsersItem {
  image: string;
}
export interface ICreatorUsersItems extends Array<ICreatorUsersItem> {}

export interface ICreatorUsersProps {
  items: ICreatorUsersItem[];
  title: string;
  url: string;
}

export interface ICreatorSummaryItem {
  icon: string;
  info: string;
}
export interface ICreatorSummaryItems extends Array<ICreatorSummaryItem> {}

export interface ICreatorSummaryProps {
  title: string;
}

export interface ICreatorFeaturesHighlightProps {
  image: string;
  title: string;
  description: string;
  more: { title: string; url: string };
  features: string[];
}

export interface ICreatorWorksItem {
  url: string;
  title: string;
  image: string;
  authorName: string;
  authorAvatar: string;
  likes: number;
  comments: number;
}
export interface ICreatorWorksItems extends Array<ICreatorWorksItem> {}

export interface ICreatorUpcomingEventsItem {
  month: string;
  date: string;
  image: string;
  label: string;
  title: string;
  desc: string;
}
export interface ICreatorUpcomingEventsItems extends Array<ICreatorUpcomingEventsItem> {}

export interface ICreatorActivitiesProps {
  url: string;
}
